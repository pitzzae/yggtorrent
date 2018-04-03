const cheerio = require('cheerio');

exports.get_info = function function_name(data, callback)
{
	var dom = cheerio.load(data.toString('utf8'));
	callback(dom('div[class="description-header"]').next().html().trim().replace(/<\/[a-z]+>/g, '$&\n'));
}