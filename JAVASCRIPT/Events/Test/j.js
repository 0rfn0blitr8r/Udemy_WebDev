let makeRandCol = () =>{
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);

	return `rgb(${r}, ${g}, ${b})`;
}

function colorChanger(){
	this.style.backgroundColor = makeRandCol();
	this.style.color = makeRandCol();
}

let bttns = document.querySelectorAll("button");

for(let i = 0; i < bttns.length ; i++){
	bttns[i].addEventListener('click', colorChanger);
}
