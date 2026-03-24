
function getComputerChoice () {
 let computerChoice = (Math.ceil(Math.random() * 3));
 if (computerChoice === 1) {
    return "rock";
 } else if (computerChoice === 2) {
    return "paper";
 } else if (computerChoice === 3) {
    return "scissors";
 };
}


function getHumanChoice () {
    let humanChoice = prompt("What will you choose?", "");
if (humanChoice == "rock") {
    return "rock";
} else if (humanChoice == "paper") {
    return "paper";
} else if (humanChoice == "scissors") {
    return "scissors";
};
}



let humanScore = 0;
let computerScore = 0;



function playRound (humanChoice, computerChoice) {
if (humanChoice === computerChoice) {
    console.log( "Tie!");

} else if (humanChoice == "rock" && computerChoice == "paper") {
    ++computerScore;
    console.log("You lose! Paper beats Rock");
    
} else if (humanChoice == "rock" && computerChoice == "scissors") {
    ++humanScore;
    console.log("You win! Rock beats Scissors");
   
} else if (humanChoice == "paper" && computerChoice == "rock") {
    ++humanScore;
    console.log("You win! Paper beats Rock");

} else if (humanChoice == "paper" && computerChoice == "scissors") {
    ++computerScore;
    console.log("You lose! Scissors beat Paper");
     
} else if (humanChoice == "scissors" && computerChoice == "paper") {
    ++humanScore;
    console.log("You win! Scissors beat Paper");
    
} else if (humanChoice == "scissors" && computerChoice == "rock") {
    ++computerScore;
    console.log("You lose! Rock beats Scissors");
};
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//console.log(getHumanChoice());
//console.log(getComputerChoice());
playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(computerScore);

