Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() {
    	return [
	    	Meteor.subscribe('documents'),
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