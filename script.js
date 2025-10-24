function getComputerChoice() {
    num = Math.random();
    if (num < 1/3){
        return "paper";
    } else if (num < 2/3){
        return "scissors";
    } else {
        return "rock";
    }
}

function getHumanChoice(){
    choice = prompt("Make your choice! Paper, scissors, or rock?").toLowerCase();
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playSingleRound(humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats Rock!");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice == "paper"){
        console.log("Draw!")
    } else if (humanChoice === "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats Paper!")
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beats Paper!");
        humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice == "scissors"){
        console.log("Draw!")
    } else if (humanChoice === "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats Scissors!")
        computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice == "scissors"){
        console.log("You win! Rocks beats Scissors");
        humanScore += 1;
    } else if (humanChoice === "rock" && computerChoice == "rock"){
        console.log("Draw!")
    } else if (humanChoice === "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock!")
        computerScore += 1;
    }
}

humanChoice = getHumanChoice();
computerChoice = getComputerChoice();

playSingleRound(humanChoice, computerChoice);