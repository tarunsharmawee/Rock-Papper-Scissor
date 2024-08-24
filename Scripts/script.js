let userScore = 0;
let aiScore = 0;
let drawScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#USER");
const aiScorePara = document.querySelector("#AI");
const drawScorePara = document.querySelector("#DRAW");
let btn = document.querySelector("#btn");
let hide = document.querySelector("#hidden");

  btn.addEventListener("click", () =>{
    hide.classList.remove("hide");
  })

let fear = () =>{
    msg.innerText = "AI - Are Gand Phat Gya";
  };

const showWinner = (userWin, userChoice, aiChoice) => {
    if(userWin){
       
       
        msg.innerText = `You Won!!  B'cuz Ai choose ${aiChoice} & ${userChoice} beats ${aiChoice}`;
        msg.style.backgroundColor = "#28965A";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        msg.innerText = `You Lose!!  B'cuz Ai choose ${aiChoice} & ${aiChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#69140E";
        aiScore++;
        aiScorePara.innerText = aiScore;
    }

}

const drawGame = ( ) =>{
    msg.innerText = `Game was Draw, Play Again`;
    msg.style.backgroundColor = "#16425B";
    drawScore++;
    drawScorePara.innerText = drawScore;
}

const genComputerChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) =>{
    const aiChoice = genComputerChoice();

    if (userChoice === aiChoice) {
        //Draw Game
        drawGame();
      } else {
        let userWin = true;
        if (userChoice === "rock") {
          //scissors, paper
          userWin = aiChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          //rock, scissors
          userWin = aiChoice === "scissor" ? false : true;
        } else {
          //rock, paper
          userWin = aiChoice === "rock" ? false : true;
        }
        if(userChoice === "secreat"){
          fear();
        }
        showWinner(userWin, userChoice, aiChoice);
      }
    };


choices.forEach((choice) =>{
    choice.addEventListener("click",  () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})