let input = document.querySelector('input');
let h1 = document.querySelector('h1');

//event of 'change' is triggered when you type something and then move the focus away from the input section
//event of 'input' is triggered when you type anything

input.addEventListener('input', function(e){
	h1.innerText = input.value;
	console.log(e);
})