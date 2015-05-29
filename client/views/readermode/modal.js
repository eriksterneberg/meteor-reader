Template.modal.helpers({
	focusWord: function () {
		return Session.get('focusWord');
	},
	translations: function () {
		var word = Session.get('focusWord');

		if (word) {
			return Reader.lookUpWord(word);
		}
	},
});
