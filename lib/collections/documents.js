Documents = new Mongo.Collection('documents');

Documents.allow({
	insert: function() { return true; }
});
