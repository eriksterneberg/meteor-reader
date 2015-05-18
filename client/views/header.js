Template.header.rendered = function () {
    $(".button-collapse").sideNav();
    // $('.collapsible').collapsible();
};

Template.header.events({
	'click .language-selector': function(e, template) {
		e.preventDefault();
		Session.set('language', e.target.innerText);
	}
});
