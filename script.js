//creating a const for possible values of rock, paper, or scissors
const ARR_ROCK_PAPER_SCISSORS = [
    "rock 🪨",
    "paper 📄",
    "scissors ✂️"
  ];

  const STR_ROCK = ARR_ROCK_PAPER_SCISSORS[0];
  const STR_PAPER = ARR_ROCK_PAPER_SCISSORS[1];
  const STR_SCISSORS = ARR_ROCK_PAPER_SCISSORS[2];

//PAGE ELEMENTS 
let title = document.createElement('h1');
document.body.appendChild(title);
title.setAttribute('id', 'title');
title.textContent = "Rock, Paper, Scissors!";

//Player selection
let playerButtonsContainer = document.createElement('div');
document.body.appendChild(playerButtonsContainer);
playerButtonsContainer.setAttribute('id', 'playerbuttons-container');

//rock
let btnRock = document.createElement('button');
document.getElementById('playerbuttons-container').appendChild(btnRock);
btnRock.setAttribute('id', 'rock');
btnRock.textContent = STR_ROCK;

//paper
let btnPaper = document.createElement('button');
document.getElementById('playerbuttons-container').appendChild(btnPaper);
btnPaper.setAttribute('id', 'paper');
btnPaper.textContent = STR_PAPER;

//scissors
let btnScissors = document.createElement('button');
document.getElementById('playerbuttons-container').appendChild(btnScissors);
btnScissors.setAttribute('id', 'scissors');
btnScissors.textContent = STR_SCISSORS;

//Displaying the results of each round. Note that the player and computer selection messages and win/loss messages are in separate p's 
let resultsContainer = document.createElement('div');
document.body.appendChild(resultsContainer);
resultsContainer.setAttribute('id', 'results-container');

let playerSelectPara = document.createElement('p');
document.getElementById('results-container').appendChild(playerSelectPara);
playerSelectPara.setAttribute('id', 'playerSelectPara');

let computerSelectPara = document.createElement('p');
document.getElementById('results-container').appendChild(computerSelectPara);
computerSelectPara.setAttribute('id', 'computerSelectPara');

let resultsPara = document.createElement('p');
document.getElementById('results-container').appendChild(resultsPara);
playerSelectPara.setAttribute('id', 'resultsPara');

let playerScorePara = document.createElement('p');
document.getElementById('results-container').appendChild(playerScorePara);
playerScorePara.setAttribute('id', 'playerScorePara');

let computerScorePara = document.createElement('p');
document.getElementById('results-container').appendChild(computerScorePara);
computerScorePara.setAttribute('id', 'computerScorePara');

let roundDrawsPara = document.createElement('p');
document.getElementById('results-container').appendChild(roundDrawsPara);
roundDrawsPara.setAttribute('id', 'roundDrawsPara');

//COMPUTER SELECTION
getComputerSelection = () => {
    //randomly selects an index value from ARR_ROCK_PAPER_SCISSORS
    let randRockPaperScissors = ARR_ROCK_PAPER_SCISSORS[Math.floor(Math.random()*ARR_ROCK_PAPER_SCISSORS.length)];
    return randRockPaperScissors;
    }

//EVENT LISTENERS - on each click, assign a player and computer selection and play a round
btnRock.addEventListener('click', function() {
    let playerSelection = STR_ROCK;
    playerSelectPara.textContent = `You chose ${playerSelection}`;
    computerSelection = getComputerSelection();
    computerSelectPara.textContent = `The computer chose ${computerSelection}`;
    playRound(playerSelection, computerSelection);
})

btnPaper.addEventListener('click', function() {
    let playerSelection = STR_PAPER;
    playerSelectPara.textContent = `You chose ${playerSelection}`;
    computerSelection = getComputerSelection();
    computerSelectPara.textContent = `The computer chose ${computerSelection}`;
    playRound(playerSelection, computerSelection);
})

btnScissors.addEventListener('click', function() {
    let playerSelection = STR_SCISSORS;
    playerSelectPara.textContent = `You chose ${playerSelection}`;
    computerSelection = getComputerSelection();
    computerSelectPara.textContent = `The computer chose ${computerSelection}`;
    playRound(playerSelection, computerSelection);
})

//DETERMINE WINNER by comparing the player's selection with the computer's selection
playRound = (playerSelection, computerSelection) => {
    let roundResult = null;
  
      //draw
      if (playerSelection === computerSelection) {
          roundResult = `It's a draw.`;
          resultsPara.textContent = roundResult;
          return roundResult;
      }
      //player selects rock
      else if (playerSelection === STR_ROCK && computerSelection === STR_PAPER) {
          roundResult = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
          resultsPara.textContent = roundResult;
          return roundResult;
      }
      else if (playerSelection === STR_ROCK && computerSelection === STR_SCISSORS) {
          roundResult = `You win this round! ${playerSelection} beats ${computerSelection}.`;
          resultsPara.textContent = roundResult;
          return roundResult;
      }
      //player selects paper
      else if (playerSelection === STR_PAPER && computerSelection === STR_ROCK) {
          roundResult = `You win this round! ${playerSelection} beats ${computerSelection}.`;
          resultsPara.textContent = roundResult;
          return roundResult;
      }
      else if (playerSelection === STR_PAPER && computerSelection === STR_SCISSORS) {
          roundResult = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
          resultsPara.textContent = roundResult;
          return roundResult;
      }
      //player selects scissors
      else if (playerSelection === STR_SCISSORS && computerSelection === STR_ROCK) {
          roundResult = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
          resultsPara.textContent = roundResult;
          return roundResult;
      }
      else if (playerSelection === STR_SCISSORS && computerSelection === STR_PAPER) {
          roundResult = `You win this round! ${playerSelection} beats ${computerSelection}.`;
          resultsPara.textContent = roundResult;
          return roundResult;
      }

      calculatePoints();
    }
  
  calculatePoints = () => {
      //DETERMINING POINTS for each round, based on what text the roundResult contains
      let playerScore = 0;
      let computerScore = 0;
      let roundDraws = 0;
  
           if (roundResult.includes("win")) {
            ++playerScore;
            playerScorePara.textContent = `Player score: ${playerScore}`;
        } else if (roundResult.includes("lose")) {
            ++computerScore;
            computerScorePara.textContent = `Computer score: ${computerScore}`;
        } else if (roundResult.includes("draw")) {
            ++roundDraws;
            roundDrawsPara.textContent = `# of draws: ${roundDraws}`;
        }
          }
  
  game = () => {
    let gameWinner = null;
    
        //logs scores/stats to console after each round
        let scoreTally = `ROUND #${roundCounter} SCORE: PLAYER = ${playerScore} point(s) -- COMPUTER = ${computerScore} point(s)
                        \nDRAWS = ${roundDraws}
                        \n--------------`;
        console.log(scoreTally);
  
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