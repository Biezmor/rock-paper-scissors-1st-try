
function getComputerChoice () {
 let result = (Math.ceil(Math.random() * 3));
 if (result === 1) {
    return "rock";
 } else if (result === 2) {
    return "paper";
 } else if (result === 3) {
    return "scissors";
 };
}


function getHumanChoice () {
    let answer = prompt("What will you choose?", "");
    answer = answer.toLowerCase();

if (answer == "rock") {
    return "rock";
} else if (answer == "paper") {
    return "paper";
} else if (answer == "scissors") {
    return "scissors";
};
}

let humanScore = 0;
let computerScore = 0;


function playGame() {

for (let i=0; i<5; i++) {

//playRound(humanSelection, computerSelection);


function playRound (humanChoice, computerChoice) {
    

  if ((String(humanChoice)) === (String(computerChoice))) {
    console.log("Tie!");
} else if (humanChoice === "rock" && computerChoice === "paper") {
    ++computerScore;
    console.log("You lose! Paper beats Rock");
    
} else if (humanChoice === "rock" && computerChoice === "scissors") {
    ++humanScore;
    console.log("You win! Rock beats Scissors");
   
} else if (humanChoice === "paper" && computerChoice === "rock") {
    ++humanScore;
    console.log("You win! Paper beats Rock");

} else if (humanChoice === "paper" && computerChoice === "scissors") {
    ++computerScore;
    console.log("You lose! Scissors beat Paper");
     
} else if (humanChoice === "scissors" && computerChoice === "paper") {
    ++humanScore;
    console.log("You win! Scissors beat Paper");
    
} else if (humanChoice === "scissors" && computerChoice === "rock") {
    ++computerScore;
    console.log("You lose! Rock beats Scissors");
}

console.log(humanSelection, computerSelection);

console.log(humanScore, computerScore);

}




const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);
if (i === 4 && humanScore > computerScore) {
    console.log("You win the grand prize!!!")
} else if (i === 4 && computerScore > humanScore) {
    console.log("Whomp whomp! You lost!");
} else  if (i === 4 && humanScore === computerScore) {
    console.log("The result cannot be determined");
}
}
}
