const arrowBtn = Array.from(document.querySelectorAll(".arrow-btn"));

arrowBtn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        console.log("I clicked")
    })
});


