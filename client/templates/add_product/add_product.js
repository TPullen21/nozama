Template.add_product.events({
	"submit .add_product": function(event) {

		var name = event.target.name.value;
		var category = event.target.category.value;
		var description = event.target.description.value;
		var is_featured = event.target.is_featured.value;

		var file = $('#productImage').get(0).files[0];

		if (file) {
			fsFile = new FS.File(file);

			console.log('Here');

			ProductsImages.insert(fsFile, function(err, result) {
				if (!err) {
					console.log('Here2');
					console.log(result);
					var productImage = '/cfs/files/ProductsImages/' + result._id;

					Meteor.call('addProduct', productImage, name, category, description, is_featured);

					/*Products.insert({
						name: name,
						category: category,
						description: description,
						is_featured: is_featured,
						image: productImage,
						createdAt: new Date()
					});*/
				} else {
					console.log('Here3');
					var productImage = '/img/noimage.png';

					Meteor.call('addProduct', productImage, name, category, description, is_featured);

					/*Products.insert({
						name: name,
						category: category,
						description: description,
						is_featured: is_featured,
						image: productImage,
						createdAt: new Date()
					});*/
				}
			});
		}

		// Clear form
		event.target.name.value = "";
		event.target.category.value = "";
		event.target.description.value = "";
		event.target.is_featured.value = "";

		FlashMessages.sendSuccess("Product Added");
		Router.go('/');

		return false;
	}
});