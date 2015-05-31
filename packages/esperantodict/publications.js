Meteor.publish('eo-en-translations', function(word) {
	return EsperantoEnglishDict.find({key: word});
});
