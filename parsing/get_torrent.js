exports.get_torrent = function function_name(data, callback, auth_obj)
{
	var string_data = data.toString('utf8');
	if (string_data == 'Vous devez vous connecter pour télécharger un torrent')
		auth_obj.fetch_url('auth', auth_obj.query, auth_obj.uri_action['auth'].parsing, auth_obj, callback);
	else
		callback(data);
}
