var playerOne = document.querySelector('#p1');
	playerTwo = document.querySelector('#p2');
	p1Display = document.querySelector('#p1Display');
	p2Display = document.querySelector('#p2Display');
	winningScoreDisplay = document.querySelector('p span');
	playerOneScore = 0;
	playerTwoScore = 0;
	gameOver = false;
	winningScore = 5;
	reset = document.querySelector('#reset');
	input = document.querySelector('input');


playerOne.addEventListener('click', function() {
	if(!gameOver)
		playerOneScore++;
		if(playerOneScore === winningScore){
			p1Display.classList.add('winner');
			gameOver = true;
		}
	p1Display.textContent = playerOneScore;
}) 

playerTwo.addEventListener('click', function() {
	if(!gameOver){
		playerTwoScore++;
		if(playerTwoScore === winningScore){
			p2Display.classList.add('winner');
			gameOver = true;
		}
		p2Display.textContent = playerTwoScore;
	}
})

reset.addEventListener('click', function(){
	resett();
}); 

function resett() {
	playerOneScore = 0;
	p1Display.textContent = 0;
	playerTwoScore = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove('winner');
	p2Display.classList.remove('winner');
	gameOver = false;
};

input.addEventListener('change', function() {
	winningScoreDisplay.textContent = this.value;
	winningScore = parseInt(this.value);
})