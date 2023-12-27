document.querySelector("button").addEventListener('click', function(evt){
	console.log(evt);
});

// let input = document.querySelector('input');
// // input.addEventListener('keydown', function(e){
// // 	// console.log('DOWN');
// // 	console.log(e);
// // })
// input.addEventListener('keyup', function(e){
// 	// console.log('UP');
// 	console.log(e.code + " " + e.key);
// })

window.addEventListener('keyup', function(e){
	console.log(e.code + " " + e.key);
})