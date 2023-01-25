//randomly return either rock, paper, or scissors
computerChoice = () => {
    const arrRockPaperScissors = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    //randomizing a selection of rock, paper or scissors from our array using Math.random, and placing that selection in a variable
    let randRockPaperScissors = arrRockPaperScissors[Math.floor(Math.random()*arrRockPaperScissors.length)];
    return randRockPaperScissors;
}
//the "computer" is assigned the random rock paper scissors value through computerSelection const, which is then printed to the console
const computerSelection = computerChoice();
console.log(computerSelection);