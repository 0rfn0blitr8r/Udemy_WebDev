let jokes = require('give-me-a-joke');
let colors = require('colors');
// console.dir(jokes);

jokes.getRandomDadJoke(function(joke){
	console.log(joke.rainbow);
})




//sudo chwon -R $USER /usr/local/lib/node_modules