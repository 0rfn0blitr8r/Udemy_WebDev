let mongoose = require('mongoose');
let Schema = mongoose.Schema

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDB')
.then(()=>{
	console.log("Connected to MongoDB")
})
.catch(err=>{
	console.log("ERROR in MOngoDB connection")
	console.log(err)
})

let productSchema = new Schema({
	name: String,
	price: Number,
	season:{
		type: String,
		enum: [ 'spring', 'autumn', 'winter', 'summer' ]
	}
})

let farmSchema = new Schema({
	name: String,
	city: String,
	//to use our own models as an attribute in another model,
	//we have to use mongoose.Schema.Types.ObjectId as type
	//and reference it to our model's name in string form
	products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

let Product = mongoose.model('Product', productSchema)
let Farm = mongoose.model('Farm', farmSchema)

// Product.insertMany([
// 	{name: 'Goddess Melon', price: 4.99, season: 'summer'},
// 	{name: 'Watermelon', price: 4.75, season: 'summer'},
// 	{name: 'Asparagus', price: 3.99, season: 'spring'}
// ])

let makeFarm = async () =>{
	let farm  = new Farm({
		name: 'FarmOne',
		city: 'Whitefish, MT'
	})
	let melon = await Product.findOne({name: 'Goddess Melon'})
	//we don't have to pass melon 
	// farm.products.push(melon._id)
	farm.products.push(melon)

	await farm.save()

}

// makeFarm()
Farm.findOne({name:'FarmOne'})
	//if we don't populate, the products section will look like arr of ObjIds
	//populate fill it with the objs corres to ObjectId
	.populate('products')
	.then(farm =>{
		console.log(farm)
	})
