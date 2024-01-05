let express = require('express');
let app = express();
let morgan = require('morgan');

//i need to tell my app to use morgan
app.use(morgan('tiny'))

// app.use('/dogs', (req, res, next)=>{
// 	console.log("I love dogs broooo")
// 	next()
// })
app.use((req, res, next) =>{
	req.requestTime = Date.now()
	// console.log(req.method, req.path)
	next()
})

// //importance of middleware and app.use
// //the request first goes to .use 
// //here, it prints 'first middleware 
// //then it priints second middleware iff 'next()' is present
// //next runms whaterver it is acc to the url
// app.use( (req, res, next)=>{
// 	console.log("THIS IS MY FIRST MIDDLEWARE")
// 	next()
// 	console.log("THIS IS MY LINE AFTER CALLING FIRST NEXT")
// } ) 
// app.use( (req, res, next)=>{
// 	console.log("THIS IS MY SECOND MIDDLEWARE")
// 	next()
// } ) 

app.use((req, res, next)=>{
	console.log(req.method.toUpperCase(), req.path)
	next()
})

let verifyPassword = (req, res, next)=>{
	let {password} = req.query
	if(password === 'chickennugget'){
		next();
	}
	res.send("SORRY YOU NEED A PASSWORD!!");
}

app.get('/', (req, res) =>{
	console.log(`REQUEST DATE: ${req.requestTime}`)
	res.send("HOME PAGE")
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
