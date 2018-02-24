const cheerio = require('cheerio');

exports.auth = function function_name(data, callback, auth_obj)
{
	var string_data = data.toString('utf8');
	var dom = cheerio.load(data.toString('utf8'));
	var result_auth = dom('div[class="alert alert-danger"]').html();
	if (result_auth == null)
		auth_obj.fetch_url('get_torrent', auth_obj.query, auth_obj.uri_action['get_torrent'].parsing, auth_obj, callback);
	else
		callback(result_auth);
}