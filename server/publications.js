Meteor.publish('documents', function() {
	return Documents.find({userId: this.userId});
});

Meteor.publish('paragraphs', function(docId) {
	if (docId) {
		return Paragraphs.find({docId: docId});
	}
});