//get the player selection of rock, paper, or scissors and log it to the console
  let playerSelection = prompt("Time to play Rock, Paper, Scissors! Do you throw rock, paper, or scissors?").toLowerCase();
  console.log(`You chose ${playerSelection}`);

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
//the "computer" is assigned the random rock paper scissors value through computerSelection const, which is then logged to the console
let computerSelection = getComputerSelection();
console.log(`The computer chose ${computerSelection}`);



playRound = (playerSelection, computerSelection) => {
    //stores the results message to be returned by the function
    roundResult = null;

    //draw
    if (playerSelection === computerSelection) {
        roundResult = "It's a draw.";
        return roundResult;
    }
    //player selects rock
    if (playerSelection === "rock" && computerSelection === "paper") {
        roundResult = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
        return roundResult;
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        roundResult = `You win this round! ${playerSelection} beats ${computerSelection}.`;
        return roundResult;
    }
    //player selects paper
    if (playerSelection === "paper" && computerSelection === "rock") {
        roundResult = `You win this round! ${playerSelection} beats ${computerSelection}.`;
        return roundResult;
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        roundResult = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
        return roundResult;
    }
    //player selects scissors
    if (playerSelection === "scissors" && computerSelection === "rock") {
        roundResult = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
        return roundResult;
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        roundResult = `You win this round! ${playerSelection} beats ${computerSelection}.`;
        return roundResult;
    }
}

console.log(playRound(playerSelection, computerSelection));