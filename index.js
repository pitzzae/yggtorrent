const https = require('https');
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
	get_nfo: {
		method: 'POST',
		path: '/engine/get_nfo?',
		parsing: require('./parsing/get_nfo').get_nfo,
		query_params: true
	},
	auth: {
		method: 'POST',
		path: '/user/login',
		parsing: require('./parsing/auth').auth,
		query_params: false
	},
	get_top_day: {
		method: 'GET',
		path: '/engine/ajax_top_query/day',
		parsing: require('./parsing/top_query').parse_json,
		query_params: false
	},
	get_top_week: {
		method: 'GET',
		path: '/engine/ajax_top_query/week',
		parsing: require('./parsing/top_query').parse_json,
		query_params: false
	},
	get_top_month: {
		method: 'GET',
		path: '/engine/ajax_top_query/month',
		parsing: require('./parsing/top_query').parse_json,
		query_params: false
	},
	get_mostseeded: {
		method: 'POST',
		path: '/engine/mostseeded',
		parsing: require('./parsing/most_query').parse_json,
		query_params: false
	},
	get_mostcompleted: {
		method: 'POST',
		path: '/engine/mostcompleted',
		parsing: require('./parsing/most_query').parse_json,
		query_params: false
	}
};

function Client(API_HOST) {
	this.credential = {
		user: null,
		password: null,
	};
	fetch_url.API_HOST = API_HOST || 'yggtorrent.is';
	this.get('get_categories', '', (data) => {
		fetch_url.categories_list = {};
		for (var i = 0; i < data.length; i++)
		{
			if (data[i].cats)
			{
				for (var j = 0; j < data[i].cats.length; j++)
				{
					if (parseInt(data[i].cats[j].value) == data[i].cats[j].value)
						fetch_url.categories_list[data[i].cats[j].value] = data[i].cats[j]['data-categorie'];
				}
			}
		}
	});
}

Client.prototype.set_credential = function(user, password, API_HOST)
{
	fetch_url.credential = {
		user: user,
		password: password,
		count: 0
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
	this.get('get_nfo', 'torrent=' + id, callback);
}

Client.prototype.get_info = function(callback, id)
{
	this.get('get_info', id + '-x', callback);
}

Client.prototype.search = function(callback, search, category, subcategory, page)
{
    var category_tmp = category ? category : 'all';
    var subcategory_tmp = subcategory ? subcategory : 'all';
    var page_tmp = parseInt(page) > 0 ? (parseInt(page) * 50) - 50 : '0';
    this.get('search', 'category=' + category_tmp + '&subcategory=' + subcategory_tmp + '&do=search&name=' + encodeURIComponent(search) + '&page=' + page_tmp, callback);
}

Client.prototype.get_top_day = function(callback)
{
	this.get('get_top_day', '', callback);
}

Client.prototype.get_top_week = function(callback)
{
	this.get('get_top_week', '', callback);
}

Client.prototype.get_top_month = function(callback)
{
	this.get('get_top_month', '', callback);
}

Client.prototype.get_mostseeded = function(callback)
{
	this.get('get_mostseeded', '', callback);
}

Client.prototype.get_mostcompleted = function(callback)
{
	this.get('get_mostcompleted', '', callback);
}

Client.prototype.get_torrent = function(callback, id)
{
	this.get('get_torrent', 'id=' + id, callback);
}

function fetch_url(action, query, parsing, auth, callback)
{
	var headers = {
		hostname: fetch_url.API_HOST,
		port: 443,
		path: uri_action[action].path + (uri_action[action].query_params ? query : ''),
		method: uri_action[action].method,
		headers: {
			'Host': fetch_url.API_HOST,
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
			if (res.statusCode == 301)
			{
				var split_location = res.headers.location.split('/');
				fetch_url.API_HOST = split_location[2];
				fetch_url(action, query, parsing, auth, callback);
			}
			else
			{
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
				else if (action == 'search' || action == 'get_mostseeded' || action == 'get_mostcompleted' ||
					action == 'get_top_day' || action == 'get_top_week' || action == 'get_top_month')
					parsing(buffer, callback, fetch_url.categories_list);
				else
					parsing(buffer, callback);
			}
			
		});
	});
	req.on('error', (e) => {
		console.error(e);
	});
	req.write(uri_action[action].query_params ? '' : query);
	req.end();
}

module.exports = Client;
