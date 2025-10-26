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

let humanScore = 0;
let computerScore = 0;

function playSingleRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    const newPara = document.createElement("p");
    if (humanChoice === "paper" && computerChoice == "rock"){
        newPara.textContent="You win! Paper beats Rock!";
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice == "paper"){
        newPara.textContent="Draw!";
    } else if (humanChoice === "paper" && computerChoice == "scissors"){
        newPara.textContent="You lose! Scissors beats Paper!";
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice == "paper"){
        newPara.textContent="You win! Scissors beats Paper!";
        humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice == "scissors"){
        newPara.textContent="Draw!";
    } else if (humanChoice === "scissors" && computerChoice == "rock"){
        newPara.textContent="You lose! Rock beats Scissors!";
        computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice == "scissors"){
        newPara.textContent="You win! Rocks beats Scissors";
        humanScore += 1;
    } else if (humanChoice === "rock" && computerChoice == "rock"){
        newPara.textContent="Draw!";
    } else if (humanChoice === "rock" && computerChoice == "paper"){
        newPara.textContent="You lose! Paper beats Rock!";
        computerScore += 1;
    }
    score.textContent = `Score === User ${humanScore} : ${computerScore} Computer`;
    results.appendChild(newPara);

    if (computerScore >= 5){
        displayWinner("Computer");
        disableButtons();
    } else if (humanScore >= 5){
        displayWinner("You");
        disableButtons();
    }
}

function disableButtons() {
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    rockBtn.disabled = true;
}

function enableButtons() {
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    rockBtn.disabled = false;
}

function displayWinner(winner){
    const winningBanner = document.createElement("h1");
    winningBanner.textContent = `${winner} won!`;
    winningBanner.style.cssText = winner == "Computer" ? "color: red" : "color: green";
    results.style.cssText = "color: darkgrey;";
    score.appendChild(winningBanner);
    score.appendChild(resetButton);
}

function clearResultsDiv(){
    results.style.cssText = "color: black;";
    results.textContent = "";
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    // remove score and reset game button from the DOM
    score.textContent = `Score === User ${humanScore} : ${computerScore} Computer`;
    enableButtons();
    clearResultsDiv();
}

const paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", () => playSingleRound(paperBtn.id, getComputerChoice()));

const scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", () => playSingleRound(scissorsBtn.id, getComputerChoice()));

const rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", () => playSingleRound(rockBtn.id, getComputerChoice()));

const results = document.getElementById("results");
const score = document.getElementById("score");
score.textContent = `Score === User ${humanScore} : ${computerScore} Computer`;

const resetButton = document.createElement("button");
resetButton.textContent = "Play Again";
resetButton.addEventListener("click", () => resetGame(score));
