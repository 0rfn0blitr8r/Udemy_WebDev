//index.js acts as entry point of the directory
//whenever the directory is 'required'

let jon = require('./jon')
let garfield = require('./garfield')
let odie = require('./odie')

let characters = [jon, odie, garfield];
console.log(characters);

module.exports = characters;