let express = require('express')
let path = require('path')
let app = express()

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs') 


let comments = [
	{
		username: 'Aru',
		comment : 'BRUH'
	}, 
	{
		username : 'Nonu',
		comment  : 'BRUHH'
	},
	{
		username : 'Ronaldo',
		comment  : 'SUUUUUIIIIIII'
	}
]


app.get('/comments', (req, res) => {
	res.render('comments/index', {comments});
})

app.get('/comments/new', (req,res)=>{
	res.render('comments/new');
})

app.get('/tacos', (req, res) => {
	res.send("GET /tacos response")
})

app.get('/', (req, res)=>{
	res.send("INITIATED localhost:3000")
})

app.post('/comments',(req,res)=>{
	// console.log(req.body);
	let {username, comment} = req.body;
	comments.push({username, comment});
	// res.send("IT WORKED");
	res.redirect('/comments');
})

app.post('/tacos', (req, res)=>{
	// console.log(req.body)
	let {meat, qty} = req.body;
	res.send("POST /tacos")

})


app.listen(3000, () => {
	console.log("Listening on port 3k")
})