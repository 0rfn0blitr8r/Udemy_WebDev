let express = require('express')
let mongoose  = require('mongoose')
let path = require('path')
let methodOverride = require('method-override')
let ejsMate = require('ejs-mate')
let catchAsync = require('./utils/catchAsync')
let ExpressError = require('./utils/ExpressError')
let { campgroundSchema } = require('./schemas.js');
let Campground = require('./models/campground');
const campground = require('./models/campground');

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

app.post('/campgrounds', validateCampground, catchAsync (async (req, res) =>{
	let newCampground = new Campground(req.body.campground)	
	await newCampground.save()
	res.redirect(`/campgrounds/${newCampground._id}`)
}))

app.get('/campgrounds/:id', catchAsync(async (req, res,) => {
    let campground = await Campground.findById(req.params.id)
    res.render('campgrounds/show', { campground });
}));

app.get('/campgrounds/:id/edit', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit', { campground });
}))

app.put('/campgrounds/:id', validateCampground, catchAsync    (async (req, res)=>{
	let {id} = req.params;
	let campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground  })
	res.redirect(`/campgrounds/${campground._id}`)
}))

app.delete('/campgrounds/:id', catchAsync( async (req, res)=>{
	let {id} = req.params;
	await Campground.findByIdAndDelete(id);
	res.redirect('/campgrounds')
}))

app.all('*', (req, res)=>{
	next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next)=>{
	const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})

app.listen(3000, () =>{
	console.log("CONNECTION ESTABLISHED on port 3000")
})