const cheerio = require('cheerio');

exports.get_info = function function_name(data, callback)
{
	var dom = cheerio.load(data.toString('utf8'));
	callback(dom('div[id="description"]').html().trim());
}