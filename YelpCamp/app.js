//Requirements
let express = require('express')
let session = require('express-session')
let flash = require('connect-flash')
let mongoose  = require('mongoose')
let path = require('path')
let methodOverride = require('method-override')
let ejsMate = require('ejs-mate')

let catchAsync = require('./utils/catchAsync')
let ExpressError = require('./utils/ExpressError')

let { campgroundSchema } = require('./schema.js');
let { reviewSchema } = require('./schema.js');

let campgrounds = require('./routes/campgrounds.js')
let reviews = require('./routes/reviews.js')

let Campground = require('./models/campground');
// let campground = require('./models/campground');
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

app.use(flash())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')))
app.use(methodOverride('_method'));

let sessionConfig = {
	secret: 'thisshouldbeabettersecret',
	resave: false,
	saveUninitialised: true,
	cookie: {
		httpOnly: true,
		expires: Date.now() + 604800000,
		maxAge: 604800000
	}
}

//we get a cookie of 'sessionId'
app.use(session(sessionConfig))
app.use((req, res ,next)=>{
	res.locals.success = req.flash('success')
	res.locals.error = req.flash('error')
	next();
})


app.use('/campgrounds', campgrounds)
app.use('/campgrounds/:id/reviews', reviews)



app.get('/', (req , res)=>{
	res.render('home')
})

app.all('*', (req, res, next)=>{
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