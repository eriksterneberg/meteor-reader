var _splitLines = function (lines) {
	return lines.map(function(line) {
		return line.split(' ');
	});
};

var textToParagraphs = function (text) {
	var lines = text.split(/\n+/);

	return _splitLines(lines);
};


PARAGRAPHS_INCREMENT = 10;

var getParagraphsSkip = function (docId) {
	try {
		var skip = Meteor.user().profile.savedlocations.docId;
	} catch (error) {}

	if (skip === undefined) {
		skip = 0;
	}
	return skip;
};

var setParagraphSkip = function (docId, skip) {
	try {
		var savedlocations = Meteor.user().profile.savedlocations;
	} catch (error) {}

	if (savedlocations == undefined) {
		savedlocations = {};
	}
	savedlocations.docId = skip;

	Meteor.users.update(
		{_id: Meteor.user()._id},
		{$set: {'profile.savedlocations': savedlocations}});
};

var incrementParagraphsSkip = function (docId) {
	var skip = getParagraphsSkip(docId) + PARAGRAPHS_INCREMENT;
    setParagraphSkip(docId, skip);
};

var decrementParagraphsSkip = function (docId) {
	var skip = getParagraphsSkip(docId) - PARAGRAPHS_INCREMENT;
	skip = skip >= 0 ? skip : 0;
    setParagraphSkip(docId, skip);
};

Reader = {
	textToParagraphs: textToParagraphs,
	getParagraphsSkip: getParagraphsSkip,
	incrementParagraphsSkip: incrementParagraphsSkip,
	decrementParagraphsSkip: decrementParagraphsSkip,
	PARAGRAPHS_INCREMENT: PARAGRAPHS_INCREMENT
};