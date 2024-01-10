let mongoose = require('mongoose');
let Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/twitterDB')
.then(()=>{
	console.log("Connected to MongoDB")
})
.catch(err=>{
	console.log("ERROR in MOngoDB connection")
	console.log(err)
})

let twitteruserSchema = new Schema({
	username:String,
	age:Number
})

let tweetSchema = new Schema({
	text:String,
	likes:Number,
	user: { type: Schema.Types.ObjectId, ref:'TwitterUser' }
})

let TwitterUser = mongoose.model('TwitterUser', twitteruserSchema)
let Tweet = mongoose.model('Tweet', tweetSchema)

// let makeTweet = async () =>{
// 	let user1 = new TwitterUser({
// 		username: 'hilteradolf',
// 		age: 19
// 	})
// 	let tweet1 = new Tweet({
// 		text:"Oh My God!! I love Jews!!!",
// 		likes: 1000000
// 	})
// 	tweet1.user = user1
	
// 	user1.save()
// 	tweet1.save()
// }

// makeTweet()

let findTweet = async () =>{
	let t = await Tweet.find({}).populate('user')
	console.log(t)
}

findTweet()