Meteor.publish('eo-en-translations', function(word) {
	if (word) {
		return EoEnDict.getTranslation(word);
	}
});
