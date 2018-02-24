const cheerio = require('cheerio');
const sub_categories = [
	'sub_categories_FilmVidéo',
	'sub_categories_Audio',
	'sub_categories_Application',
	'sub_categories_Jeu-vidéo',
	'sub_categories_eBook',
	'sub_categories_Emulation',
	'sub_categories_GPS'
];

function get_sub_categories_list(dom, pos, categories_list) {
	if (pos < sub_categories.length)
	{
		dom('#' + sub_categories[pos]).each(function() {
			if (this.children)
			{
				var sub_categories_list = [];
				for (var i = 0; i < this.children.length; i++)
				{
					if (this.children[i].attribs)
						sub_categories_list.push({"value": this.children[i].attribs.value, "data-categorie": this.children[i].children[0].data});
				}
				categories_list[++pos].cats = sub_categories_list;
				get_sub_categories_list(dom, pos, categories_list);
			}
		});
	}
}

exports.get_categories = function function_name(data, callback)
{
	var dom = cheerio.load(data.toString('utf8'));
	var categories_list = [];
	dom('#categorie').each(function() {
		if (this.children)
		{
			for (var i = 0; i < this.children.length; i++)
			{
				if (this.children[i].attribs)
					categories_list.push(this.children[i].attribs);
			}
			get_sub_categories_list(dom, 0, categories_list);
			callback(categories_list);
		}
	});
}
