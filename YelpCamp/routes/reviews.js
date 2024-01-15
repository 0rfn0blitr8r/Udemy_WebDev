let express = require('express')
// with mergeParams, the id of reviews are passed to the router
//otherwise, they are not
let router = express.Router({mergeParams: true})

let Campground = require('../models/campground');
let Review = require('../models/review.js')
let { reviewSchema } = require('../schema.js');

let catchAsync = require('../utils/catchAsync')
let ExpressError = require('../utils/ExpressError')

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


router.post('/', validateReview, catchAsync( async (req, res)=>{
	// res.send("YOU MADE IT")
	let campground = await Campground.findById(req.params.id)
	let review = new Review(req.body.review)
	campground.reviews.push(review)
	await review.save()
	await campground.save()
	res.redirect(`/campgrounds/${campground._id}`)
}))



router.delete('/:reviewId', catchAsync( async(req, res, next)=>{
	// res.send("deleteMe!")
	let {id, reviewId} = req.params
	let campground = await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
	let review =  await Review.findByIdAndDelete(reviewId)
	res.redirect(`/campgrounds/${id}`)
} ) )

module.exports = router;