let Rock = document.querySelector('.Rock');
let Paper = document.querySelector('.Paper');
let Scissor = document.querySelector('.Scissor');
/* 
document.createElement('p');
let Results = document.querySelector('.results');
Results.appendChild('p');
*/  


let choices=['Rock' , 'Paper' , 'Scissor'];



 


 function computerPlay(){

        return  choices[Math.floor(Math.random()*3)];
};




let playerChoice0 = Rock;
playerChoice0.addEventListener('click',function(){
    computerPlay;
    let playerCount=0;
    let computerCount=0;
    document.querySelector('#playerResult').textContent= `you chose: ${choices[0]}`;
    document.querySelector('#computerResult').textContent = `the computer chose: ${computerPlay()}`;
    if(computerPlay===choices[0]){
        document.querySelector('.playerPoints').textContent=(`player scores: ${playerCount++}`);
        document.querySelector('.computerPoints').textContent=(`computer scores:  ${computerCount++}`);
    }else if(computerPlay===choices[1]){
        document.querySelector('.playerPoints').textContent=(` player scores: ${playerCount}`);
        document.querySelector('.computerPoints').textContent=(` computer scores: ${computerCount++}`);
    } 
    else if(computerPlay===choice[2]){
        document.querySelector('.playerPoints').textContent=(` player scores: ${playerCount++}`);
        document.querySelector('.computerPoints').textContent=(` computer scores: ${computerCount}`);
    } 
});



 /*rock.addEventListener('click', function(){
    document.querySelector('#computerResult').textContent = `the computer chose: `+`${computerPlay()}`;
});*/





/*
Paper.addEventListener('click', function(){
    document.querySelector('#computerResult').textContent = `the computer chose: `+`${computerPlay()}` 
});

 let playerChoice2 = Scissor.addEventListener('click', function(){
    document.querySelector('#playerResult').textContent= `you chose: ${choices[2]}`;
});

Scissor.addEventListener('click', function(){
    document.querySelector('#computerResult').textContent = `the computer chose:`+`${computerPlay()}` 
});
*/