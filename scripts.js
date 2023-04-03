
let results =document.querySelector('.results');

let playerResults = document.querySelector('#playerResult');
let computerResults = document.querySelector('#computerResult');
  
let choices=['Rock' , 'Paper' , 'Scissor'];


const buttons = document.querySelectorAll('#button');
let playerSelection = '';

buttons.forEach(button => {
  button.addEventListener('click',() =>{
    playerSelection = button.textContent;
    game();
  });
}); 


function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
    }

    let playerScore= 0;
    let computerScore= 0;
    
 
     
 function playRound(){
  
    let computerSelection = getComputerChoice();
    if((computerSelection==choices[0] && playerSelection==choices[0])||
        (computerSelection==choices[1] && playerSelection==choices[1])||
        (computerSelection==choices[2] && playerSelection==choices[2])
      ){
        playerResults.textContent=`you chose: ${playerSelection}`;
        computerResults.textContent=`computer chose: ${computerSelection}`;
        document.querySelector('.playerPoints').textContent = ++playerScore;
        document.querySelector('.computerPoints').textContent = ++computerScore;
        results.textContent=` Tie, you both chose ${computerSelection}`;
      }else if(
        (computerSelection==choices[0] && playerSelection==choices[1]) ||
        (computerSelection==choices[2] && playerSelection==choices[0]) ||
        (computerSelection==choices[1] && playerSelection==choices[2])
        ){
            playerResults.textContent=`you chose: ${playerSelection}`;
            computerResults.textContent=`computer chose: ${computerSelection}`;
            results.textContent=`you win! ${playerSelection} beats ${computerSelection}`;
            document.querySelector('.playerPoints').textContent = ++playerScore;
            document.querySelector('.computerPoints').textContent = computerScore;
        }else if(
          (computerSelection==choices[1] && playerSelection==choices[0]) ||
          (computerSelection==choices[0] && playerSelection==choices[2]) ||
          (computerSelection==choices[2] && playerSelection==choices[1])
        ){
            playerResults.textContent=`you chose: ${playerSelection}`;
            computerResults.textContent=`computer chose: ${computerSelection}`;
            results.textContent=`you lose! ${computerSelection} beats ${playerSelection}`;
            document.querySelector('.playerPoints').textContent = playerScore;
            document.querySelector('.computerPoints').textContent = ++computerScore;
        }         
 }
   
 function game(){
  playRound();
  if(`${playerScore}`>4){
    alert('Congrats, you won! want to play again?');
    document.location.reload();
    }else if(`${playerScore}`>4 &&`${computerScore}`>4){
      alert("it's a tie!");
      document.location.reload();
    }
    else if(`${computerScore}`>4){
      alert('Better luck next time, you lost! want to play again?');
      document.location.reload();
    }
  }      







