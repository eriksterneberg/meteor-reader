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


Reader = {
	textToDocument: textToDocument,
};