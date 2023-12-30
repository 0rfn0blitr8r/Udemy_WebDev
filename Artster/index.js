let figlet = require('figlet');
let colors = require('colors');

figlet("Hello World", function(err, data) {
	if(err){
		console.log("Somethiing went wrong");
		console.log(err);
	}
	else{
		console.log(data);
		// console.log(data.hidden);
		console.log(data.italic);
		// console.log(data.strikethrough);
		console.log(data.bold);
		// console.log(data.inverse);
	}
});

