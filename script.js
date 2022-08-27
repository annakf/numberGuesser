let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget =() =>{
	return Math.floor(Math.random()* 9 + 1);
}

//let secret = generateTarget();

const compareGuesses =(human, computer, secret)=> {
	const humanGuess = Math.abs(secret - human);
	const computerGuess = Math.abs(secret - computer);
	
	if (humanGuess == computerGuess || humanGuess < computerGuess){
		return true;
	}
	else {
		return false;
	}
	
}

const updateScore = (winner) =>{
	if (winner === 'human') {
		humanScore += 1;
	}
	else{
		computerScore += 1;
	}
}

const advanceRound = () =>{
	return currentRoundNumber += 1;
}