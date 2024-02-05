let computerChoice;
let userChoice;
let resultM;

let scoreStr = localStorage.getItem("score")
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
    score = scoreStr ?JSON.parse(scoreStr) : {
        win: 0,
        lost: 0,
        tie: 0,
    };
    score.displayScore = function () {
        return `Score: won: ${score.win},  Lost: ${score.lost}, Tie: ${score.tie}`
    }
    showResult();
}



function clickOnBat() {
    let randomNumber = Math.random() * 3;

    if (randomNumber > 0 && randomNumber <= 1) {
        userChoice = "Bat";
        computerChoice = "Bat";
    } else if (randomNumber > 1 && randomNumber <= 2) {
        userChoice = "Bat"
        computerChoice = "Ball";
    }
    else if (randomNumber > 2 && randomNumber <= 3) {
        userChoice = "Bat"
        computerChoice = "stump";
    }

    if (computerChoice == "Bat" && userChoice == "Bat") {
        score.tie++
        resultM = "Its a Tie!"
    }
    else if (computerChoice == "Ball" && userChoice == "Bat") {
        score.win++
        resultM = "User has won!"
    }
    else if (computerChoice == "stump" && userChoice == "Bat") {
        score.lost++
        resultM = "Computer has won!"
    }
    showResult();
}


function clickOnBall() {
    let randomNumber = Math.random() * 3;

    if (randomNumber > 0 && randomNumber <= 1) {
        userChoice = "Ball";
        computerChoice = "Bat";
    } else if (randomNumber > 1 && randomNumber <= 2) {
        userChoice = "Ball"
        computerChoice = "Ball";
    }
    else if (randomNumber > 2 && randomNumber <= 3) {
        userChoice = "Ball"
        computerChoice = "stump";
    }

    if (computerChoice == "Ball" && userChoice == "Ball") {
        score.tie++
        resultM = "Its a Tie!"
    }
    else if (computerChoice == "Bat" && userChoice == "Ball") {
        score.lost++
        resultM = "Computer has won!"
    }
    else if (computerChoice == "stump" && userChoice == "Ball") {
        score.lost++
        resultM = "Computer has won!"
    }
    showResult();
}


function clickOnStump() {
    let randomNumber = Math.random() * 3;

    if (randomNumber > 0 && randomNumber <= 1) {
        userChoice = "stump";
        computerChoice = "Bat";
    } else if (randomNumber > 1 && randomNumber <= 2) {
        userChoice = "stump"
        computerChoice = "Ball";
    }
    else if (randomNumber > 2 && randomNumber <= 3) {
        userChoice = "stump"
        computerChoice = "stump";
    }

    if (computerChoice == "stump" && userChoice == "stump") {
        score.tie++
        resultM = "Its a Tie!"
    }
    else if (computerChoice == "Bat" && userChoice == "stump") {
        score.win++
        resultM = "User has won!"
    }
    else if (computerChoice == "Ball" && userChoice == "stump") {
        score.win++
        resultM = "User has won!"
    }
    showResult();
}
function showResult() {
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('#user-choice').innerText = userChoice ? `You have choosen ${userChoice}🏏` : "";
    document.querySelector('#computer-choice').innerText = computerChoice ? `computer choice is ${computerChoice}🏏` : "";
    document.querySelector('#result-m').innerText = resultM ? resultM : "";
    document.querySelector('#display-score').innerText = `🏆${score.displayScore()}`;
}