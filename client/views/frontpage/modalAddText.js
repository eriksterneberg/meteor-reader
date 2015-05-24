Template.modalAddText.events({
	'submit form': function(e, template) {
		e.preventDefault();

		var text = $(e.target).find('[name=text]').val();
		var doc = Reader.textToDocument(text);
		console.log('Title:');
		console.log($(e.target).find('[name=title]').val());
		doc.title = $(e.target).find('[name=title]').val();

        Documents.insert(doc);
	}
});