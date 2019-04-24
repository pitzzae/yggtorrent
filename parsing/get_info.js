const cheerio = require('cheerio');

exports.get_info = function function_name(data, callback)
{
	var dom = cheerio.load(data.toString('utf8'));
	let html_info = dom('div[class="description-header"]').next().html();
	if (html_info)
		callback(html_info.trim().replace(/<\/[a-z]+>/g, '$&\n'));
	else
		callback(data.toString('utf8'));
}