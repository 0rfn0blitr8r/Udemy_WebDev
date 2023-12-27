let makeRandCol = () =>{
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);

	return `rgb(${r}, ${g}, ${b})`;
}

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
	let newColor = makeRandCol();
	// document.body.style.backgroundColor = newColor;
	document.body.style.backgroundColor = newColor;
});