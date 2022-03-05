//to tooggle between dark and light mode
const toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener("click", ()=>{
    changeIcon(toggleBtn)
})

function changeIcon(btn){
    let rootEl = document.body;
    rootEl.classList.toggle("dark-mode")
    if(btn.classList.contains("fa-moon")){
        // console.log("dark mode ON")
        btn.classList.remove("fa-moon")
        btn.classList.toggle("fa-sun")
    }
    else if(btn.classList.contains("fa-sun")){
        btn.classList.toggle("fa-moon")
        btn.classList.remove("fa-sun")
        // console.log("light mode ON")
        
    }

}
