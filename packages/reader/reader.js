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
	lockScroll();

	var skip = getParagraphsSkip(docId) + PARAGRAPHS_INCREMENT;
    Session.set('/' + docId + '/paragraphsSkip/', skip);
};

var decrementParagraphsSkip = function (docId) {
	lockScroll();

	var skip = getParagraphsSkip(docId) - PARAGRAPHS_INCREMENT;
	skip = skip >= 0 ? skip : 0;
    Session.set('/' + docId + '/paragraphsSkip/', skip);
};

var isLocked = function (docId) {
 	return Session.get('/' + docId + '/scrollLock/');
};

var lockScroll = function (docId) {
	if (!isLocked(docId)) {
		Session.set('/' + docId + '/scrollLock/', true);
		_releaseOnTimeout(docId);
	}
};

var unlockScroll = function (docId) {
	Session.set('/' + docId + '/scrollLock/', false);
};

var _releaseOnTimeout = function(docId) {
	Meteor.setTimeout(function(){
		unlockScroll(docId);
	}, 4000);
}

Reader = {
	textToParagraphs: textToParagraphs,
	getParagraphsSkip: getParagraphsSkip,
	incrementParagraphsSkip: incrementParagraphsSkip,
	decrementParagraphsSkip: decrementParagraphsSkip,
	unlockScroll: unlockScroll,
	isLocked: isLocked,
	PARAGRAPHS_INCREMENT: PARAGRAPHS_INCREMENT
};