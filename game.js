  var myRock = document.getElementById("r");
  var myPaper = document.getElementById("p");
  var myScissors = document.getElementById("s");
  var comDisplay = document.getElementById("comdisplay");
  var userDisplay = document.getElementById("userdisplay");
var inner = document.getElementById("inner");

myRock.addEventListener("click", function() {
  console.log("rock") 
  let c = computerChoice() 
  userDisplay.innerHTML = 'Rock'
  let userChoice = "Rock"
  winner(c, userChoice)
})
myPaper.addEventListener("click", function() {
  console.log("paper")
  let c = computerChoice()
  userDisplay.innerHTML = 'Paper'
  let userChoice = "Paper"
  winner(c, userChoice)
})
myScissors.addEventListener("click", function() {
  console.log("scissors")
  let c = computerChoice()
  userDisplay.innerHTML = 'Scissors'
  let userChoice = "Scissors"
  winner(c, userChoice)
})

function computerChoice() {
  const choices = [ 'Rock', 'Paper', 'Scissors' ];
  const randomNumber = Math.floor(Math.random() * 3);
  comDisplay.innerHTML = choices[randomNumber]
  return choices[randomNumber];
}


function winner(computer, user) {
  switch ( computer + user) {
    case "RockScissors":
      inner.innerHTML = "Computer WINS!"
    case "PaperRock":
      inner.innerHTML = "Computer WINS!"
    case "ScissorsPaper":
      inner.innerHTML = "Computer WINS!"
      break;
    case 'RockPaper':
      inner.innerHTML = "Player WINS!"
    case 'PaperScissors':
      inner.innerHTML = "Player WINS!"
    case 'ScissorsRock':
      inner.innerHTML = "Player WINS!"
      break;
    case 'RockRock':
      inner.innerHTML = "Draw!"
    case 'PaperPaper':
      inner.innerHTML = "Draw!"
    case 'ScissorsScissors':
      inner.innerHTML = "Draw!"
      break;
  }
}


{/* <scoreboard>
  if comDisplay = case "rs", "pr", "sp"
  then com scores 1 point
  else
  user = 1 point
</scoreboard> */}
