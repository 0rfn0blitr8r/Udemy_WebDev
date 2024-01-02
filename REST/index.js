let express = require('express');
let path = require('path');
let methodOverride = require('method-override');
let {v4 : uuidv4} = require('uuid');
uuidv4();

let app = express()

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs') 


let comments = [
	{
		username: 'Aru',
		comment : 'BRUH',
		id:uuidv4()
	}, 
	{
		id:uuidv4(),
		username : 'Nonu',
		comment  : 'BRUHH'
	},
	{
		id : uuidv4(),
		username : 'Ronaldo',
		comment  : 'SUUUUUIIIIIII'
	}
]

//get requests

app.get('/comments', (req, res) => {
	res.render('comments/index', {comments});
})

app.get('/comments/new', (req,res)=>{
	res.render('comments/new');
})

app.get('/comments/:id', (req, res) =>{
	let {id} = req.params;
	let comment = comments.find(c => c.id === id);
	res.render('comments/show', {comment});
})
app.get('/comments/:id/edit' ,(req, res) =>{
	let {id} = req.params
	let comment = comments.find(c => c.id === id)
	res.render('comments/edit', {comment})
})

app.get('/tacos', (req, res) => {
	res.send("GET /tacos response")
})

app.get('/', (req, res)=>{
	res.send("INITIATED localhost:3000")
})


//path
app.patch('/comments/:id', (req, res)=>{
	let {id} = req.params;
	let newCommentText = req.body.comment;
	// console.log(newCommentText)
	// console.log("All good right now")
	let foundcomment = comments.find(c => c.id === id);
	foundcomment.comment =  newCommentText

	// res.send("Updating something");

	res.redirect('/comments');
})

//post requests

app.post('/comments',(req,res)=>{
	// console.log(req.body);
	let {username, comment} = req.body;
	comments.push({username, comment, id: uuidv4()});
	// res.send("IT WORKED");
	res.redirect('/comments');
})

app.post('/tacos', (req, res)=>{
	// console.log(req.body)
	let {meat, qty} = req.body;
	res.send("POST /tacos")

})

//delete
app.delete('/comments/:id',(req,res)=>{
	let {id} = req.params;
	comments = comments.filter(c => c.id !== id);
	res.redirect('/comments');
})

app.listen(3000, () => {
	console.log("Listening on port 3k")
})