let mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
	name : {
		type: String,
		required : true
	},
	price: {
		type: Number,
		required: true,
		min: 0
	},
	category:{
		lowercase: true,
		type:String,
		enum: ['fruit', 'vegetable', 'dairy']
	}
})


let Product  = mongoose.model('Product', productSchema);

module.exports = Product