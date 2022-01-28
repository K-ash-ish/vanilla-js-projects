
const ratingStars = [...document.querySelectorAll(".star")];
const userRating  = document.querySelector(".user-given");

function giveRatings(stars){
    const starClassActive = "star fas fa-star";
    const starClassInActive = "star far fa-star";
    const starLength = stars.length;
    let i;
    
    stars.map((star)=>{
        let rating;
        star.addEventListener('click', (e)=>{
            i = stars.indexOf(star); //setting index each time for current element
            if(star.className === starClassInActive){
                for(i ; i>=0 ;--i){
                    stars[i].className = starClassActive;
                    rating = e.currentTarget.dataset.rating;
                }
            }
            else{
                for(i; i < starLength ; i++){
                    // console.log(stars[i])
                    stars[i].className = starClassInActive;
                    rating = e.currentTarget.dataset.rating -1;
                }
            }
            // console.log(e.currentTarget.dataset.rating)
            userRating.textContent =  "User Given "+rating +" stars "
        });
    } )
}
giveRatings(ratingStars);

