EoEnDict = {};


var getTranslation = function(word) {

	// Original
	var items = EsperantoEnglishDict.find({key: word});
	if (items.count() > 0) {
		return items;
	}

	// Lower case
	word = word.toLowerCase();
	items = EsperantoEnglishDict.find({key: word});
	if (items.count() > 0) {
		return items;
	}

	// Simple stemming
	var words = stem(word);
	if (words.length > 0) {
		return EsperantoEnglishDict.find({key: {"$in": words}})
	}
};
EoEnDict.getTranslation = getTranslation;


var stem = function(s) {
	var parts = [];

	for (var j=s.length; j>=0; j--) {
		var substr = s.substring(0, j);
		var items = EsperantoEnglishDict.find({key: substr})
		if (items.count() > 0) {
			parts.push(substr);

			var tail = '-' + s.substring(j, s.length);
			items = EsperantoEnglishDict.find({key: tail});
			if (items.count()) {
				parts.push(tail);
			}

			return parts;
		}
	}

	return parts;
};
EoEnDict.stem = stem;