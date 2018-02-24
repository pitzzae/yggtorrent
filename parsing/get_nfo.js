exports.get_nfo = function function_name(data, callback)
{
	var string_data = data.toString('utf8');
	string_data = string_data.substr(5, string_data.indexOf('</pre>') - 5);
	callback(string_data);
}
