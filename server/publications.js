Meteor.publish('documents', function() {
	return Documents.find({userId: this.userId});
});
