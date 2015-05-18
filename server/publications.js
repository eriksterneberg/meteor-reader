Meteor.publish('documents', function() {
	return Documents.find();
});

TAPi18n.publish('translations', function () {
	return Translations.i18nFind();
});