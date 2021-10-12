
let count = 0;
const counter = document.querySelector(".counter");
const btns = document.querySelectorAll(".btns")

btns.forEach(function(btn){
    console.log(btn);
    btn.addEventListener("click", function(event){
        console.log(event.currentTarget.classList)
        const styles = event.currentTarget.classList;
        if(styles.contains("btns-increase")){
            count++;
            counter.textContent = count;
            if(count>0){
                counter.style.color="green";
            }
            
        }
        else if(styles.contains("btns-decrease")){
            count--;
            counter.textContent = count;
            if(count<0){
                counter.style.color="red";
            }
        }
        else{
            count=0;
            counter.textContent = count;
        }
        if(count === 0){
            counter.style.color="black";
        }

})
})





