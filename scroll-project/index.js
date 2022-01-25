const date = document.getElementById("date").textContent = new Date().getFullYear();
const navBar = document.getElementsByTagName('nav');
const scrollTop = document.querySelector(".scroll-to-top")

window.addEventListener('scroll', function(){
    if(window.scrollY > 80){
        navBar[0].classList.add("nav-bar-scroll")
        scrollTop.classList.add("show-scroll-to-top")
    }
    else{
        navBar[0].classList.remove("nav-bar-scroll")
        scrollTop.classList.remove("show-scroll-to-top")
    }

});

const scrollLinks = document.querySelectorAll(".scroll-links");

scrollLinks.forEach( function(links){
    links.addEventListener('click', function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        console.log(id)
        const el = document.getElementById(id);
        const navHeight = navBar[0].getBoundingClientRect().height;

        let position = el.offsetTop-navHeight;
        window.scrollTo({
            left:0, top: position,
        });
    })
})

