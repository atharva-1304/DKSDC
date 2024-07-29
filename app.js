// jay gajanan

// navbar Script
const navbar = document.querySelector(".navbar");
const navbrand = document.querySelector(".navbar-brand");
const brandImg = document.querySelector("#brandImg");
const togglerIcon = document.querySelector("#toggler-icon");
const navlinks =  document.querySelectorAll(".nav-link");
const navbody  = document.querySelector("#nav-container");

function updateNavLinkClasses() {
  navlinks.forEach(link => {
    if (window.scrollY > 40) {
      link.classList.add('navlinksScroll');
      link.classList.remove('navlinks');
    } else {
      link.classList.add('navlinks');
      link.classList.remove('navlinksScroll');
    }
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add('navbarScroll');
    navbrand.style.color="black";
    brandImg.src='./images/navbarbrandscroll.png';
    togglerIcon.style.color="black";
    updateNavLinkClasses();
    navbody.classList.remove('navbody');
    navbody.classList.add('navbodyScroll');
    
  }else if(window.scrollY < 40){
    navbar.classList.remove('navbarScroll');
    navbrand.style.color="white";
    brandImg.src='./images/navbarbrandtop.png';
    togglerIcon.style.color="white";
    updateNavLinkClasses();
    navbody.classList.remove('navbodyScroll');
    navbody.classList.add('navbody');


  }
});
// navbar script end
// courses cards start
const card = document.querySelector('.card')
const cardImg=document.querySelector('.cardimg');

  card.addEventListener("mouse")