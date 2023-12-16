
//Player makes his choice
//get computer choice
//compare the choices
//post appropriate message win loose or tie
//post final message and stats when player or computer reach total wins



const rockSelection        = document.getElementById("rockImg");
const paperSelection       = document.getElementById("paperImg");
const scissorsSelection    = document.getElementById("scissorImg");

const addRockEvent = function () {GameRound('rock')};
const addPaperEvent = function() {GameRound('paper')};
const addScissorsEvent = function() {GameRound('scissors')};

rockSelection.addEventListener('click', addRockEvent);
paperSelection.addEventListener('click', addPaperEvent);
scissorsSelection.addEventListener('click', addScissorsEvent);

let playerWins = 0;
let computerWins = 0;
let RoundsPlayed = 0;
let ties = 0;

const playerWinDisplay = document.getElementById("playerWinCount");
const computerWinDisplay = document.getElementById("computerWinCount");
const totalRoundsPlayedDisplay = document.getElementById("totalRoundsPlayed")
const totalWinsDisplay = document.getElementById("totalWins");
const tieDisplay = document.getElementById("tieDisplay");

totalRoundsPlayedDisplay.textContent = RoundsPlayed;
computerWinDisplay.textContent = computerWins;
tieDisplay.textContent = ties;
playerWinDisplay.textContent = playerWins;

// alert("You will be playing a rock, paper, scissors game with the computer until either of you reach a certain number of wins")
const totalWins = prompt("How many wins ?")
totalWinsDisplay.textContent = totalWins;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getComputerChoice()
{
let computerChoice = Math.floor(Math.random() * 3) + 1; // 1 equals rock, 2 equals paper, 3 equals scissors
if (computerChoice === 1)
{
return "rock"
}
else if (computerChoice === 2)
{
return "paper"
}
else  (computerChoice === 3)
{
return "scissors"
}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function GameRound(playerChoice)
 {

 let computerChoice = null;

 computerChoice = getComputerChoice()

 if (playerChoice === computerChoice )
 {
 alert("You have chosen " + playerChoice + ". The computer has also chosen " + computerChoice + ". It is a tie.")
 RoundsPlayed = RoundsPlayed +1;
 ties = ties +1;
 tieDisplay.textContent = ties;
 totalRoundsPlayedDisplay.textContent = RoundsPlayed;
//  return "tie"
 }
 else if ( playerChoice === "rock" && computerChoice === "paper")
 {
   alert("Paper beats Rock, you loose")
  //  return "loose"
  computerWins = computerWins +1;
  RoundsPlayed = RoundsPlayed +1;
  computerWinDisplay.textContent = computerWins;
  totalRoundsPlayedDisplay.textContent = RoundsPlayed;
 }
 else if (playerChoice === "rock" && computerChoice === "scissors")
 {
   alert("Rock beats Scissors, you win!")
  //  return "win"
  playerWins = playerWins +1;
  RoundsPlayed = RoundsPlayed +1;
  playerWinDisplay.textContent = playerWins;
  totalRoundsPlayedDisplay.textContent = RoundsPlayed;
 }
 else if (playerChoice === "paper" && computerChoice === "rock")
 {
   alert("Paper beats Rock, you win!")
   playerWins = playerWins +1;
   RoundsPlayed = RoundsPlayed +1;
   playerWinDisplay.textContent = playerWins;
   totalRoundsPlayedDisplay.textContent = RoundsPlayed;
  //  return "win"
 }
 else if(playerChoice === "paper" && computerChoice === "scissors")
 {
   alert("Scissors beat Paper, you loose")
   computerWins = computerWins +1;
   RoundsPlayed = RoundsPlayed +1;
   computerWinDisplay.textContent = computerWins;
   totalRoundsPlayedDisplay.textContent = RoundsPlayed;
  //  return "loose"
 }
 else if (playerChoice === "scissors" && computerChoice === "rock")
 {
   alert("Rock beats Scissors, you loose")
   computerWins = computerWins +1;
   RoundsPlayed = RoundsPlayed +1;
   computerWinDisplay.textContent = computerWins;
   totalRoundsPlayedDisplay.textContent = RoundsPlayed;
  //  return "loose"
 }
 else if ( playerChoice === "scissors" && computerChoice === "paper")
 {
   alert("Scissors beat Paper, you win!")
   playerWins = playerWins +1;
   RoundsPlayed = RoundsPlayed +1;
   playerWinDisplay.textContent = playerWins;
   totalRoundsPlayedDisplay.textContent = RoundsPlayed;
  //  return "win"
 }
 gameOver()
 }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function gameOver()
{ 
if(playerWins === parseInt(totalWins)) 
 {
    alert("You won !!! Congratulations");
   playerWinDisplay.textContent = 0;
   totalRoundsPlayedDisplay.textContent = 0;
   computerWinDisplay.textContent = 0;
   tieDisplay.textContent = 0;
   totalWinsDisplay.textContent= 0;
   rockSelection.removeEventListener('click', addRockEvent);
   paperSelection.removeEventListener('click', addPaperEvent);
   scissorsSelection.removeEventListener('click', addScissorsEvent);
 }
 else if(computerWins === parseInt(totalWins) )
 {
  alert("You loose, you didn't choose wisely")
   playerWinDisplay.textContent = 0;
   totalRoundsPlayedDisplay.textContent = 0;
   computerWinDisplay.textContent = 0;
   tieDisplay.textContent = 0;
   totalWinsDisplay.textContent= 0;
   rockSelection.removeEventListener('click', addRockEvent);
   paperSelection.removeEventListener('click', addPaperEvent);
   scissorsSelection.removeEventListener('click', addScissorsEvent);
 }
}