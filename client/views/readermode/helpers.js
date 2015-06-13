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
	'click #goPreviousPage': function(e, template) {
		var docId = Session.get('currentDocId');
       	if (Reader.isLocked(docId)) {
			return;
		}
        Reader.decrementParagraphsSkip(docId);
	},
	'click #goNextPage': function(e, template) {
		var docId = Session.get('currentDocId');
       	if (Reader.isLocked(docId)) {
			return;
		}
        Reader.incrementParagraphsSkip(docId);
	}
});

Template.document.rendered = function () {
	window.scrollTo(0, 0);

	if (this.hasOwnProperty('data') && this.data.hasOwnProperty('_id')) {
		Session.set('currentDocId', this.data._id);
	}
};

Template.document.helpers({
	paragraphs: function () {
		return Paragraphs.find();
	},
	lessResults: function () {
	    var docId = Session.get('currentDocId');
		return Reader.getParagraphsSkip(docId) !== 0;
	},
	moreResults: function () {
	    // If, once the subscription is ready, we have less rows than we
	    // asked for, we've got all the rows in the collection.
	    return !(Paragraphs.find().count() < Reader.PARAGRAPHS_INCREMENT);
	}
});

Template.modal.helpers({
	focusWord: function () {
		return Session.get('focusWord');
	},
	translations: function () {
		return EsperantoEnglishDict.find();
	}
});
