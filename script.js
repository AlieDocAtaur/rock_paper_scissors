function getComputerChoice(){
    const choices = ["rock","paper","scissors"]
    const choice = choices[Math.floor(Math.random()*choices.length)]
    return choice
}
function getHumanChoice() {
    const budInput = prompt("shoot bud: ").toLowerCase()
    if (budInput === 'rock' || 'paper' || 'scissors') {
        return budInput
    } else if (budInput != 'rock' || 'paper' || 'scissors'){
        alert('revisit your entry!')
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
    if(humanChoice == 'paper' & computerChoice == "rock"){
        console.log("You win! Paper beats rock");
        humanScore +=1
    } else if (humanChoice == "paper" & computerChoice == "scissors"){
        console.log("You lose! Scissors beats paper")
        computerScore +=1
    } else if(humanChoice == "rock" & computerChoice == "scissors"){
        console.log("You win! Rock beats scissors");
        humanScore +=1
    } else if(humanChoice == "rock" & computerChoice =="paper"){
        console.log("You lose! Paper beats rock");
        computerScore +=1
    } else if(humanChoice == "scissors" && computerChoice=="paper"){
        console.log("You win! scissor beats paper");
        humanScore +=1
    } else if(humanChoice == "scissors" & computerChoice =="rock"){
        console.log("You lose! Rock beats scissors");
        computerScore +=1
    } else if(humanChoice == computerChoice){
        console.log("a draw!");
    }
}

for (let count = 0; count < 5; count++) {
    playRound(getHumanChoice(), getComputerChoice());
    
    if (count == 4){
        console.log(`Final Score is Human ${humanScore}:Computer ${computerScore}`);
    }
}