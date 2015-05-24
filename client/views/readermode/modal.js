var lookUp = function() {
	var word = Session.get('focusWord'),
		obj = Translations.findOne({'key': word});

	return obj;
};

Template.modal.helpers({
	focusWord: function () {
		return Session.get('focusWord');
	},
	translation: function () {
		var obj = lookUp();
		return obj ? obj.content : TAPi18n.__("no_translation");
	},
	pronunciation: 	function () {
		var obj = lookUp();
		return obj ? obj.pronunciation : TAPi18n.__("no_translation");
	},
});