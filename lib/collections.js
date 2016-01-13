Categories = new Mongo.Collection("Categories");

Products = new Mongo.Collection("products");

// Product Image Collection
ProductsImages = new FS.Collection("ProductsImages", {
	stores: [new FS.Store.GridFS("ProductsImages")]
});