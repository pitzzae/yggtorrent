const cheerio = require('cheerio');

function get_data_on_line(data)
{
	var data_extract = {
		type: "",
		torrent: "",
		id: null,
		age: "",
		ratio: 0,
		upload: 0,
		total: 0,
		size: "",
		p: 0,
		s: "",
		l: ""
	}
	for (var i = 0; i < data.length; i++)
	{
		if (data[i].name == "td")
		{
			for (var j = 0; j < data[i].children.length; j++)
			{
				//Get torrent name
				if (data[i].children[j].name == 'a' &&
					data[i].children[j].attribs.class == 'torrent-name')
					data_extract.torrent = data[i].children[j].children[0].data;
				//Get torrent type
				if (data[i].children[j].name == 'span' &&
					data[i].children[j].children[5].name == 'i' &&
					data[i].children[j].children[5].children[0].name == 'a' &&
					data[i].children[j].children[5].children[0].children[0])
					data_extract.type = data[i].children[j].children[5].children[0].children[0].data;
				//Get torrent id
				if (data[i].children[j].name == 'a' &&
					data[i].children[j].attribs &&
					data[i].children[j].attribs.id == 'get_nfo' &&
					data[i].children[j].attribs.target)
					data_extract.id = data[i].children[j].attribs.target;
				//Get torrent Age
				if (data[i].children[j].name == 'i' &&
					data[i].children.length == 2)
					data_extract.age = data[i].children[1].data.replace('\n', '');
				//Get torrent size
				if (data[i].children[j].type == 'text' && i == 7)
					data_extract.size = data[i].children[j].data;
				//Get torrent seed
				if (data[i].children[j].type == 'text' && i == 9)
					data_extract.s = data[i].children[j].data;
				//Get torrent leech
				if (data[i].children[j].type == 'text' && i == 11)
					data_extract.l = data[i].children[j].data;
			}
		}

	}
	return data_extract;
}

exports.search = function function_name(data, callback)
{
	var dom = cheerio.load(data.toString('utf8'));
	var data_line = [];
	dom('table[class="table table-striped"]').find('tbody > tr').each(function() {
		data_line.push(get_data_on_line(this.children));
	});
	callback(data_line);
}