const playerScores = document.querySelector("#playerScore");
const computerScores = document.querySelector("#computerScore");
const playerHand = document.querySelector("#playerChoice");
const computerHand = document.querySelector("#computerChoice");
const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");
const result = document.querySelector("#result");

let playerScore = 0;
let computerScore = 0;
let win;

function getComputerChoice() {
    let randNum = Math.random();

    if (randNum > 0.6) {
       return "rock";
    } else if (randNum > 0.3) {
       return "paper";
    }else {
        return "scissors";
    }
}

function playGame(choice) {
    const comchoice = getComputerChoice()
    playerHand.src = ("images/" + choice + ".png");
    computerHand.src = ("images/" + comchoice + ".png");
    playRound(choice, comchoice)
}

rockbtn.addEventListener("click", function() {playGame("rock");});
paperbtn.addEventListener('click', function() {playGame("paper");});
scissorsbtn.addEventListener('click', function() {playGame("scissors");});

function playRound(playerChoice, computerChoice) {
    console.log(playerChoice + " vs " + computerChoice)
    if (playerChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                win = "none";
               break;
            case "paper":
                win = "computer"
                break;
            case "scissors":
                win = "player";
                break;
        }
    } else if (playerChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                win = "player";
                break;
            case "paper":
                win = "none"
                break;
            case "scissors":
                win = "computer";
                break;
        }
    } else if (playerChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                win = "computer";
                break;
            case "paper":
                win = "player"
                break;
            case "scissors":
                win = "none";
                break;
        }
    }

    calculateScore(win);
}

function calculateScore(win) {
    if (win === "player") {
        console.log ("You win! 1 point for you!");
        playerScore ++;
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        playerScores.textContent = "Player Score: " + playerScore
        if (playerScore === 5) {
            congrat("You");
        }
    } else if (win === "computer") {
        console.log ("You lose! 1 point for the computer!");                 
        computerScore ++;
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        computerScores.textContent = "Computer score: " + computerScore;
        if (computerScore === 5) {
            congrat("Computer");
        }
    } else if (win === "none") {
        console.log ("No one win!");
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
    } 

}

function congrat(who) {
    result.textContent = "Congrat! " + who + " win! Please restart the game to play! ";
    const restartbtn = document.createElement("button");
    restartbtn.textContent = "Restart Game";
    result.appendChild(restartbtn);

    rockbtn.removeEventListener("click", function() {playGame("rock");});
    paperbtn.removeEventListener('click', function() {playGame("paper");});
    scissorsbtn.removeEventListener('click', function() {playGame("scissors");});

   
    restartbtn.style.fontSize = "20px";
    restartbtn.style.backgroundColor = "#585481";
    restartbtn.style.borderRadius = "8px";
    restartbtn.style.height = "40px";
    restartbtn.style.color = "#D1BCE3"
    restartbtn.addEventListener("click", function() {window.location.reload()})
}

    //     let humanSelection = getHumanChoice().toLocaleLowerCase();
    //     computerSelection = getComputerChoice().toLocaleLowerCase();

    //    console.log("human chose: " + humanSelection);
    //     console.log("computer chose: " + computerSelection);

    //     playRound(humanSelection, computerSelection);

