  var myRock = document.getElementById("r");
  var myPaper = document.getElementById("p");
  var myScissors = document.getElementById("s");
  var comDisplay = document.getElementById("comdisplay");
  var userDisplay = document.getElementById("userdisplay");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var draws = document.getElementById("draws");
var inner = document.getElementById("inner");

myRock.addEventListener("click", function() {
  console.log("r") 
  let c = computerChoice() 
  userDisplay.innerHTML = 'Rock'
  let userChoice = "r"
  winner(c, userChoice)
})
myPaper.addEventListener("click", function() {
  console.log("p")
  let c = computerChoice()
  userDisplay.innerHTML = 'Paper'
  let userChoice = "p"
  winner(c, userChoice)
})
myScissors.addEventListener("click", function() {
  console.log("s")
  let c = computerChoice()
  userDisplay.innerHTML = 'Scissors'
  let userChoice = "s"
  winner(c, userChoice)
})


// function computerChoice() {
//   let comMove = Math.random();
//   if (comMove <= 0.33) { comMove = "Rock"; }
//   else if (comMove <= 0.67) { comMove = "Paper"; }
//   else { comMove = "Scissors"; }
//   comdisplay.innerHTML = comMove
// }

function computerChoice() {
  const choices = [ 'r', 'p', 's' ];
  const randomNumber = Math.floor(Math.random() * 3);
  comDisplay.innerHTML = choices[randomNumber]
  return choices[randomNumber];
}


function winner(computer, user) {
  switch ( computer + user) {
    case "rs":
      inner.innerHTML = "Computer WINS!"
    case "pr":
      inner.innerHTML = "Computer WINS!"
    case "sp":
      inner.innerHTML = "Computer WINS!"
      break;
    case 'rp':
      inner.innerHTML = "Player WINS!"
    case 'ps':
      inner.innerHTML = "Player WINS!"
    case 'sr':
      inner.innerHTML = "Player WINS!"
      break;
    case 'rr':
      inner.innerHTML = "Draw!"
    case 'pp':
      inner.innerHTML = "Draw!"
    case 'ss':
      inner.innerHTML = "Draw!"
      break;
  }
}




//notes other way to do it...
// function computerChoice() {
//   let comMove = Math.random();
//   if (comMove <= 0.33) { comMove = "Rock"; }
//   else if (comMove <= 0.67) { comMove = "Paper"; }
//   else { comMove = "Scissors"; }
//   comdisplay.innerHTML = comMove
// }
//or
// function getComputerChoice() {
//   const choices =[ 'r', 'p', 's' ];
//   console.log(Math.random()); 
//or 
// delete console.log(Math.random()); and put next two lines
// const randomNumber = Math.floor(Math.random() * 3)';
// return choices [randomNumber];
// }



// add draw 
// winner and losser

// function win_value()
//   const rps_draws
//   if comdisplay == userdisplay {
//     const draws++
//     draws.innerHTML = draws;
//   }



// let user
// let userMove = userdisplay();
// if (userMove = comMove) { draws = draws++} {
  
//   userdisplay.draws.innerHTML = userMove.draws
// }
