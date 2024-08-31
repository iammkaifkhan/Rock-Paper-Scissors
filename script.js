// Selecting all the necessary things from HTML
let h2 = document.querySelector("h2");
let msg = document.querySelector("#msg");
let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let uScore = 0;
let cScore = 0;
// Heading
h2.addEventListener("mouseover", () => {
    h2.innerHTML = "<h6>Made with &hearts; by Kaif Khan</h6>";

});
h2.addEventListener("mouseout", () => {
    h2.innerText = "Rock Paper Scissors";
});

// Getting Computer Choice to Play Game
const gencompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];

};

// Getting User Choice to Play Game
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        const compChoice = gencompChoice();
        playGame(userChoice, compChoice);
    });
});

// Draw Game fn
const drawGame = () => {
    msg.innerText = "Game was Draw!.. Play again";
    msg.style.backgroundColor = "#081b31";
};

// Playing Game fn 
const playGame = (userChoice, compChoice) => {

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;

        if (userChoice === "Rock" && compChoice === "Paper") {
            userWin = false;
        }
        else if (userChoice === "Rock" && compChoice === "Scissors") {
            userWin = true;
        }
        else if (userChoice === "Paper" && compChoice === "Rock") {
            userWin = true;
        }
        else if (userChoice === "Paper" && compChoice === "Scissors") {
            userWin = false;
        }
        else if (userChoice === "Scissors" && compChoice === "Rock") {
            userWin = false;
        }
        else if (userChoice === "Scissors" && compChoice === "Paper") {
            userWin = true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

// Showing Winner fn
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        uScore++;
        userScore.innerText = uScore;
        msg.innerText = `You Won!..${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        cScore++;
        compScore.innerText = cScore;
        msg.innerText = `Computer Won!..${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
