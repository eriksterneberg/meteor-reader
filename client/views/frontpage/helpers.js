Template.modalAddText.events({
	'submit form': function(e, template) {
		e.preventDefault();

		// Create main document
		var text = $(e.target).find('[name=text]').val();
		var doc = {
			title: $(e.target).find('[name=title]').val()
		};
        var docId = Documents.insert(doc);

        // Create paragraphs related to document
		var paragraphs = Reader.textToParagraphs(text);
		for (var i=0; i < paragraphs.length; i++) {
			Paragraphs.insert({
				docId: docId,
				text: paragraphs[i]
			});
		};
	}
});

Template.documentsList.helpers({
    documents: function () {
        return Documents.find();
    },
});

Template.frontPage.rendered = function (){
	$('.parallax').parallax();
};