//Requirements
let express = require('express')
let mongoose  = require('mongoose')
let path = require('path')
let methodOverride = require('method-override')
let ejsMate = require('ejs-mate')

let catchAsync = require('./utils/catchAsync')
let ExpressError = require('./utils/ExpressError')

let { campgroundSchema } = require('./schema.js');
let { reviewSchema } = require('./schema.js');

let Campground = require('./models/campground');
let campground = require('./models/campground');
let Review = require('./models/review.js')

//connecting to mongoose
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')

let db = mongoose.connection
db.on('error', console.error.bind(console, "Connection Error"))
db.once('open', ()=>{
	console.log("Database Connected")
})


let app = express()

app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

let validateCampground = (req, res, next)=>{
	//checks if everything which is required is present
	//and the data types area also valid
	let {error} = campgroundSchema.validate(req.body);
	if(error){
		let msg = error.details.map(el => el.message).join(',')
		throw new ExpressError(msg, 400)
	}
	else{
		next()
	}
}

let validateReview = (req, res, next) =>{
	let {error} = reviewSchema.validate(req.body)
	if(error){
		let msg = error.details.map(el => el.message).join(',')
		throw new ExpressError(msg, 400)
	}
	else{
		next()
	}
}

//GET Routines
app.get('/', (req , res)=>{
	res.render('home')
})

app.get('/campgrounds', catchAsync(async (req, res) => {
	let campgrounds = await Campground.find({})
	res.render('campgrounds/index', {campgrounds})
}))

app.get('/campgrounds/new', (req, res) => {
	res.render('campgrounds/new')
})

app.get('/campgrounds/:id', catchAsync(async (req, res,) => {
	let campground = await Campground.findById(req.params.id).populate('reviews')
	// console.log(campground)
    res.render('campgrounds/show', { campground });
}));

app.get('/campgrounds/:id/edit', catchAsync(async (req, res) => {
	const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit', { campground });
}))


//POST routines
app.post('/campgrounds', validateCampground, catchAsync (async (req, res) =>{
	let newCampground = new Campground(req.body.campground)	
	await newCampground.save()
	res.redirect(`/campgrounds/${newCampground._id}`)
}))

app.post('/campgrounds/:id/reviews', validateReview, catchAsync( async (req, res)=>{
	// res.send("YOU MADE IT")
	let campground = await Campground.findById(req.params.id)
	let review = new Review(req.body.review)
	campground.reviews.push(review)
	await review.save()
	await campground.save()
	res.redirect(`/campgrounds/${campground._id}`)
}))

//PUT Routines
app.put('/campgrounds/:id', validateCampground, catchAsync    (async (req, res)=>{
	let {id} = req.params;
	let campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground  })
	res.redirect(`/campgrounds/${campground._id}`)
}))

//DELETE Routines
app.delete('/campgrounds/:id', catchAsync( async (req, res)=>{
	let {id} = req.params;
	
	await Campground.findByIdAndDelete(id);
	res.redirect('/campgrounds')
}))

app.delete('/campgrounds/:id/reviews/:reviewId', catchAsync( async(req, res, next)=>{
	// res.send("deleteMe!")
	let {id, reviewId} = req.params
	let campground = await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
	let review =  await Review.findByIdAndDelete(reviewId)
	res.redirect(`/campgrounds/${id}`)
} ) )

//404 Routines
app.all('*', (req, res, next)=>{
	next(new ExpressError('Page Not Found', 404))
})

//Error Handling Routine
app.use((err, req, res, next)=>{
	const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})

//Connecting to PORT 3000
app.listen(3000, () =>{
	console.log("CONNECTION ESTABLISHED on port 3000")
})