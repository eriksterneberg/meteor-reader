Tracker.autorun(function () {
	Meteor.subscribe("eo-en-translations", Session.get("focusWord"));
});