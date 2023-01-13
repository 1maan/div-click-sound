let Pig = document.getElementById("pig")
let Hourse = document.getElementById("hourse")
let Cow = document.getElementById("cow")
let Lamb = document.getElementById("lamb")

let PigAudio = new Audio("/pig.mp3")
let HoursegAudio = new Audio("/horses.mp3")
let CowAudio = new Audio("/cow.mp3")
let LambAudio = new Audio("/lamb.mp3")

Pig.addEventListener("click",()=>{
    PigAudio.play();
    HoursegAudio.pause();
    CowAudio.pause();
    LambAudio.pause();

})
Hourse.addEventListener("click",()=>{
    PigAudio.pause();
    HoursegAudio.play();
    CowAudio.pause();
    LambAudio.pause();
})
Cow.addEventListener("click",()=>{
    PigAudio.pause();
    HoursegAudio.pause();
    CowAudio.play();
    LambAudio.pause();
})
Lamb.addEventListener("click",()=>{
    PigAudio.pause();
    HoursegAudio.pause();
    CowAudio.pause();
    LambAudio.play();
})