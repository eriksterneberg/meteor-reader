Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() {
    	return [
	    	Meteor.subscribe('documents'),
    	];
   	}
});

Router.route('/', {
	name: 'documentsList'
});
Router.route('about/', {name: 'aboutPage'})
Router.route('documents/:_id', {
    name: 'document',
    waitOn: function() {
    	return TAPi18n.subscribe("translations");
    },
    data: function () { return Documents.findOne(this.params._id); }
});