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