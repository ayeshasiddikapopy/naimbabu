window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0 );
})



// Custom mouse 
const  custom = document.querySelector(".custom");
document.addEventListener("mousemove", (e) => {
    custom.style.left = e.pageX + 'px';
    custom.style.top = e.pageY + 'px';
})