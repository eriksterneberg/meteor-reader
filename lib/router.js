Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
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
    waitOn: function() {
        return [
            Meteor.subscribe(
                'paragraphs',
                this.params._id,
                Reader.getSkip(this.params._id)
            )
        ];
    },
    data: function () {
        return Documents.findOne(this.params._id);
    }
});