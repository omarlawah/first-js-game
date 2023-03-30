let rock = document.querySelector('.Rock');
let paper = document.querySelector('.Paper');
let scissors = document.querySelector('.Scissor');

let choices=[rock, paper, scissors];

function computerPlay(){
    Math.trunc(Math.random()*3);
}