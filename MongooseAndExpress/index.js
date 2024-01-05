let mongoose = require('mongoose')
let express = require('express')
let path = require('path')
let Product = require('./models/product')
let methodOverride = require('method-override')
let app = express()

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
	.then(()=>{
		console.log("connection with mongo established")
	})
	.catch(err=>{
		console.log("ERROR: ", err)
	})

app.set('/view', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/', (req, res) =>{
	res.send('HII')
})

//async and await is v.imp
app.get('/products', async (req, res)=>{
	let products = await Product.find({})
	// console.log(products);
	res.render('products/index', {products})
})
app.get('/products/:id', async (req, res)=>{
	let {id} = req.params;
	let product = await Product.findById(id)
	console.log(product);
	res.render('products/show', {product})
})
app.get('/products/new', (req, res) => {
	res.render('products/new')
})

app.get('/rprducts/:id/edit', async (req,  res) =>{
	let {id} = req.params;
	let product = await Product.findById(id)

	res,render('products/edit', {product})
})

app.put('/products/:id', async (req, res) =>{
	let {id} = req.params;
	let product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
	res.redirect(`/products/${product._id}`)
})

app.post('/products', async (req, res) => {
	// let
	let newProd = await new Product(req.body);
	await newProd.save()
	res.redirect(`/products/${newProd._id}`) 
})

app.delete('/products/:id', async (req,res) => {
	let {id} = req.body
	let product = await Product.findByIdAndDelete(id)
	res.redirect('/products')
})

app.get('*', (req, res) =>{
	res.send("invalid url bro!")
})
app.listen(8008, ()=>{
	console.log("CONNECTION ESTABLISHED to port 3000")
})