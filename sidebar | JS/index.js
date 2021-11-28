

const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebarShow = document.querySelector(".sidebar");
const sidebarClose = document.querySelector(".sidebar-close");


sidebarToggle.addEventListener("click", function(){
    // alert("Clicked")
    sidebarShow.classList.toggle("sidebar-show");
})

sidebarClose.addEventListener("click", function(){
    sidebarShow.classList.toggle("sidebar-show");
})