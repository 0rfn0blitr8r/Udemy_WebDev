let express = require('express')
let router = express.Router()

//middleware open applies this to the admin routes
//if the query has 'isAdmin' to be valid
router.use( (req, res, next)=>{
	if(req.query.isAdmin()){
		next()
	}
	req.send("SORRY NOT AN ADMIN")
} )

router.get('/topsecret',(req, res)=>{
	res.send("THIS IS TOP SECRET")
})

router.get('deleteverything', (req, res)=>{
	res.send("DELETED EVERYTHING")
})