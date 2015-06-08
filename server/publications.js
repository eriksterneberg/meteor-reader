Meteor.publish('documents', function() {
	return Documents.find({userId: this.userId});
});

var LIMIT = 10;
Meteor.publish('paragraphs', function(docId, skip) {
	if (docId) {
		return Paragraphs.find({docId: docId}, {limit: LIMIT, skip: skip});
	}
});