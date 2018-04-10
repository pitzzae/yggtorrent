function extract_data(data, result, categories_list) {
	data.forEach((e) => {
		if (categories_list[e[0].replace(/<div class="hidden">|<([\x00-\xff])+/g, '')])
			result.push({
				type_id: e[0].replace(/<div class="hidden">|<([\x00-\xff])+/g, ''),
				type: categories_list[e[0].replace(/<div class="hidden">|<([\x00-\xff])+/g, '')],
				torrent: e[1].replace(/<[a-z]([\x00-\xff])+">|<\/[a-z]>/g, ''),
				id: e[2].replace(/<a target="|"([\x00-\xff])+/g, ''),
				compl: e[6],
				age: e[4].replace(/<div([\x00-\xff])+div>/g, ''),
				size: e[5],
				s: e[7],
				l: e[8]
			});
	});
}

exports.parse_json = function(data, callback, categories_list)
{
	var data_json = [];
	var result = [];
	try
	{
		data_json = JSON.parse(data.toString('utf8'));
		extract_data(data_json, result, categories_list);
		callback(result, null);
	}
	catch (e)
	{
		callback(result, 'JSON parse error');
	}
}