Template.documentsList.helpers({
    documents: function () {
        return Documents.find();
    },
});