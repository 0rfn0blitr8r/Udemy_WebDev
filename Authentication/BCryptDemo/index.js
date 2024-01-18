let bcrypt = require('bcrypt')
let has = ''
let hashPassword = async (pwd)=>{
	//increasing number in genSalt increases wait time
	let salt = await bcrypt.genSalt(10)
	hash = await bcrypt.hash(pwd, salt)
	console.log(salt)
	console.log(hash)
}

let login = async (pwd, hashedPwd)=>{
	let res = await bcrypt.compare(pwd, hashedPwd)
	if(res){
		console.log("LOGGED IN")
	}
	else{
		console.log("INCORRECT PASSWD")
	}
}

// hashPassword('monkey')
login('monkey', '$2b$10$/440S2.Rp9kvtk7kLXtwieQeHXdhPSpWCxPIMz73u15Lkaka5FZk.')