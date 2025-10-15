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

getComputerChoice();