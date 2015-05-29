var removeFocus = function() {
	$('.focusWord').removeClass('focusWord');
};

var addFocus = function(element) {
	element.addClass('focusWord');
};

Template.document.events({
	'click p span': function(e, template) {
		var target = $(e.target),
			focusWord = Nlp.stripPunctuation(target.text());

		removeFocus();
		addFocus(target);
		Session.set('focusWord', focusWord);

		$('#translationModal').openModal({
		    complete: function() {
				removeFocus();
		    }
		});
	},
});

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
