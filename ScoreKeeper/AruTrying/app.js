// alert(".js file is working");

let container = document.querySelector('#container');
let p1btn = document.querySelector('#p1btn');
let p2btn = document.querySelector('#p2btn');
let p1display = document.querySelector("#p1display");
let p2display = document.querySelector("#p2display");
let resetbtn = document.querySelector("#resetbtn");

let p1Score = 0;
let p2Score = 0;

let winningScore = 6;

p1btn.addEventListener('click', function(){
	p1Score += 1;
	if(p1Score === winningScore){
		//styling the P1 winning scheme
		alert("PLAYER 1 HAS WON!!");
		p1btn.style.backgroundColor = '#8ec07c';
		p2btn.style.backgroundColor = '#c83a29';
		p1btn.classList.add('color', "#282828");
		p2btn.classList.add('color', "#fbf1c7");

	}
	// alert("p1 button pressed!");
	else{
		p1display.textContent = p1Score;
	}
});

p2btn.addEventListener('click', function(){
	p2Score += 1;
	if(p2Score === winningScore){
		//styling the P1 winning scheme
		alert("PLAYER 2 HAS WON!!");
		p2btn.style.backgroundColor = '#8ec07c';
		p1btn.style.backgroundColor = '#c83a29';
		p1btn.classList.add('color', "#fbf1c7");
		p2btn.classList.add('color', "#282828");

	}
	// alert("p1 button pressed!");
	else{
		p2display.textContent = p2Score;
	}
});


resetbtn.addEventListener('click', function(){
	p1Score = 0;
	p2Score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;
	p1btn.style.backgroundColor = '#fbf1c7';
	p2btn.style.backgroundColor = '#fbf1c7';
})