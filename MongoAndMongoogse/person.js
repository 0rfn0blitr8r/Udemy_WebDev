//connections
let mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
	.then(()=>{
		console.log("CONNECTION OPEN")
	})
	.catch(err =>{
		console.log('CONNECTION FAILUE')
		console.log(err)
	})


let personSchema = new mongoose.Schema({
	firstName : String,
	lastName : String,
	age: Number
})

//this ios different from writing an instance functino 'getFullName'
//it will behave as an actual property
personSchema.virtual('fullName').get( function(){
	return `${this.firstName} ${this.lastName}`;
})

let Person = new mongoose.model('Person', personSchema);

