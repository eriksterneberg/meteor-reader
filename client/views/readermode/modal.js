Template.modal.helpers({
	focusWord: function () {
		return Session.get('focusWord');
	},
	translation: function () {
		var word = Session.get('focusWord');
		return Nlp.lookUpWord(word);
	},
});