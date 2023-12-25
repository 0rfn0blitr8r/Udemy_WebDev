function singSong(){
	console.log("DO");
	console.log("RE");
	console.log("ME");
	console.log("FA");
	console.log("SO");
	console.log("LA");
	console.log("TI");
	console.log("DO");
}

function greetUser(name){
	console.log(`Hello there, ${name}`);
}

function callForHelp(){
	function callAvengers(){
		function callIronMan(){
			console.log("Help us Iron Man!!");
		}
		callIronMan();
	}
	callAvengers();
}

// //functionExpression
// let add = function (x, y){
// 	return x + y;
// }


// singSong();
// let usrName = prompt("Enter your name, user!");
// greetUser(usrName);
// callForHelp();
// console.log(add(3, 4));

// //forEach
// number = [1, 2,3 , 4, 5, 6];
// number.forEach(function(el){
// 	console.log(el * el);
// })

// movies = [
// 	{
// 		title : '3 Idiots',
// 		rating : 85
// 	},
// 	{
// 		title : 'Alien',
// 		rating : 90
// 	},
// 	{
// 		title : 'Parasite',
// 		rating : 95
// 	}
// ]

// movies.forEach(function(a){
// 	console.log(`Movie: ${a.title} has a rating of ${a.rating}`);
// })

// // //map
// let x = [1, 2, 3, 4, 5];
// // let fX = x.map(function(x){
// // 	return x*x;
// // })
// //same fX can be defined as:
// let fX = (x) => {
// 	return x*x;
// }
// //or another way is to do this:
// //no paranthesis around arg is there is only one arg
// //and no curly braces if it is a one liner
// let add = (a,b) => a+b;
// let sqFn = x => x*x;

// console.log("H1");
// setTimeout(() => console.log("... are you still there?") ,3000);
// console.log("GoodBye");

// //the output will be: 
// /*
// H1
// GoodBye
// (after two seconds)
// ... are you still there?
// */


// let id = setInterval( () =>console.log(Math.random()), 2000 );
// //prints a random number after every two seconds
// // using clearInterval(id); in the console with stop it

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// //filter method
// let odds = nums.filter( n => n%2 === 1);
// let evens = nums.filter( n => n%2 === 0);
// let lessThanEight = nums.filter(n => n < 8);

// //some: true if atleast one element follows the conditn
// //every: true iff all follow

// let someAreDivByFour = nums.some( n => n%4 === 0 );
// console.log(someAreDivByFour);
// let allAreDivByFour = nums.every( n => n %4 === 0 );
// console.log(allAreDivByFour);

//reduce:
/*
	let qty = arr.reduce( (a, b) => { //set of code} )
	here a and b are two arguments, 
	the value returned by the set-of-code is used as next 'a'
	and the current value is denoted by b
*/
let sumOfNums = nums.reduce( (acc, currVal) => {
	return acc + currVal;
} )

console.log(sumOfNums);


let strOfNums = nums.reduce( (strSoFar, currVal) => {
	return strSoFar + ' ' + currVal;
} )

console.log(strOfNums);

 