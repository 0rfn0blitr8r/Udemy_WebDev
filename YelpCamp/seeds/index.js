let mongoose = require('mongoose')
let cities = require('./cities')
const { places, descriptors } = require('./seedHelpers');
let Campground = require('../models/campground')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')

let db = mongoose.connection
db.on('error', console.error.bind(console, "Connection Error"))
db.once('open', ()=>{
	console.log("Database Connected")
})

let sample = array => array[Math.floor(Math.random() * array.length)];

let seedDb = async()=>{
	await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        })
        await camp.save();
    }
}

seedDb().then(()=>{
	mongoose.connection.close()
})