const arrRockPaperScissors = [
    "rock",
    "paper",
    "scissors"
  ];

getComputerSelection = () => {
//randomly selects an index value arrRockPaperScissors
let randRockPaperScissors = arrRockPaperScissors[Math.floor(Math.random()*arrRockPaperScissors.length)];
return randRockPaperScissors;
}

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
btnRock.textContent = 'ROCK 🪨';

//paper
let btnPaper = document.createElement('button');
document.getElementById('playerbuttons-container').appendChild(btnPaper);
btnPaper.setAttribute('id', 'paper');
btnPaper.textContent = 'PAPER 📄';

//scissors
let btnScissors = document.createElement('button');
document.getElementById('playerbuttons-container').appendChild(btnScissors);
btnScissors.setAttribute('id', 'scissors');
btnScissors.textContent = 'SCISSORS ✂️';

//Displaying the results of each round 
let resultsContainer = document.createElement('div');
document.body.appendChild(resultsContainer);
resultsContainer.setAttribute('id', 'results-container');