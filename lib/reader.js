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

var getSkip = function (docId) {
	try {
		var skip = Meteor.user().profile.savedlocations.docId;
	} catch (error) {}

	if (skip === undefined) {
		skip = 0;
	}
	return skip;
};

var setSkip = function (docId, skip) {
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

var incrementSkip = function (docId) {
	var skip = getSkip(docId) + PARAGRAPHS_INCREMENT;
    setSkip(docId, skip);
};

var decrementSkip = function (docId) {
	var skip = getSkip(docId) - PARAGRAPHS_INCREMENT;
	skip = skip >= 0 ? skip : 0;
    setSkip(docId, skip);
};

Reader = {
	textToParagraphs: textToParagraphs,
	getSkip: getSkip,
	incrementSkip: incrementSkip,
	decrementSkip: decrementSkip,
	PARAGRAPHS_INCREMENT: PARAGRAPHS_INCREMENT
};