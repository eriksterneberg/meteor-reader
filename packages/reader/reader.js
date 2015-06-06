var _splitLines = function (lines) {
	return lines.map(function(line) {
		return line.split(' ');
	});
};

var textToParagraphs = function (text) {
	var lines = text.split(/\n+/);

	return _splitLines(lines);
};


var PARAGRAPHS_INCREMENT = 20;

var getParagraphsLimit = function (docId) {
	var limit = Session.get('paragraphsLimit');
	return limit ? limit : PARAGRAPHS_INCREMENT;
};

var setParagraphsLimit = function (docId) {
    Session.set("paragraphsLimit",
    Session.get("paragraphsLimit") + PARAGRAPHS_INCREMENT);
};

Reader = {
	textToParagraphs: textToParagraphs,
	getParagraphsLimit: getParagraphsLimit,
	setParagraphsLimit: setParagraphsLimit
};