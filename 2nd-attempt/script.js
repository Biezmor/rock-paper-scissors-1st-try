const arr = ["rock", "paper", "scissors"];

function getComputerChoice () {
    let index = (Math.floor(Math.random() * (arr.length)));
    return arr[index];
};

function getHumanChoice () {
let answer = prompt("What will you choose?", "");

for (let i = 0; i < arr.length; i++) {
    if (answer.toLocaleLowerCase() === arr[i]) return arr[i]
};
}

function playGame () {
    
let humanScore = 0;
let computerScore = 0;


function playRound (humanChoice, computerChoice) {

    

    if (humanChoice === computerChoice) {
        console.log (`Tie! You both selected ${humanChoice}!`)

    } else if ((
            humanChoice === arr[0] && computerChoice === arr[1])
        || (humanChoice === arr[1] && computerChoice === arr[2])
        || (humanChoice === arr[2] && computerChoice === arr[0])) {
        ++computerScore
        console.log (`You lose! ${computerChoice.at(0).toLocaleUpperCase() + computerChoice.slice(1)} beats ${humanChoice}!`);
        

    } else if ((
            computerChoice === arr[0] && humanChoice === arr[1])
        || (computerChoice === arr[1] && humanChoice === arr[2])
        || (computerChoice === arr[2] && humanChoice === arr[0])) {
        ++humanScore
        console.log (`You win! ${humanChoice.at(0).toLocaleUpperCase() + humanChoice.slice(1)} beats ${computerChoice}!`);
       } else {
        console.log('What the heck is that?')
       };}



for (let i = 0; i < 5; i++) {

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
}




if (humanScore > computerScore) {
    console.log ("YOU WON!")
} else if (humanScore < computerScore) {
    console.log("You lost ;c")
} else if (humanScore === computerScore) {
    console.log ("It's a tie!")
}
};

playGame()