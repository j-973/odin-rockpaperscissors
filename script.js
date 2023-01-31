const arrRockPaperScissors = [
    "rock",
    "paper",
    "scissors"
  ];

//player and computer rock-paper-scissors selection
getPlayerSelection = () => {
    playerInputValid = false;
    while (playerInputValid == false) {
            let playerSelection =  prompt("Time to play Rock, Paper, Scissors! Do you throw rock, paper, or scissors?");
            if (playerSelection == null) {
                //restarts the loop to prompt player again
                continue;
            } 
            //converts any player input to lowercase so rock-paper-scissors can match the possible otpions and become valid 
            playerSelection = playerSelection.toLowerCase();

            if (playerSelection == arrRockPaperScissors[0] || playerSelection == arrRockPaperScissors[1] || playerSelection == arrRockPaperScissors[2]) {
                playerInputValid = true;
                if (playerInputValid == true) {
                    return playerSelection;
                }
            } 
        }
}

getComputerSelection = () => {
//randomly selects an index value arrRockPaperScissors
let randRockPaperScissors = arrRockPaperScissors[Math.floor(Math.random()*arrRockPaperScissors.length)];
return randRockPaperScissors;
}

//determine the winner by comparing the player's selection with the computer's selection
playRound = (playerSelection, computerSelection) => {
    roundResult = null;

    //draw
    if (playerSelection === computerSelection) {
        roundResult = `It's a draw.`;
        return roundResult;
    }
    //player selects rock
    else if (playerSelection === "rock" && computerSelection === "paper") {
        roundResult = `You lose this round! ${computerSelection}📄 beats ${playerSelection}🪨.`;
        return roundResult;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        roundResult = `You win this round! ${playerSelection}🪨 beats ${computerSelection}✂️.`;
        return roundResult;
    }
    //player selects paper
    else if (playerSelection === "paper" && computerSelection === "rock") {
        roundResult = `You win this round! ${playerSelection}📄 beats ${computerSelection}🪨.`;
        return roundResult;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        roundResult = `You lose this round! ${computerSelection}✂️ beats ${playerSelection}📄.`;
        return roundResult;
    }
    //player selects scissors
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        roundResult = `You lose this round! ${computerSelection}🪨 beats ${playerSelection}✂️.`;
        return roundResult;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundResult = `You win this round! ${playerSelection}✂️ beats ${computerSelection}📄.`;
        return roundResult;
    }
}

game = () => {
    //score variables declared outside the for loop so they can continue to increment with each round
    let playerScore = 0;
    let computerScore = 0;
    let roundDraws = 0;
    let gameWinner = null;

    //5 round game
    for (let roundCounter = 1; roundCounter < 6; roundCounter++) {
        console.log(`-- ROUND #${roundCounter} --`)

        playerSelection = getPlayerSelection();
        console.log(`You chose ${playerSelection}`);

        computerSelection = getComputerSelection();
        console.log(`The computer chose ${computerSelection}`);

        console.log(playRound(playerSelection, computerSelection));

        //determining player or computer points for each round, based on what text the roundResult contains
        if (roundResult.includes("win")) {
            ++playerScore;
        } else if (roundResult.includes("lose")) {
            ++computerScore;
        } else if (roundResult.includes("draw")) {
            ++roundDraws;
        }
        //logs scores/stats to console after each round
        let scoreTally = `ROUND #${roundCounter} SCORE: PLAYER = ${playerScore} point(s) -- COMPUTER = ${computerScore} point(s)
                        \nDRAWS = ${roundDraws}
                        \n--------------`;
        console.log(scoreTally);
    
    }

    //after all the rock-paper-scissors rounds have finished, determine game winner and game stats
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