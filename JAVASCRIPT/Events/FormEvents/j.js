let form = document.querySelector('#shelterForm');
let input = document.querySelector("#catName");
let lst = document.querySelector("#cats");
form.addEventListener('submit', function(e){
	e.preventDefault();

	let newLi = document.createElement('li');
	newLi.textContent = input.value;
	lst.appendChild(newLi);
	input.value = "";
})

//e.stopPropagation() stop multiple events from triggering