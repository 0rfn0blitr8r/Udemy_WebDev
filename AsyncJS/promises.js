// #87ff5f
// #ff4d4e
// let fakeRequest = (url) => {
// 	return new Promise( (resolve, reject) => {
// 		let rand = Math.random();
// 		setTimeout( () => {
// 			if(rand < 0.7) {
// 				resolve("YOUR FAKE DATA HERE!");

// 			}
// 			reject("Request ERROR!");
// 		}, 1000 );
// 	} )
// }

// fakeRequest('/dogs/1')
// 	.then( ()=>{
// 		console.log("Done with the request"); 
// 		//data takes the value of resolve
// 		console.log("Data is: ", data);
// 	} )

// 	.catch(() => {
// 		//reject takes the value of err
// 		console.log("ERROR OCCURED: ", err);
// 	})

let delayedColorChange = (color, delay) => {
	return new Promise ( (resolve, reject) => {
		setTimeout ( ()=>{
			document.body.style.backgroundColor = color;
			resolve();
		} , delay )
	} )
}

//if a function is set to be 'async' the function automaatically returns a promise
//if an async funtion returns a data, the promise is 'resolved' using that data
//if ana async function throws an error, the promise is rejected using that error 
async function hello() {
	return 'hello';
}

async function throwError(){
	throw new Error("oh no; new error");
}

let sing = async () => {
	return 'LA LA LA LA'
}

// sing.then(  (data) => {
// 	console.log("Promise resolved with: ", data)
// })


// delayedColorChange('red', 1000)
// 	//if resolved, .then() is executed
// 	//if error, the catch() is executed
// 	.then(  () => {
// 		delayedColorChange('orange', 1000)
// 			.then(  ()=>{
// 				delayedColorChange('yellow', 1000)
// 					.then( ()=>{
// 						delayedColorChange('green', 1000)
// 							.then(()=>{
// 								delayedColorChange('blue', 1000)
// 									.then(  ()=>{
// 										delayedColorChange('indigo', 1000)
// 											.then(  ()=>{
// 												delayedColorChange('violet', 1000)
// 											})
// 											.catch(  ()=>{
// 												alert("violet couldn't be placed")
// 											})
// 									})
// 									.catch( () =>{
// 										console.log("indigo can't be painted");
// 									} )
// 							})
// 							.catch( () =>{
// 								console.log("blue can't be painted");
// 							} )
// 					} )
// 					.catch( () =>{
// 						console.log("green can't be painted");
// 					} )
// 			})
// 			.catch( () =>{
// 				console.log("yellow can't be painted");
// 			} )
// 		} )
// 		.catch( () =>{
// 			console.log("orange can't be painted");
// 		} )
// 	.catch( () =>{
// 		console.log("red can't be painted");
// 	} )
// 	// V I B G Y O R

//or you can do:
// delayedColorChange('red',1000)
// 	.then( ()=> delayedColorChange('orange', 1000))
// 	.then( ()=> delayedColorChange('yellow', 1000))
// 	.then( ()=> delayedColorChange('green', 1000))
// 	.then( ()=> delayedColorChange('blue', 1000))
// 	.then( ()=> delayedColorChange('indigo', 1000))
// 	.then( ()=> delayedColorChange('violet', 1000))
	// .catch( () => alert("color couldn't be set"))

//using await
//await waits till previous promise is returned

async function rainbow(){
	await delayedColorChange('red', 200)
	await delayedColorChange('orange', 200)
	await delayedColorChange('yellow', 200)
	await delayedColorChange('green', 200)
	await delayedColorChange('blue', 200)
	await delayedColorChange('indigo', 200)
	await delayedColorChange('violet', 200)

	return "ALL DONE"
}

// rainbow().then(  () => alert("END OF RAINBOW") )

async function showRainbow(){
	await rainbow();
	alert("end of showRainbow")
}

showRainbow()


let login = async (username, password) => {
	if( !username || !password) throw 'Missing Credentials'
	if(password === 'admin@123'  &&  username === 'aaradhya22004') return 'WELCOME AARADHYA'
	throw 'Wrong Credentials!'
}


let username  = prompt("Enter username: ")
let password = prompt("Enter password: ")

login(username, password)
	.then(  (msg)  => {
		alert(msg, "\nLogged in")
	} )
	.catch(  (err)=>{
		alert(err)
	} )

// AJAX: 
// Asynchronous
// JS
// And
// XML