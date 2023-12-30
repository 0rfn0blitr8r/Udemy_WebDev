// let express = require("express");
// let figlet = require("figlet");

// let app = express();
// // console.dir(app);

// let port  = 8008;

// app.listen(port, ()=>{
// 	console.log(`Example app listening at: http://localhost: ${port}`);
// 	// console.log(portAscii);
// })


const express = require('express')
const app = express()
const port = 8008

// app.use((req, res)=>{
// 	console.log("Got a new request")
// 	res.send("got your reeq, this is a response")
// })

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', (req, res) => {
	res.send("Homepage");
})

app.get(('/r/:subredditName'),   (req, res) => {
	// console.log(req.params);
	// let searchedSubRedditName = req.params.subredditName;
	let {subredditName} = req.params;
	res.send(`<h1>this a search for a subreddit: ${subredditName}</h1>`);
})

app.post('/cats', (req, res)=>{
	res.send("this is a post request for /cats")
})

app.get('/cats', (req, res) => {
	res.send("Meow!! this is a get request for /cats");
})


//in a url like:
// http://localhost:8008/search?q=dogs&name=chop
//the search has a query = {  q : 'dogs' , name : 'chop'}
app.get(('/search'), (req, res) => {
	console.log(req.query)
	let {q} = req.query;
	if(!q){
		res.send("NOTHING SEARCHED BRUH");
	}
	
	res.send(`Hi!Search request for: ${q}`);
})

//'*' request is for invalid request, 
//you need to define this codeblock
//at the last only
app.get('*', (req, res) => {
	res.send("ERROR: Invalid Request")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})