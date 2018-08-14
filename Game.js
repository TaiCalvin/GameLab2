let userHealth = 40;
let playerHealth = 10;
function getDamage(min, max) {
 return Math.floor(min + Math.random()*(max+1 - min))
}


function startGame(){
  const playGame = prompt ("Do you want to play a game?");
  if (playGame === "yes"){
  const userName = prompt ("Please enter your name");

function startCombat (){
let win = 0;
while (userHealth > 0 && win < 3) {
  console.log(`${userName} has ${userHealth} health left.`);
  console.log(`Grant has ${playerHealth} health left.`);
  const decision = prompt ("Would you like to attack or quit?");
  userHealth-=getDamage(1,5);
  playerHealth-=getDamage(1,5);
  if (decision !== "quit" && playerHealth <= 0){
    playerHealth=10;
    win++;
    console.log(`${userName} wins!`);
  } else if (userHealth === 0) {
    console.log("Game Over.");
  }
  if (decision === "quit"){
    break;
  }
}
}
  }
  startCombat();
}
startGame ();
