Meteor.publish('documents', function() {
	return Documents.find({userId: this.userId});
});

Meteor.publish('paragraphs', function(docId, limit, skip) {
	if (docId) {
		return Paragraphs.find({docId: docId}, {limit: limit, skip: skip});
	}
});