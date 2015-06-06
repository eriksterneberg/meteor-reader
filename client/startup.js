Meteor.startup(function () {
	Session.setDefault('focusWord', '<none>');

	PARAGRAPHS_INCREMENT = 20;
	Session.setDefault('paragraphsLimit', PARAGRAPHS_INCREMENT);
});