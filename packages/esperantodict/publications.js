Meteor.publish('eo-en-translations', function(word) {
	var items = EsperantoEnglishDict.find({key: word});

	if (items.count() > 0) {
		return items;
	}

	return EsperantoEnglishDict.find({key: word.toLowerCase()});
});
