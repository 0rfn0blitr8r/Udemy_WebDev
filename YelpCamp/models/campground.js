let express = require('express')
let mongoose  = require('mongoose')
let path = require('path')
let Schema = mongoose.Schema;

let CampgroundSchema = new Schema({
	title: String,
	image: String,
	price: Number,
	description: String,
	location: String,
	reviews : [
		{
			type: Schema.Types.ObjectId,
			ref: 'Review'
		}
	]
})

CampgroundSchema.post('findOneAndDelete', async function(doc){
	if(doc){
		await Review.remove({
			_id:{
				$in : doc.reviews
			}
		})
	}
})

module.exports = mongoose.model('Campground', CampgroundSchema)