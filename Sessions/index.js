let  express = require('express')
let app = express()
let session = require('express-session')


app.use(session({secret: 'thisisnotagoodsecret', resave: false}))

app.get('/viewcount', (req, res)=>{
	// res.send("YOU HAVE VIEWED THIS X TIMES")
	if(req.session.count){
		req.session.count += 1
	}
	else{
		req.session.count = 1
	}
	res.send(`You have viewed this page ${req.session.count} time/s`)
})

app.get('/register', (req, res)=>{
	let {username = 'anonymous'} = req.query
	//makes username of 'session' to be the  
	//one of the query or 'anonymous' by default
	req.session.username = username
	// res.send(`Welcome back, ${username}!`)
	
	//note we don't have to pass username to it
	//because voh session main store ho chuka hai
	//so we are good 
	res.redirect('/greet')
})

app.get('/greet', (req, res)=>{
	let {username} = req.session
	res.send(`Welcome back, ${username}!`)
})

app.listen(3000, ()=>{
	console.log("Listening to port 3000")
})