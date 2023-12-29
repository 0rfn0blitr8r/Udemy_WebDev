//FETCH

//fetch returns a promise
// fetch("https://swapi.dev/api/people/1")
// 	.then((res) => {
// 		console.log("resoleved" ,res)
// 		res.json()
// 			.then((data) => console.log("JSON DONE", data))
// 	})
// 	.catch((err) => {
// 		console.log("ERROR", err)
// 	})

//for multiple req, one can always nest them
// fetch("https://swapi.dev/api/people/1")
// 	.then((res) => {
// 		console.log("first req resoleved" ,res)
// 		return res.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 		return fetch("https://swapi.dev/api/people/2");
// 	})
// 	.then((res) => {
// 		console.log("Second req resolved");
// 		return res.json;
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	} )
// 	.catch((err) => {
// 		console.log("ERROR", err)
// 	})

//refactoring using async function
// let loadStarWarsPeople = async () => {
// 	try{
// 	let res = await fetch("https://swapi.dev/api/people/1");
// 	let dataPerson1 = res.json();
// 	console.log(dataPerson1);
// 	res = await fetch("https://swapi.dev/api/people/2");
// 	let dataPerson2 = res.json();
// 	console.log(dataPerson2);
// 	}
// 	catch(e){
// 		console.log("ERROR: ", e)
// 	}
// };

// loadStarWarsPeople();

//AXIOS
//library for http requests


axios
	.get("https://swapi.dev/api/people/1")
	.then((res) => {
		console.log(res);
	})
	.catch((e) => {
		console.log("ERROR: ", e);
	})