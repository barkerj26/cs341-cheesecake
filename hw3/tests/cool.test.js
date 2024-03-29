/*
 *	Made by Jaden Barker for CS-341
 */

var fs = require('fs');

test('test selectEvent', () => {
	// read the index.html file into a string
	var html = fs.readFileSync('public/index.html', 'utf8');
	expect(html).toEqual(expect.anything());

	// put the html into a testing dom and do a sanity check
	document.body.innerHTML = html;
	const $ = require('jquery');
	expect($('h1').html()).toBe("Cheesecake Order Form");
});
