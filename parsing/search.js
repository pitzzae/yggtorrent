const cheerio = require('cheerio');

function get_data_on_line(data)
{
	var data_extract = {
		type: "",
		torrent: "",
		id: null,
		compl: "",
		age: "",
		size: "",
		s: "",
		l: ""
	}
	for (var i = 0; i < data.length; i++)
	{
		if (data[i].name == "td")
		{
			//Get torrent type
			if (data[i].children &&
				data[i].children[0] &&
				data[i].children[0].name == 'div' &&
				data[i].children[0].children && 
				data[i].children[0].attribs &&
				data[i].children[0].attribs.class == 'hidden' &&
				data[i].children[0].children[0] &&
				data[i].children[0].children[0].type == 'text' &&
				data[i].children[0].next &&
				data[i].children[0].next.name == 'a')
				data_extract.type = data[i].children[0].children[0].data;
			//Get torrent name
			if (data[i].children &&
				data[i].children[0] &&
				data[i].children[0].name == 'a' &&
				data[i].children[0].children &&
				data[i].children[0].children[0] &&
				data[i].children[0].children[0].type == 'text')
				data_extract.torrent = data[i].children[0].children[0].data.replace(/\n/g, '').trim();
			//Get torrent id
			if (data[i].children &&
				data[i].children[0] &&
				data[i].children[0].name == 'a' &&
				data[i].children[0].children &&
				data[i].children[0].children[0] &&
				data[i].children[0].children[0].name == 'img')
				data_extract.id = data[i].children[0].children[0].parent.attribs.target;
			//Get torrent Age
			if (data[i].children &&
				data[i].children[0] &&
				data[i].children[0].name == 'div' &&
				data[i].children[1].name == 'span' &&
				data[i].children[2].type == 'text')
				data_extract.age = data[i].children[2].data.trim();
			//Get torrent size
			if (data[i] && i == 11 && 
				data[i].children &&
				data[i].children[0] &&
				data[i].children[0].type == 'text' &&
				data[i].children[0].data)
				data_extract.size = data[i].children[0].data;
			//Get torrent complete
			if (data[i] && i == 13 && 
				data[i].children &&
				data[i].children[0] &&
				data[i].children[0].type == 'text' &&
				data[i].children[0].data)
				data_extract.compl = data[i].children[0].data;
			//Get torrent seed
			if (data[i] && i == 15 && 
				data[i].children &&
				data[i].children[0] &&
				data[i].children[0].type == 'text' &&
				data[i].children[0].data)
				data_extract.s = data[i].children[0].data;
			//Get torrent leech
			if (data[i] && i == 17 && 
				data[i].children &&
				data[i].children[0] &&
				data[i].children[0].type == 'text' &&
				data[i].children[0].data)
				data_extract.l = data[i].children[0].data;
		}

	}
	return data_extract;
}

exports.search = function function_name(data, callback)
{
	var dom = cheerio.load(data.toString('utf8'));
	var data_line = [];
	dom('table[class="table"]').find('tbody > tr').each(function() {
		data_line.push(get_data_on_line(this.children));
	});
	callback(data_line);
}