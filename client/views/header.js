Template.header.events({
	'click .language-selector': function(e, template) {
		e.preventDefault();
		Session.set('language', e.target.innerText);
	},
	'click .add-text': function(e, template) {
		e.preventDefault();
		$('#modalAddText').openModal();
	}
});
