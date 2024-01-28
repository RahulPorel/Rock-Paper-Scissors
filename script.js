let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById("score-board");
const resultMsg_p = document.getElementById("result-msg");

// btns for rock paper & scissor
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNo = Math.floor(Math.random() * 3);
  return choices[randomNo];
}

function convertToWord(letter) {
  if (letter === " r") return "Rock";
  if (letter === " p") return "Paper";
  else return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore_span.textContent = userScore++;
  computerScore_span.textContent = computerScore;
  resultMsg_p.textContent = `
  (User) : ${convertToWord(userChoice)} 
     beats
     (Computer) :  ${convertToWord(computerChoice)}
    . You Win! 
    `;
}
function lose(userChoice, computerChoice) {
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore++;
  resultMsg_p.textContent = `
   (User) : ${convertToWord(userChoice)}  
     loses to 
   (Computer) : ${convertToWord(computerChoice)}
    . You Lost! 
   
    `;
}

function draw(userChoice, computerChoice) {
  resultMsg_p.textContent = `
  (User) : ${convertToWord(userChoice)} 
     eqauls
     (Computer) : ${convertToWord(computerChoice)}
    . It's a draw.
    `;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);

      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);

      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);

      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => {
    game("r");
  });
  paper_div.addEventListener("click", () => {
    game("p");
  });
  scissor_div.addEventListener("click", () => {
    game("s");
  });
}

main();
