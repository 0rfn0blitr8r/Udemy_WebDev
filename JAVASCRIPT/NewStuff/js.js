// //DEFAULT VAL SET TO 6
// function rollDie(numSides = 6){
// 	return Math.floor(Math.random() * numSides + 1);
// }


// //spread
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(...nums);		//prints: 1 2 3 4 5 6 7 8 9 0
// let greeting = "Hello";
// console.log(...greeting);	//prints: H e l l o	
// //arrays and spread: 
// let cats = ['Blue', 'Scout', 'Rocket'];
// let dogs = ['Bruno', 'Bub', 'Six Thirty'];
// let pets = [...cats, ...dogs];	//['Blue', 'Scout', 'Rocket', 'Bruno', 'Bub', 'Six Thirty']

// //objects and spread
// let feline = { legs: 4, family: 'Felidae' };
// let canine = { legs: 4, family: 'Caninae' };

// let garfield = {...feline, color : 'Orange'};
// let odie = {...canine, color : 'Yellow'};  

//arguments object
//obj holds all the arguments in an array like struture
//for the function 'sum', 
//in the function definition we dont need to
//specify the arguments
// function sum(){
// 	let total = 0;
// 	for(let i = 0; i < arguments.length; i++){
// 		total += arguments[i];
// 	}
// 	console.log(total); 
// }

// //another methof to define is reduce
// //but since arguments is not an array, 
// //there is no arguments.reduce function
// function sum(){
	
// 	return arguments.reduce( (total, el) => total + el )
// }

//
// function sum(...nums){
// 	return nums.reduce( (toit, el) => toit + el );
// }

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(6, 7, 8, 9));

// function studentPerc(name, ...marks){
// 	let tot =  marks.reduce( (total, el) => total + el );
// 	console.log("Total is :" + tot);
// 	let perc = (tot/marks.length );
// 	return `${name} has scored ${perc}%`;
// }
// console.log(studentPerc('Aru', 80, 90, 70));

function fullName ( {fName, lName} ){
	return `${fName} ${lName}`;
}

let user = {
	email: 'aru11verma@gmail.com',
	fName: 'Aru',
	lName: 'Verma',
	born: 2004,
	alias: '0rfn0blitr8r'
}

//destructuring
//the following line creates:
//userEmail = user.email
//fName = user.fName
//alias = user.alias
let { email : userEmail, fName, alias } = user;

//param ( destructuring in arguments)
//here, user obj is passed and {fName, lName} are used up
console.log(fullName(user));
