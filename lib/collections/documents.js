Documents = new Mongo.Collection('documents');

Documents.allow({
	insert: function(userId, doc) {
		return userId;
	}
});

Documents.before.insert(function (userId, doc) {
	doc.userId = userId;
	doc.createdAt = Date.now();
});