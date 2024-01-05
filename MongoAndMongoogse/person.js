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
	lastName : String
})

//this ios different from writing an instance functino 'getFullName'
//it will behave as an actual property
//along with get, we cal have 'set' involving a logic as well
personSchema.virtual('fullName')
	.get( function(){
	return `${this.firstName} ${this.lastName}`;
	}).
	set(function(newName){
		this.firstName = newName.substr(0, newName.indexOf(' '));
		this.lastName = newName.substr(newName.indexOf(' ') + 1);
	} );

personSchema.pre('save', async function(){
	//'this' has the access to the object (person) 
	//which has called .save()
	console.log('ABOUT TO SAVE')
})
personSchema.post('save', async function(){
	console.log('SAVED now!!')
})


let Person = new mongoose.model('Person', personSchema);


//here, aru also has an attribute (made on call and removed immediately)
//that is in mongoose and js side of things
//the attribute is 'fullName'
let aru = new Person({
	firstName: 'Aru',
	lastName: 'Verma'
})
aru.save();
