//connections
let mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
	.then(()=>{
		console.log("CONNECTION OPEN")
	})
	.catch(err =>{
		console.log('CONNECTION FAILUE')
		console.log(err)
	})




//Product and ProductSchema
let productSchema = new mongoose.Schema({
	// name :String,
	name:{
		type: String,
		required: true				//in a new product, name must be there now
	},
	// price: Number,
	price: {
		type: Number,
		required: true,
		min: [0, "Price must be non-zero postive number!"]
	},
	categories: {
		type: [String],
		default: []
	},
	qty : {
		online : {
			type: Number,
			default: 0
		},
		inStore: {
			type:Number,
			default: 0
		},
	},
	onSale:{
		type:Boolean,
		default: false
	},
	size:{
		type: String,
		//enum defines what values are 
		//permissible for size
		enum : ['S', 'M', 'L']
	}
})
productSchema.methods.greet = function(){
	console.log("HI NAMASTE");
}
productSchema.methods.toggleOnSale = function(){
	this.onSale = !this.onSale;
	this.save()
	config.log('Toggled its availablity on sale')
}
productSchema.methods.addCategory = function (newCategory){
	this.categories.push(newCategory);
	this.save();
}
productSchema.methods.description = function(){
	console.log('HELLO!!!');
	console.log(
		//product Description
		`Product Name: ${this.name} ` 
		// '\nPrice: ' + this.price + 
		// '\nCategories: ' + this.categories + 
		// '\nQuantities: \n\tOnline: ' + this.qty.online + 
		// 'n\\tIn Store: ' + this.qty.inStore + 
		// '\nOn Sale right now: ' + this.onSale + 
		// '\nSize: ' + this.size + '\n'
	);
}

//static function main, 'this' refers to the 'Product' not an instance of the product
productSchema.statics.fireSale = function(){
	return this.updateMany(  {}, {onSale : true, price: 10} )
}

//Product initialization
let Product = mongoose.model('Product', productSchema);



//creating Product-s
let bike = new Product ({ 
	name: 'Mountain Bike', 
	price: 90 , 
	onSale: false
})
bike.save()
.then(data =>  console.log("BIKE added to database"))
.catch(err => console.log(err))


let cap1 = new Product({
	name: 'Cap',
	price: 15,
	onSale: true,
	categories: ['Sports', 'Casual'],
	qty : {online: 15, inStore: 100},
	onSale: true,
	size:'M'
})
cap1.save()
.then(data => console.log("CAP1 added to database"))
.catch(err => console.log(err))


//testing stuff	
let findProduct = async () => {
	let foundCap = await Product.findOne(  {name: 'Cap'} )
	// foundBikeHelmet.greet();
	foundCap.description();
}
//calling function
findProduct();

Product.fireSale().then(data => console.log(data));