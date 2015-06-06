var _splitLines = function (lines) {
	return lines.map(function(line) {
		return line.split(' ');
	});
};

var textToParagraphs = function (text) {
	var lines = text.split(/\n+/);

	return _splitLines(lines);
};


var PARAGRAPHS_INCREMENT = 10;

var getParagraphsLimit = function (docId) {
	var limit = Session.get('/' + docId + '/paragraphsLimit/');
	return limit ? limit : PARAGRAPHS_INCREMENT;
};

var setParagraphsLimit = function (docId) {
    Session.set(
    	'/' + docId + '/paragraphsLimit/',
    	getParagraphsLimit(docId) + PARAGRAPHS_INCREMENT);
};

var getParagraphsSkip = function (docId) {
	return getParagraphsLimit(docId) - PARAGRAPHS_INCREMENT;
};

Reader = {
	textToParagraphs: textToParagraphs,
	getParagraphsLimit: getParagraphsLimit,
	setParagraphsLimit: setParagraphsLimit,
	getParagraphsSkip: getParagraphsSkip
};