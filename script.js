let tom1=new Audio("./sounds/tom-1.mp3");
let tom2=new Audio("./sounds/tom-2.mp3");
let tom3= new Audio("./sounds/tom-3.mp3");
let tom4=new Audio("./sounds/tom-4.mp3");
let crash = new Audio("./sounds/crash.mp3");
let kickBass=new Audio("./sounds/kick-bass.mp3");
let snare = new Audio("./sounds/snare.mp3");

//let audio = new Audio("./sounds/tom-1.mp3");
// audio.paly();


document.querySelector(".w").addEventListener("click",()=>
{
    tom1.play();
});

document.querySelector(".a").addEventListener("click",()=>
{
    tom2.play();
});

document.querySelector(".s").addEventListener("click",()=>
{
    tom3.play();
});

document.querySelector(".d").addEventListener("click",()=>
{
    tom4.play();
});

document.querySelector(".j").addEventListener("click",()=>
{
    crash.play();
});

document.querySelector(".k").addEventListener("click",()=>
{
    kickBass.play();
});

document.querySelector(".l").addEventListener("click",()=>
{
    snare.play();
});