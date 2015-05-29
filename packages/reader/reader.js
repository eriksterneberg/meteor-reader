var _splitLines = function (lines) {
	return lines.map(function(line) {
		return line.split(' ');
	});
};

var textToDocument = function (text) {
	var lines = text.split(/\n+/);

	return {
		'text': _splitLines(lines)
	};
};


var lookUpWord = function (word) {
	Meteor.subscribe('eo-en-translations', word);
    return EsperantoEnglishDict.find({key: word});
};

Reader = {
	textToDocument: textToDocument,
	lookUpWord: lookUpWord
};