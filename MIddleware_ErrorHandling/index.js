let express = require('express');
let AppError = require('./AppError');
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
		throw new AppError('Password Required', 401);
	}
}

app.get('/', (req, res) =>{
	console.log(`REQUEST DATE: ${req.requestTime}`)
	res.send("HOME PAGE")
})

app.use('/error', (req, res)=>{
	// //the following throws an error at the line and char 
	// throw new Error('BROKEN');
	// res.send("ERROR should be thrown through code");
	chicken.fly()
})

app.get('/dogs', verifyPassword ,(req, res) =>{
	res.send("Woof Woof")
})

app.get('/admin', (req, res)=>{
	throw new AppError("You are not an Admin", 403);
})

//if ever an error is thrown, this runs
app.use((err, req, res, next)=>{
	let {status = 500} = err;
	let {message = 'Something went wrong'} = err;
	res.status(status).send(message)
	//now if it
})

//404 wala app.use
app.use((req, res)=>{
	res.status(404).send("NOT FOUND T_T")
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})
