let express = require('express')
let router = express.Router()

let Campground = require('../models/campground');
let { campgroundSchema } = require('../schema.js');

let catchAsync = require('../utils/catchAsync')
let ExpressError = require('../utils/ExpressError')

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

router.get('/', catchAsync(async (req, res) => {
	let campgrounds = await Campground.find({})
	res.render('campgrounds/index', {campgrounds})
}))

router.get('/new', (req, res) => {
	res.render('campgrounds/new')
})

router.get('/:id', catchAsync(async (req, res,) => {
	let campground = await Campground.findById(req.params.id).populate('reviews')
	// console.log(campground)
    if(!campground){
		req.flash('error', 'Campground not found')
		return res.redirect('/campgrounds')
	}
	
	res.render('campgrounds/show', { campground });
}));

router.get('/:id/edit', catchAsync(async (req, res) => {
	const campground = await Campground.findById(req.params.id)
	if(!campground){
		req.flash('error', 'Campground not found')
		return res.redirect('/campgrounds')
	}
    res.render('campgrounds/edit', { campground });
}))


//POST routines
router.post('/', validateCampground, catchAsync (async (req, res) =>{
	let newCampground = new Campground(req.body.campground)	
	await newCampground.save()
	req.flash('success', "Successfully made a new Campgorund")
	res.redirect(`/${newCampground._id}`)
}))

//PUT Routines
router.put('/:id', validateCampground, catchAsync(async (req, res)=>{
	let {id} = req.params;
	let campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground  })
	res.redirect(`/${campground._id}`)
}))

//DELETE Routines
router.delete('/:id', catchAsync( async (req, res)=>{
	let {id} = req.params;
	await Campground.findByIdAndDelete(id);
	res.redirect('/')
}))

module.exports = router;