console.log("Hello World!")

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 1; i < 6; i++) {
        function getComputerChoice() {
            let randNum = Math.random();

            if (randNum > 0.6) {
                return "rock";
            } else if (randNum > 0.3) {
                return "paper";
            }else {
                return "scissor";
            }
        }


        function getHumanChoice() {
            let choice = prompt("Round " + i + "! Please enter either Rock, Paper or Scissor.", "");
            // console.log (choice);
            return String(choice);
        }

        getComputerChoice();

        function playRound(humanChoice, computerChoice) {
            let win

            if (humanChoice === "rock") {
                switch (computerChoice) {
                    case "rock":
                        win = "none";
                        break;
                    case "paper":
                        win = "computer"
                        break;
                    case "scissor":
                        win = "human";
                        break;
                }
            } else if (humanChoice === "paper") {
                switch (computerChoice) {
                    case "rock":
                        win = "human";
                        break;
                    case "paper":
                        win = "none"
                        break;
                    case "scissor":
                        win = "computer";
                        break;
                }
            } else if (humanChoice === "scissor") {
                switch (computerChoice) {
                    case "rock":
                        win = "computer";
                        break;
                    case "paper":
                        win = "human"
                        break;
                    case "scissor":
                        win = "none";
                        break;
                }
            }

            if (win === "human") {
                console.log ("You win! 1 point for you!");
                humanScore ++;
                console.log("Round " + i);
                console.log("Human score: " + humanScore);
                console.log("Computer score: " + computerScore);
            } else if (win === "computer") {
                console.log ("You lose! 1 point for the computer!");
                computerScore ++;
                console.log("Round " + i);
                console.log("Human score: " + humanScore);
                console.log("Computer score: " + computerScore);
            } else if (win === "none") {
                console.log ("No one win!");
                console.log("Round " + i);
                console.log("Human score: " + humanScore);
                console.log("Computer score: " + computerScore);
            } 
        }

        let humanSelection = getHumanChoice().toLocaleLowerCase();
        computerSelection = getComputerChoice().toLocaleLowerCase();

        console.log("human chose: " + humanSelection);
        console.log("computer chose: " + computerSelection);

        playRound(humanSelection, computerSelection);

    }
}

playGame();