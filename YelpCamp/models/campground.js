let express = require('express')
let mongoose  = require('mongoose')
let path = require('path')
let Schema = mongoose.Schema;

let CampgroundSchema = new Schema({
	title: String,
	price: String,
	description: String,
	location: String
})

module.exports = mongoose.model('Campground', CampgroundSchema)