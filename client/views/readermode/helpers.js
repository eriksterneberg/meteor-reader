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

Template.document.rendered = function () {
	if (this.hasOwnProperty('data') && this.data.hasOwnProperty('_id')) {
		Session.set('currentDocId', this.data._id);
	}
};

Template.document.helpers({
	paragraphs: function () {
		return Paragraphs.find();
	},
	moreResults: function () {
	    // If, once the subscription is ready, we have less rows than we
	    // asked for, we've got all the rows in the collection.
	    var docId = Session.get('currentDocId');
	    return !(Paragraphs.find().count() < Reader.getParagraphsLimit(docId));
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

// whenever #showMoreResults becomes visible, retrieve more results
function showMoreVisible() {
    var threshold, target = $("#showMoreResults");
    if (!target.length) return;
 
    threshold = $(window).scrollTop() + $(window).height() - target.height();
 
    if (target.offset().top < threshold) {
        if (!target.data("visible")) {
            target.data("visible", true);
            var docId = Session.get('currentDocId');
            Reader.setParagraphsLimit(docId);
        }
    } else {
        if (target.data("visible")) {
            target.data("visible", false);
        }
    }        
}

// run the above func every time the user scrolls
$(window).scroll(showMoreVisible);
