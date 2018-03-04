const https = require('https');
const API_HOST = 'yggtorrent.com';
const uri_action = {
	get_categories: {
		method: 'GET',
		path: '/engine/search',
		parsing: require('./parsing/get_categories').get_categories,
		query_params: false
	},
	get_torrent: {
		method: 'GET',
		path: '/engine/download_torrent?',
		parsing: require('./parsing/get_torrent').get_torrent,
		query_params: true
	},
	get_info: {
		method: 'GET',
		path: '/torrent/all/all/',
		parsing: require('./parsing/get_info').get_info,
		query_params: true
	},
	search: {
		method: 'GET',
		path: '/engine/search?',
		parsing: require('./parsing/search').search,
		query_params: true
	},
	get_popular: {
		method: 'GET',
		path: '/torrents/popular?',
		parsing: require('./parsing/search').search,
		query_params: true
	},
	get_yesterday: {
		method: 'GET',
		path: '/torrents/yesterday?',
		parsing: require('./parsing/search').search,
		query_params: true
	},
	get_today: {
		method: 'GET',
		path: '/torrents/today?',
		parsing: require('./parsing/search').search,
		query_params: true
	},
	get_nfo: {
		method: 'POST',
		path: '/engine/get_nfo',
		parsing: require('./parsing/get_nfo').get_nfo,
		query_params: false
	},
	auth: {
		method: 'POST',
		path: '/user/login',
		parsing: require('./parsing/auth').auth,
		query_params: false
	}
};

function Client() {
	this.credential = {
		user: null,
		password: null,
	};
}

Client.prototype.set_credential = function(user, password)
{
	fetch_url.credential = {
		user: user,
		password: password,
	};
}

Client.prototype.get = function(action, query, callback)
{
	if(typeof query === 'function')
	{
		callback = query;
		query = '';
	}
	if(uri_action[action])
		fetch_url(action, query, uri_action[action].parsing, null, callback);
	else
	{
		console.log(`Wrong action, action: ${action}, query: ${query}`);
		if (callback)
			callback(null);
		else
			console.log('No callback');
	}
};

Client.prototype.get_categories = function(callback)
{
	this.get('get_categories', '', callback);
}

Client.prototype.get_nfo = function(callback, id)
{
	this.get('get_nfo', 'torrent_id=' + id, callback);
}

Client.prototype.get_info = function(callback, id)
{
	this.get('get_info', id, callback);
}

Client.prototype.search = function(callback, search, category, subcategory)
{
	var category_tmp = category ? category : 'all';
	var subcategory_tmp = subcategory ? subcategory : 'all';
	this.get('search', 'category=' + category_tmp + '&subcategory=' + subcategory_tmp + '&q=' + encodeURIComponent(search), callback);
}

Client.prototype.get_popular = function(callback, id)
{
	this.get('get_popular', 'category=' + id + '&per_page=100', callback);
}

Client.prototype.get_yesterday = function(callback, id)
{
	this.get('get_yesterday', 'category=' + id  + '&per_page=100', callback);
}

Client.prototype.get_today = function(callback, id)
{
	this.get('get_today', 'category=' + id + '&per_page=100', callback);
}

Client.prototype.get_torrent = function(callback, id)
{
	this.get('get_torrent', 'id=' + id, callback);
}

function fetch_url(action, query, parsing, auth, callback)
{
	var headers = {
		hostname: API_HOST,
		port: 443,
		path: uri_action[action].path + (uri_action[action].query_params ? query : ''),
		method: uri_action[action].method,
		headers: {
			'Host': API_HOST,
			'Content-Length': Buffer.byteLength(uri_action[action].query_params ? '' : query, 'utf8'),
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		}
	};
	if (auth && auth.session && this.fetch_url)
	{
		if (action ===  'auth')
		{
			query = "id="+this.fetch_url.credential.user+"&pass="+this.fetch_url.credential.password+"&bGodkend=";
			headers.headers['Content-Length'] = Buffer.byteLength(query);
		}
		headers.headers['Cookie'] = auth.session;
	}
	var data_res = [];
	var req = https.request(headers, (res) => {
		res.on('data', (d) => {
			data_res.push(d);
		});
		res.on('end', (d) => {
			var buffer = Buffer.concat(data_res);
			if (action == 'get_torrent')
				parsing(buffer, callback, {
					uri_action: uri_action,
					fetch_url: fetch_url,
					session: res.headers['set-cookie'],
					action: action,
					query: query
				});
			else if (action == 'auth')
				parsing(buffer, callback, {
					uri_action: auth.uri_action,
					fetch_url: auth.fetch_url,
					session: auth.session,
					action: auth.action,
					query: auth.query
				});
			else
				parsing(buffer, callback);
		});
	});
	req.on('error', (e) => {
		console.error(e);
	});
	req.write(uri_action[action].query_params ? '' : query);
	req.end();
}

module.exports = Client;
