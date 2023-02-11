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
let playerButtonsContainer = document.createElement('div');
let btnRock = document.createElement('button');
let btnPaper = document.createElement('button');
let btnScissors = document.createElement('button');
let resultsContainer = document.createElement('div');
let roundCounterPara = document.createElement('p');
let playerSelectPara = document.createElement('p');
let computerSelectPara = document.createElement('p');
let resultsPara = document.createElement('p');
let playerWinsPara = document.createElement('p');
let computerWinsPara = document.createElement('p');
let roundDrawsPara = document.createElement('p');
let btnResetGame = document.createElement('button');

//GLOBAL VARS
let roundCounter = 1;
const WINS_LIMIT = 5;
let roundDraws = 0;
let playerWins = 0;
let computerWins = 0;

//COMPUTER SELECTION
getComputerSelection = () => {
    //randomly selects an index value from ARR_ROCK_PAPER_SCISSORS
    let randRockPaperScissors = ARR_ROCK_PAPER_SCISSORS[Math.floor(Math.random()*ARR_ROCK_PAPER_SCISSORS.length)];
    return randRockPaperScissors;
    }

//EVENT LISTENERS - on each click, assigns a player and computer selection
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

//UPDATING TEXT
clearScoreText = () => {
  roundCounterPara.textContent = ``;
  playerSelectPara.textContent = ``;
  computerSelectPara.textContent = ``;
  resultsPara.textContent = ``;
  playerWinsPara.textContent = ``;
  computerWinsPara.textContent = ``;
  roundDrawsPara.textContent = ``;
}
updateScoreText = () => {
      roundCounterPara.textContent = `ROUND #${roundCounter}`;
      playerWinsPara.textContent = `Player Wins: ${playerWins}`;
      computerWinsPara.textContent = `Computer Wins: ${computerWins}`;
      roundDrawsPara.textContent = `# of draws: ${roundDraws}`;
}

//GAME INITIALIZATION
addResetButton = () => {
  document.getElementById('roundDrawsPara').appendChild(btnResetGame);
  btnResetGame.setAttribute('id', 'btnResetgame');
  btnResetGame.textContent = `play again?`;
  btnResetGame.addEventListener('click', initGame);
  resetCreated = true;
}      
initGame = () => {
document.body.appendChild(title);
title.setAttribute('id', 'title');
title.textContent = "Rock, Paper, Scissors!";

//Player selection
document.body.appendChild(playerButtonsContainer);
playerButtonsContainer.setAttribute('id', 'playerbuttons-container');

//rock
document.getElementById('playerbuttons-container').appendChild(btnRock);
btnRock.setAttribute('id', 'rock');
btnRock.textContent = STR_ROCK;

//paper
document.getElementById('playerbuttons-container').appendChild(btnPaper);
btnPaper.setAttribute('id', 'paper');
btnPaper.textContent = STR_PAPER;

//scissors
document.getElementById('playerbuttons-container').appendChild(btnScissors);
btnScissors.setAttribute('id', 'scissors');
btnScissors.textContent = STR_SCISSORS;

//Displaying the results of each round
document.body.appendChild(resultsContainer);
resultsContainer.setAttribute('id', 'results-container');

document.getElementById('results-container').appendChild(roundCounterPara);
roundCounterPara.setAttribute('id', 'roundCounterPara');

document.getElementById('results-container').appendChild(playerSelectPara);
playerSelectPara.setAttribute('id', 'playerSelectPara');

document.getElementById('results-container').appendChild(computerSelectPara);
computerSelectPara.setAttribute('id', 'computerSelectPara');

document.getElementById('results-container').appendChild(resultsPara);
resultsPara.setAttribute('id', 'resultsPara');

document.getElementById('results-container').appendChild(playerWinsPara);
playerWinsPara.setAttribute('id', 'playerWinsPara');

document.getElementById('results-container').appendChild(computerWinsPara);
computerWinsPara.setAttribute('id', 'computerWinsPara');

document.getElementById('results-container').appendChild(roundDrawsPara);
roundDrawsPara.setAttribute('id', 'roundDrawsPara');

  btnResetGame.remove();
  roundCounter = 0;
  roundDraws = 0;
  playerWins = 0;
  computerWins = 0;
  
    clearScoreText();

    btnRock.addEventListener('click', playerRock);
    btnPaper.addEventListener('click', playerPaper);
    btnScissors.addEventListener('click', playerScissors);
}
  
initGame();

//DETERMINE ROUND WINNER by comparing the player's selection with the computer's selection
playRound = (playerSelection, computerSelection) => {
  checkWinner = () => {
    if ((playerWins < WINS_LIMIT) && (computerWins < WINS_LIMIT)) {
    roundCounter++;
  } else { 
   game(); 
  }
}
      //draw
      if (playerSelection === computerSelection) {
          resultsPara.textContent = `It's a draw.`;
          roundDraws++;
          updateScoreText();
          checkWinner();
      }
      //player selects rock
      else if (playerSelection === STR_ROCK && computerSelection === STR_PAPER) {
          resultsPara.textContent = `Computer wins this round! ${computerSelection} beats ${playerSelection}.`;
          computerWins++;
          updateScoreText();
          checkWinner();
      }
      else if (playerSelection === STR_ROCK && computerSelection === STR_SCISSORS) {
          resultsPara.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;
          playerWins++;
          updateScoreText();
          checkWinner();
      }
      //player selects paper
      else if (playerSelection === STR_PAPER && computerSelection === STR_ROCK) {
          resultsPara.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;
          playerWins++;
          updateScoreText();
          checkWinner();
      }
      else if (playerSelection === STR_PAPER && computerSelection === STR_SCISSORS) {
          resultsPara.textContent = `Computer wins this round! ${computerSelection} beats ${playerSelection}.`;
          computerWins++;
          updateScoreText();
          checkWinner();
      }
      //player selects scissors
      else if (playerSelection === STR_SCISSORS && computerSelection === STR_ROCK) {
        resultsPara.textContent = `Computer wins this round! ${computerSelection} beats ${playerSelection}.`;
         computerWins++;
         updateScoreText();
         checkWinner();
      }
      else if (playerSelection === STR_SCISSORS && computerSelection === STR_PAPER) {
          resultsPara.textContent`You win this round! ${playerSelection} beats ${computerSelection}.`;
          playerWins++;
          updateScoreText();
          checkWinner();
      }
    }

game = () => {
    btnRock.removeEventListener('click', playerRock);
    btnPaper.removeEventListener('click', playerPaper);
    btnScissors.removeEventListener('click', playerScissors);

    //after all the rock-paper-scissors rounds have finished, determine game winner and game stats
    let finalWinsTally = `# of ROUNDS = ${roundCounter}\r\nPLAYER = ${playerWins} point(s)\r\nCOMPUTER = ${computerWins} point(s)\r\n# of DRAWS = ${roundDraws}`;
  
    if (playerWins === computerWins) {
        clearScoreText();
        resultsPara.textContent = `Game is a draw...\r\n\r\n-- FINAL SCORE --\r\n\r\n${finalWinsTally}.`;
    }
    else if (playerWins > computerWins) {
        clearScoreText();
        resultsPara.textContent = `Player wins the game!\r\n\r\n-- FINAL SCORE --\r\n\r\n${finalWinsTally}`;
    } else if (playerWins < computerWins) {
        clearScoreText();
        resultsPara.textContent = `Computer wins the game!\r\n\r\n-- FINAL SCORE --\r\n\r\n${finalWinsTally}`;
    } 

      addResetButton();
}