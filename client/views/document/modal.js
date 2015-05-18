Template.modal.helpers({
	focusWord: function () {
		return Session.get('focusWord');
	},
	translation: function () {
		var word = Session.get('focusWord');
		console.log('Looking up: ' + word);
		var obj = Translations.findOne({'key': word});
		// console.log(obj);
		if (obj)
			return obj.content;
		else
			return TAPi18n.__("no_translation")
		// return TAPi18n.__(word);
	},
	pronunciation: 	function () {
		var word = Session.get('focusWord');
		console.log('Looking up: ' + word);
		var obj = Translations.findOne({'key': word});
		// console.log(obj);
		if (obj)
			return obj.pronunciation;
		else
			return TAPi18n.__("no_translation")
		// return TAPi18n.__(word);
	},
});
