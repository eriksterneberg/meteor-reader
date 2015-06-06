Meteor.publish('documents', function() {
	return Documents.find({userId: this.userId});
});

Meteor.publish('paragraphs', function() {
	return Paragraphs.find();
});