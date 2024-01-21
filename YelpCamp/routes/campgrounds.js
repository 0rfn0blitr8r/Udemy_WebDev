//NPM package requirements
const express = require('express');
const router = express.Router();

//require models
const Campground = require('../models/campground.js');

//require controller
const campgrounds = require('../controllers/campgrounds.js')

//require utils
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');

//schema requirements
const { campgroundSchema } = require('../schemas.js');

//require middleware
const {isLoggedIn} = require('../middleware');
const {validateCampground} = require('../middleware.js')
const {isAuthor} = require('../middleware.js')

//GET routes
router.get('/', catchAsync(campgrounds.index));

router.get('/new', isLoggedIn, campgrounds.renderNewForm)

router.get('/:id', catchAsync(campgrounds.renderCampground));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditCampground))

//POST routes
router.post('/', isLoggedIn, validateCampground, catchAsync(campgrounds.saveNewCampground))

//PUT routes
router.put('/:id', isLoggedIn, isAuthor, validateCampground, catchAsync(campgrounds.editCampground));

//DELETE routes
router.delete('/:id', isLoggedIn, catchAsync(campgrounds.deleteCampground));

module.exports = router;