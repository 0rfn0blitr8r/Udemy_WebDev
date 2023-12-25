// //for looping
// let fn = [];
// let x = [];
// let fX = [];

// for(let i = 1; i <6; i++){
// 	x.push(i);
// 	fX.push(i*i);
// }

// fn.push(x);
// fn.push(fX);

// for(let i = 0;i < x.length; i++){
// 	console.log(x.at(i) + " -> " + fX.at(i));
// }


////oblect literals
// let usrFirstName = prompt("Enter your first name");
// let usrLastName = prompt("Enter your last name");
// let usrAge = prompt("Enter your age");
// let	usrName = prompt("Enter your user name");

// let profile = {
// 	firstName : usrFirstName,
// 	lastName : usrLastName,
// 	fullName : usrFirstName + " " + usrLastName,
// 	age : usrAge,
// 	userName : usrName
// }
// console.log("Full Name: " + profile.fullName + "\nAge: " + profile.age + "\nUserName: " + profile.userName);


////exploring classes 
class Profile{
	constructor(firstname, lastname, age, username){
		this.firstname = firstname;
		this.lastname = lastname;
		this.fullname = firstname +  " " + lastname;
		this.age = age;
		this.username = username;
	}

	getProfileDetails(){
		return `Hi! My name is ${this.fullname} aka ${this.username}.`;
	}
}

let userFirstName = prompt("Enter your first name");
let userLastName = prompt("Enter your last name");
let userAge = prompt("Enter your age");
let	userName = prompt("Enter your user name");
let newProfile = new Profile(userFirstName, userLastName, userAge, userName);
console.log(newProfile.getProfileDetails());z	