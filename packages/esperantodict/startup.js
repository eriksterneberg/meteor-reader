Meteor.startup(function() {
	return Deps.autorun(function() {
		var args;
		args = Mediator.subscribe('eo->en');
		if (args) {
			Meteor.subscribe("eo-en-translations", args[1]);
		}
	})
});