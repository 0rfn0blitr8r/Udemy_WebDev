let express = require('express')
let app = express()

let cookieParser = require('cookie-parser')

//this secret is used by cookie-parser to check if  
//an cookie has been tampered with 
app.use(cookieParser('this is a secret!'))

app.get('/greet', (req, res)=>{
	let {name = 'anonymous'} = req.cookies
	res.send(`HEY THERE, ${name}!! `)
})

app.get('/setname', (req, res)=>{
	res.cookie('name', 'Aru Verma')
	res.cookie('animal', 'harlequin shrimp')
	res.send("SENT YOU A COOKIE!")
})

app.get('/getsignedcookie', (req, res)=>{
	res.cookie('fruit', 'grape', {signed: true})
	res.send("OK signed your fruit cookie")
})

app.get('/verifyfruit', (req, res)=>{
	//fruit will not be shown up here
	//fruit will be shown in 'res.signedCookies'
	console.log(req.cookies)
	res.send(res.signedCookies)

	//note if fruit's value is changed
	//it won't show up there also
})

app.listen(3000, ()=>{
	console.log("SERVING AT PORT 3000")
})