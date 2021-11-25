const colors = ["red", "yellow", "green", "blue", "white", "orange", "cyan"];

const background = document.querySelector(".container");
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let randomNumber = Math.floor(Math.random() * colors.length);
    background.style.backgroundColor = colors[randomNumber];
    color.textContent= colors[randomNumber];
    color.style.color= colors[randomNumber];
})



