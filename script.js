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

let roundCounterPara = document.createElement('p');
document.getElementById('results-container').appendChild(roundCounterPara);
roundCounterPara.setAttribute('id', 'roundCounterPara');

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

//EVENT LISTENERS - on each click, assigns a player and computer selection and play a round
playerRock = () => {
    let playerSelection = STR_ROCK;
    playerSelectPara.textContent = `You chose ${playerSelection}`;
    computerSelection = getComputerSelection();
    computerSelectPara.textContent = `The computer chose ${computerSelection}`;
    playRound(playerSelection, computerSelection);
}
playerPaper = () => {
  let playerSelection = STR_PAPER;
    playerSelectPara.textContent = `You chose ${playerSelection}`;
    computerSelection = getComputerSelection();
    computerSelectPara.textContent = `The computer chose ${computerSelection}`;
    playRound(playerSelection, computerSelection)
}
playerScissors = () => {
 let playerSelection = STR_SCISSORS;
    playerSelectPara.textContent = `You chose ${playerSelection}`;
    computerSelection = getComputerSelection();
    computerSelectPara.textContent = `The computer chose ${computerSelection}`;
    playRound(playerSelection, computerSelection); 
}

btnRock.addEventListener('click', playerRock);
btnPaper.addEventListener('click', playerPaper);
btnScissors.addEventListener('click', playerScissors);

//GLOBAL VARS
let roundCounter = 0;
const SCORE_LIMIT = 5;
let roundDraws = 0;
let playerScore = 0;
let computerScore = 0;

//DETERMINE ROUND WINNER by comparing the player's selection with the computer's selection
playRound = (playerSelection, computerSelection) => {
    if ((playerScore < SCORE_LIMIT) && (computerScore < SCORE_LIMIT)) {
         roundCounter++;
    } else { 
        game(); 
    }

      //draw
      if (playerSelection === computerSelection) {
        ++roundDraws;
          roundResult = `It's a draw.`;
          resultsPara.textContent = roundResult;
          displayScore();
          return roundResult;
      }
      //player selects rock
      else if (playerSelection === STR_ROCK && computerSelection === STR_PAPER) {
        ++computerScore;
          roundResult = `Computer wins this round! ${computerSelection} beats ${playerSelection}.`;
          resultsPara.textContent = roundResult;
          displayScore();
          return roundResult;
      }
      else if (playerSelection === STR_ROCK && computerSelection === STR_SCISSORS) {
        ++playerScore;
          roundResult = `You win this round! ${playerSelection} beats ${computerSelection}.`;
          resultsPara.textContent = roundResult;
          displayScore();
          return roundResult;
      }
      //player selects paper
      else if (playerSelection === STR_PAPER && computerSelection === STR_ROCK) {
        ++playerScore;
          roundResult = `You win this round! ${playerSelection} beats ${computerSelection}.`;
          resultsPara.textContent = roundResult;
          displayScore();
          return roundResult;
      }
      else if (playerSelection === STR_PAPER && computerSelection === STR_SCISSORS) {
        ++computerScore;
          roundResult = `Computer wins this round! ${computerSelection} beats ${playerSelection}.`;
          resultsPara.textContent = roundResult;
          displayScore();
          return roundResult;
      }
      //player selects scissors
      else if (playerSelection === STR_SCISSORS && computerSelection === STR_ROCK) {
        ++computerScore;
          roundResult = `Computer wins this round! ${computerSelection} beats ${playerSelection}.`;
          resultsPara.textContent = roundResult;
          displayScore();
          return roundResult;
      }
      else if (playerSelection === STR_SCISSORS && computerSelection === STR_PAPER) {
          roundResult = `You win this round! ${playerSelection} beats ${computerSelection}.`;
          ++playerScore;
          resultsPara.textContent = roundResult;
          displayScore();
          return roundResult;
      }
    }
    
displayScore = () => {
    roundCounterPara.textContent = `ROUND #${roundCounter}`;
    playerScorePara.textContent = `Player score: ${playerScore}`;
    computerScorePara.textContent = `Computer score: ${computerScore}`;
    roundDrawsPara.textContent = `# of draws: ${roundDraws}`;
}
         
game = () => {
    btnRock.removeEventListener('click', playerRock);
    btnPaper.removeEventListener('click', playerPaper);
    btnScissors.removeEventListener('click', playerScissors);

    //after all the rock-paper-scissors rounds have finished, determine game winner and game stats
    let finalScoreTally = `# of ROUNDS = ${roundCounter}\r\nPLAYER = ${playerScore} point(s)\r\nCOMPUTER = ${computerScore} point(s)\r\n# of DRAWS = ${roundDraws}`;
  
    if (playerScore === computerScore) {
        resultsContainer.textContent = `Game is a draw...\r\n\r\n-- FINAL SCORE --\r\n\r\n${finalScoreTally}.`;
    }
    else if (playerScore > computerScore) {
        resultsContainer.textContent = `Player wins the game!\r\n\r\n-- FINAL SCORE --\r\n\r\n${finalScoreTally}`;
    } else if (playerScore < computerScore) {
        resultsContainer.textContent = `Computer wins the game!\r\n\r\n-- FINAL SCORE --\r\n\r\n${finalScoreTally}`;
    } 
  }
