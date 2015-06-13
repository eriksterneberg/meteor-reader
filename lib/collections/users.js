Meteor.users.allow({
	update: function(userId, doc, fieldNames, modifier) {
		console.log('Trying to update mongo user:');
		console.log(userId, doc, fieldNames, modifier);
		return userId == Meteor.user()._id;
	}
});
