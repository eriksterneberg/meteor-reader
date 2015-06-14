Meteor.startup(function() {
	return Deps.autorun(function() {
		var args;
		args = Mediator.subscribe('eo->en');
		console.log('Subscribing to the eo->en channel.');
		if (args) {
			console.log('EoEn dictionary looking up the word:');
			console.log(args[1]);
			Meteor.subscribe("eo-en-translations", args[1]);
		}
	})
});