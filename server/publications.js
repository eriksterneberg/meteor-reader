Meteor.publish('documents', function() {
	return Documents.find({userId: this.userId});
});

Meteor.publish('paragraphs', function(docId, skip) {
	if (docId) {
		return Paragraphs.find(
			{docId: docId},
			{limit: PARAGRAPHS_INCREMENT, skip: skip});
	}
});
