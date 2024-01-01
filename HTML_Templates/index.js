let express = require('express');
let path = require('path');
let redditData = require('./data.json')

let app = express();
app.set('view engine', 'ejs');

//using the following command, 
//path.join attaches to
app.use(express.static('public'));

app.set('views', path.join(__dirname, '/views'));
app.set('public', path.join(__dirname, '/public'));


app.get('/', (req, res) => {
	// res.send("HI");
	res.render('home')
})

app.get('/r/:subreddit', (req, res) => {
	let {subreddit} = req.params; 
	let subredditData = redditData[subreddit];
	console.log(subredditData);

	if(subredditData){
		res.render('subreddit', {...subredditData});
	}
	else{
		res.render("notfound", {subreddit});
	}
})

app.get('/cats', (req, res) => {
	let cats = [ 'Blue', 'Rowdy', 'Garfield'];

	res.render('cats', {cats});
})

// app.get('/random', (req, res) => {
// 	// res.send("HI");
// 	res.render('random.ejs')
// })
//another thing that template allows is that
//if we pass key-value arguments with file in the render
//the html loaded stores & renders with that value
app.get('/random', (req, res) => {
	// res.send("HI");
	let rand = Math.floor( Math.random() * 10 ) + 1;
	console.log("New Number generated: ", rand);
	res.render('random', { randomNumber : rand })
})


app.listen(3000, () => {
	console.log("LISTENING TO PORT 3000");
})