const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p')
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }
function convertToWord(letter) {
    if (letter === 'r') return "rock";
    else if (letter === 'p') return "paper";
    else return "scissors";
  }
function win(userChoice, computerChoice) {
    const userScore_div = document.getElementById(userChoice);
    const smallUser = "user".fontsize(3).sup();
    const smallComp = "comp".fontsize(3).sup();
  userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} beats ${convertToWord(computerChoice)}${smallComp}. You win!`
    userScore_div.classList.add('green-glow');
    setTimeout ( function() {userScore_div.classList.remove('green-glow')}, 300);
  }
function lose(userChoice, computerChoice) {
    const userScore_div = document.getElementById(userChoice);
    const smallUser = "user".fontsize(3).sup();
    const smallComp = "comp".fontsize(3).sup();
  computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
result_p.innerHTML = `${convertToWord(computerChoice)}${smallComp} beats ${convertToWord(userChoice)}${smallUser}. You lose!`
      userScore_div.classList.add('red-glow');
      setTimeout ( function() {userScore_div.classList.remove('red-glow')}, 300);
  }
function draw(userChoice, computerChoice) {
    const userScore_div = document.getElementById(userChoice);
    const smallUser = "user".fontsize(3).sup();
    const smallComp = "comp".fontsize(3).sup();
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
result_p.innerHTML = `${convertToWord(userChoice)} does not beat ${convertToWord(computerChoice)}. It's a draw!`
      userScore_div.classList.add('grey-glow');
      setTimeout ( function() {userScore_div.classList.remove('grey-glow')}, 300);
  }
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;
      case "sr":
      case "rp":
      case "ps":
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
    rock_div.addEventListener('click', function(){
      game("r");
    })
    paper_div.addEventListener('click', function(){
      game("p");
    })
    scissors_div.addEventListener('click', function(){
      game("s")
    })
  }
main();
