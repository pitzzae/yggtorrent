exports.auth = function function_name(data, callback, auth_obj)
{
	var string_data = data.toString('utf8');
	auth_obj.fetch_url.credential.count++;
	if (string_data == '' && auth_obj.fetch_url.credential.count < 5)
		auth_obj.fetch_url('get_torrent', auth_obj.query, auth_obj.uri_action['get_torrent'].parsing, auth_obj, callback);
	else
		callback(null, "Incorrect identifier");
}