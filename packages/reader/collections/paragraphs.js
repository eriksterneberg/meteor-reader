Paragraphs = new Mongo.Collection('paragraphs');

Paragraphs.allow({
	insert: function(userId, doc) {
		return userId;
	}
});

// Paragraphs.before.insert(function (userId, doc) {
// 	doc.userId = userId;
// 	doc.createdAt = Date.now();
// });

Reader.Paragraphs = Paragraphs;