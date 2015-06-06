Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
    	return [
	    	Meteor.subscribe('documents'),
            Meteor.subscribe('paragraphs')
    	];
   	}
});


Router.route('/', {
    name: 'frontPage',
});

Router.route('about/', {name: 'aboutPage'})
Router.route('documents/:_id', {
    name: 'document',
    data: function () { return Documents.findOne(this.params._id); }
});