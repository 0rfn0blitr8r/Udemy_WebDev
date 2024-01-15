let express = require('express')
let app = express()
let router = express.Router()
let shelterRoutes = require('./routes/shelter')
let dogRoutes = require('./routes/dogs')
let adminRoutes = require('./routes/admin')

app.use((req, res, next)=>{
	if(req.query.isAdmin){
		next()
	}
	res.send("SORRY NOT AN ADMIN")
})

app.use('/shelters', shelterRoutes)
app.use('/dogs', dogRoutes)
app.use('/admin', adminRoutes)

app.listen(3000, ()=>{
	console.log("CONNECTION TO LOCALHOST 3000")
})