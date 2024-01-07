function errorHandler(err, req, res, next){
	if(res.headerSent){
		return next(err)
	}
	res.status(500)
	res.render('error', {error: err})
}


let express = require('express');
let app = express();
let morgan = require('morgan');

app.use(morgan('tiny'))

app.use((req, res, next) =>{
	req.requestTime = Date.now()
	console.log(req.method, req.path)
	next()
})

app.use((req, res, next)=>{
	console.log(req.method.toUpperCase(), req.path)
	next()
})

let verifyPassword = (req, res, next)=>{
	let {password} = req.query
	if(password === 'chickennugget'){
		next();
	}
	else{
		// res.send("SORRY YOU NEED A PASSWORD!!");
		throw new Error('Password Required');
	}
}

app.get('/', (req, res) =>{
	console.log(`REQUEST DATE: ${req.requestTime}`)
	res.send("HOME PAGE")
})

app.use('/error', (req, res)=>{
	// //the following throws an error at the line and char 
	// throw new Error('BROKEN');
	res.send("ERROR should be thrown through code");
})

app.get('/dogs', verifyPassword ,(req, res) =>{
	res.send("Woof Woof")
})



//404 wala app.use
app.use((req, res)=>{
	res.status(404).send("NOT FOUND T_T")
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})
