//get the player selection of rock, paper, or scissors and log it to the console
getPlayerSelection = () => {
    const playerSelection =  prompt("Time to play Rock, Paper, Scissors! Do you throw rock, paper, or scissors?").toLowerCase(); 
    return playerSelection;
}

//randomly return either rock, paper, or scissors for the "computer" opponent
getComputerSelection = () => {
const arrRockPaperScissors = [
  "rock",
  "paper",
  "scissors"
];
//randomizing a selection of rock, paper or scissors from our array using Math.random, and placing that selection in a variable
let randRockPaperScissors = arrRockPaperScissors[Math.floor(Math.random()*arrRockPaperScissors.length)];
return randRockPaperScissors;
}

//determine the winner by comparing the player's selection with the computer's selection and return the 
playRound = (playerSelection, computerSelection) => {
    //gives a message of the results for each round
    roundResult = null;

    //draw
    if (playerSelection === computerSelection) {
        roundResult = `It's a draw.`;
        return roundResult;
    }
    //player selects rock
    else if (playerSelection === "rock" && computerSelection === "paper") {
        roundResult = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
        return roundResult;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        roundResult = `You win this round! ${playerSelection} beats ${computerSelection}.`;
        return roundResult;
    }
    //player selects paper
    else if (playerSelection === "paper" && computerSelection === "rock") {
        roundResult = `You win this round! ${playerSelection} beats ${computerSelection}.`;
        return roundResult;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        roundResult = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
        return roundResult;
    }
    //player selects scissors
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        roundResult = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
        return roundResult;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundResult = `You win this round! ${playerSelection} beats ${computerSelection}.`;
        return roundResult;
    }
}

game = () => {
    //score variables declared outside the for loop so they can continue to increment with each round
    let playerScore = 0;
    let computerScore = 0;
    let roundDraws = 0;
    let gameWinner = null;

    //calls playRound 5 times for a 5 round game.
    for (let roundCounter = 1; roundCounter < 6; roundCounter++) {
        console.log(`-- ROUND #${roundCounter} --`)

        playerSelection = getPlayerSelection();
        console.log(`You chose ${playerSelection}`);

        //the "computer" is assigned the random rock paper scissors value through computerSelection, which is then logged to the console
        computerSelection = getComputerSelection();
        console.log(`The computer chose ${computerSelection}`);

        console.log(playRound(playerSelection, computerSelection));

        //determining player or computer points for each round, based on what text the roundResult contains via include() method
        if (roundResult.includes("win")) {
            ++playerScore;
        } else if (roundResult.includes("lose")) {
            ++computerScore;
        } else if (roundResult.includes("draw")) {
            ++roundDraws;
        }
        //score is logged to the console after points logic applied for each round
        let scoreTally = `ROUND #${roundCounter} SCORE: PLAYER = ${playerScore} point(s) -- COMPUTER = ${computerScore} point(s)
                        \nDRAWS = ${roundDraws}
                        \n--------------`;
        console.log(scoreTally);
    
    }

    //after all the rock paper scissors rounds have finished, determine game winner, and log final score to console
    let finalScoreTally = `PLAYER = ${playerScore} point(s) -- COMPUTER = ${computerScore} point(s)\nDRAWS = ${roundDraws}`;

    if (playerScore === computerScore) {
        console.log(`Game is a draw...\n -- FINAL SCORE -- \n${finalScoreTally}.`);
    }
    else if (playerScore > computerScore) {
        gameWinner = console.log(`Player wins the game!\n FINAL SCORE: \n${finalScoreTally}`)
    } else if (playerScore < computerScore) {
        gameWinner = console.log(`Computer wins the game!\n FINAL SCORE: \n${finalScoreTally}`)
    }   
}
//actually calling the game function so the game runs
game();