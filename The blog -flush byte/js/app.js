const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks= document.querySelectorAll('.nav-links li');
    //Toggle nav
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    //animate links
    navLinks.forEach((link, index)=>{
        if(link.style.animation) {
            link.style.animation='';
        }else{
    link.style.animation='navLinkFade 0.5s ease forwards ${index/7 + 2}s';
    console.log(index/7);
        }
    });
    //burger animation
    burger.classList.toggle('toggle');
    });
    
}
navSlide();