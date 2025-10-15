console.log("Hello World!")

function getComputerChoice() {
    let randNum = Math.random();

    if (randNum > 0.6) {
        return "Rock";
    } else if (randNum > 0.3) {
        return "Paper";
    }else {
        return "Scissor";
    }
}

console.log (getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Please enter either Rock, Paper or Scissor.", "");
    console.log (choice);
}

getHumanChoice()
