Template.modalAddText.events({
	'submit form': function(e, template) {
		e.preventDefault();

		var text = $(e.target).find('[name=text]').val();
		var doc = Reader.textToDocument(text);
		doc.title = $(e.target).find('[name=title]').val();

        Documents.insert(doc);
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