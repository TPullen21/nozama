Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	// Home Route
	this.route('home', {
		path: '/',
		template: 'home',
		data: function() {
			templateData = {
				products: Products.find({is_featured: 1})
			};

			return templateData;
		}
	});

	// Products
	this.route('products', {
		path: '/products',
		template: 'products',
		data: function() {
			templateData = {
				products: Products.find()
			};

			return templateData;
		}
	});
});