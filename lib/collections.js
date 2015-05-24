Documents = new Mongo.Collection('documents');
Documents.allow({
	insert: function() { return true; }
});

Translations = new TAPi18n.Collection('translations');
