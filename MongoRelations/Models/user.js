let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDB')
.then(()=>{
	console.log("Connected to MongoDB")
})
.catch(err=>{
	console.log("ERROR in MOngoDB connection")
	console.log(err)
})


let userSchema = new mongoose.Schema({
	fName: String,
	lName: String,
	addresses:[
		{
			// _id: {id : false},
			street:String,
			city: String,
			state: String,
			country:String
		}
	]
})

let User = mongoose.model('User', userSchema)

let makeUser = async () =>{
	let u = new User({
		fName:'Harry',
		lName:'Potter'
	})
	u.addresses.push({
		street:'123 Sesame St.',
		city:'New York',
		state:'NY',
		country: 'USA'
	})

	let res = await u.save()
	// console.log(res)
}

let addAddress = async (id) =>{
	let user = await User.findById(id)
	user.addresses.push({
		street: '99 3rd St.',
		city: 'New York',
		state: 'NY',
		country: 'USA'
	})

	let res = await user.save()
	// console.log(res)
}

// makeUser()
// addAddress('659db146c5bed258ae494e20')