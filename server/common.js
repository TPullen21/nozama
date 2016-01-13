Meteor.publish("Products", function() {
	return Products.find();
});

Meteor.publish("Categories", function() {
	return Categories.find();
});

Meteor.publish("ProductsImages", function() {
	return ProductsImages.find();
});