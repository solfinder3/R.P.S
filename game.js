  var myRock = document.getElementById("r");
  var myPaper = document.getElementById("p");
  var myScissors = document.getElementById("s");
  var display = document.getElementById("comdisplay")
  var userdisplay = document.getElementById("userdisplay")
var wins = document.getElementById("wins")
var losses = document.getElementById("losses")
var draws = document.getElementById("draws")

myRock.addEventListener("click", function() {
  console.log('Hit') 
  game()
})
myPaper.addEventListener("click", function() {
  console.log('Crumble')
  game()
})
myScissors.addEventListener("click", function() {
  console.log('Cut')
  game()
})

function game() {
  let comMove = Math.random();
  if (comMove <=0.33) { comMove = "Rock";}
  else if (comMove <= 0.67) {comMove = "Paper";}
  else { comMove = "Scissors";}
  comdisplay.innerHTML = comMove
}

function user()
let userMove = userdisplay();
if (userMove = comMove) { draws = draws++} {
  
  userdisplay.draws.innerHTML = userMove.draws
}







//scoreboard




// user or player choice
// display wins or losses