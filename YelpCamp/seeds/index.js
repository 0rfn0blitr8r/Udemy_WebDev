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
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, sequi temporibus. Doloremque repudiandae impedit ratione harum, corporis excepturi nemo. Veritatis consectetur saepe accusamus fugit corrupti totam incidunt magni eaque harum.',
            price: Math.floor(Math.random()*50) + 10
        })
        await camp.save();
    }
}

seedDb().then(()=>{
	mongoose.connection.close()
})