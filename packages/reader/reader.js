var _splitLines = function (lines) {
	return lines.map(function(line) {
		return line.split(' ');
	});
};

var textToParagraphs = function (text) {
	var lines = text.split(/\n+/);

	return _splitLines(lines);
};


PARAGRAPHS_INCREMENT = 25;

var getParagraphsSkip = function (docId) {
	var skip = Session.get('/' + docId + '/paragraphsSkip/');
	if (skip === undefined) {
		skip = 0;
	}
	return skip;
};

var incrementParagraphsSkip = function (docId) {
	var skip = getParagraphsSkip(docId) + PARAGRAPHS_INCREMENT;
    Session.set('/' + docId + '/paragraphsSkip/', skip);
};

var decrementParagraphsSkip = function (docId) {
	var skip = getParagraphsSkip(docId) - PARAGRAPHS_INCREMENT;
	skip = skip >= 0 ? skip : 0;
    Session.set('/' + docId + '/paragraphsSkip/', skip);
};

Reader = {
	textToParagraphs: textToParagraphs,
	getParagraphsSkip: getParagraphsSkip,
	incrementParagraphsSkip: incrementParagraphsSkip,
	decrementParagraphsSkip: decrementParagraphsSkip
};