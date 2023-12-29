// // alert(".js file is working");

// let container = document.querySelector('#container');
// let p1btn = document.querySelector('#p1btn');
// let p2btn = document.querySelector('#p2btn');
// let p1display = document.querySelector("#p1display");
// let p2display = document.querySelector("#p2display");
// let resetbtn = document.querySelector("#resetbtn");
// let winningScoreSelect = document.querySelector('#playto');

// let p1Score = 0;
// let p2Score = 0;

// let winningScore = 4;
// let gameOver = false;

// winningScoreSelect.addEventListener('change', function(){
// 	// alert('change');
// 	winningScore = parseInt(this.value);
// 	reset();
// });


// p1btn.addEventListener('click', function(){
// 	if(!gameOver){
// 		p1Score += 1;
// 		if(p1Score === winningScore-1){
// 			gameOver = true;
// 			p1display.classList.add('winner');
// 			p2display.classList.add('loser');
// 			p1display.textContent = p1Score;
// 		}else{
// 			p1display.textContent = p1Score;
// 		}
// 	}

// });

// p2btn.addEventListener('click', function(){
// 	if(!gameOver){
// 		p2Score += 1;
// 		if(p2Score === winningScore-1){
// 			gameOver = true;
// 			p2display.classList.add('winner');
// 			p1display.classList.add('loser');
// 			p2display.textContent = p2Score;
// 		}else{
// 			p2display.textContent = p2Score;
// 		}
// 	}
// });

// resetbtn.addEventListener('click', reset);

// function reset(){
// 	gameOver = false;
// 	p1Score = 0;
// 	p2Score = 0;
// 	p1display.textContent = 0;
// 	p2display.textContent = 0; 
// 	// p1display.style.color = 'black';
// 	// p2display.style.color = 'black';
// 	p1display.classList.remove('winner', 'loser');
// 	p2display.classList.remove('winner', 'loser');
// }


const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
