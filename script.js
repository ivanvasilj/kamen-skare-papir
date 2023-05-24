


const OPTIONS = ["kamen", "škare", "papir"];
const rand = Math.floor(Math.random() * OPTIONS.length);
const resultParagraph = document.getElementById("result");
let userScore = 0;
let computerScore = 0;
const playerScoreCount = document.getElementById("player-score");
const computerScoreCount = document.getElementById("computer-score");

const updateScore = () => {
    playerScoreCount.textContent = userScore;
    computerScoreCount.textContent = computerScore;

};

console.log(OPTIONS[rand]);



const checkResult = (event) => {

    console.log("event.target.textContent");
    console.log(event.target.textContent);
    const userInput = event.target.textContent.toLowerCase();
    const randomInput = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];

    console.log("userInput");
    console.log(userInput);
    console.log("userInput");
    console.log(userInput);

    if (userInput === randomInput) {

        console.log("It's a tie!");
        resultParagraph.textContent = "It's a tie!";
        document.body.style.backgroundColor = "#313131";
    } else if (

        (userInput === "kamen" && randomInput === "škare") ||
        (userInput === "škare" && randomInput === "papir") ||
        (userInput === "papir" && randomInput === "kamen")


    ) {
        resultParagraph.textContent = `congrats ${userInput} beats ${randomInput}.`;
        console.log("Congrats! You've won");
        userScore++;
        console.log("userScore");
        console.log(userScore);
        console.log("computerScore");
        console.log(computerScore);
        updateScore();
        document.body.style.backgroundcolor = "#31f131"
    } else {

        resultParagraph.textContent = `congrats ${userInput} beats ${randomInput}.`;
        console.log("You lost. Try again!");
        computerScore++;
        updateScore();
        document.body.style.backgroundColor = "#a13131"
    }
};





const buttonArray = document.querySelectorAll("button");
buttonArray.forEach((button) => {
    console.log("button");
    console.log(button)

    button.addEventListener("click", checkResult);



})