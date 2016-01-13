Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	// Home Route
	this.route('home', {
		path: '/',
		template: 'home'
	});
});