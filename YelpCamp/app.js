let express = require('express')
let mongoose  = require('mongoose')
let path = require('path')
let methodOverride = require('method-override')
let Campground = require('./models/campground');
const campground = require('./models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')

let db = mongoose.connection
db.on('error', console.error.bind(console, "Connection Error"))
db.once('open', ()=>{
	console.log("Database Connected")
})


let app = express()

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req , res)=>{
	res.render('home')
})

app.get('/campgrounds', async (req, res) => {
	let campgrounds = await Campground.find({})
	res.render('campgrounds/index', {campgrounds})
})

app.get('/campgrounds/new', (req, res) => {
	res.render('campgrounds/new')
})

app.post('/campgrounds',async (req, res) =>{
	let newCampground = new Campground(req.body.campground)	
	await newCampground.save()
	res.redirect(`/campgrounds/${newCampground._id}`)
})

app.get('/campgrounds/:id',async (req, res) => {
	let {id} = req.params
	let reqCampground = await Campground.findById(id)
	res.render('campgrounds/show', {reqCampground})
})

app.get('/campgrounds/:id/edit', async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit', { campground });
})

app.put('/campgrounds/:id',async (req, res)=>{
	let {id} = req.params;
	let campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground  })
	res.redirect(`/campgrounds/${campground._id}`)
})

app.delete('/campgrounds/:id', async (req, res)=>{
	let {id} = req.params;
	await Campground.findByIdAndDelete(id);
	res.redirect('/campgrounds')
})

app.get('*', (req, res)=>{
	res.send('INVALID URL bro')
})

app.listen(3000, () =>{
	console.log("CONNECTION ESTABLISHED on port 3000")
})