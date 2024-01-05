//file run to get new data from internat

let mongoose = require('mongoose')
let Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
	.then(()=>{
		console.log("connection with mongo established")
	})
	.catch(err=>{
		console.log("ERROR: ", err)
	})


// let grapeFruit = new Product({
// 	name: 'Ruby Grape Fruit',
// 	price: 60,
// 	category: 'fruit'
// })
// grapeFruit.save()
// 	.then(p => console.log("SAVED\n", p))
// 	.catch(err => console.log("ERROR",err))

let seedProducts = ([
	{
		name: 'Eggplant',
		price: 40,
		category: 'vegetable'
	},
	{
		name: 'Organic Goddess Melon',
		price: 80,
		category:'fruit'
	},
	{
		name: 'Chocolate Whole Milk',
		price:70,
		category:'dairy'
	}
])

Product.insertMany(seedProducts)
.then(d => console.log(d))
.catch(err => console.log(err))
