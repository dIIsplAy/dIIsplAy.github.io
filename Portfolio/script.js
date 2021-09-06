
var nav = document.querySelector(".navbar");
var navBtn = document.querySelector(".togglemenu");

navBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (nav.classList.contains("showNav")) {
    nav.classList.remove("showNav");
  } else {
    nav.classList.add("showNav");
  }
}

// BURGER MENNU JS
var Menu = {
  
    el: {
      ham: $('.menu'),
      menuTop: $('.menu-top'),
      menuMiddle: $('.menu-middle'),
      menuBottom: $('.menu-bottom')
    },
    
    init: function() {
      Menu.bindUIactions();
    },
    
    bindUIactions: function() {
      Menu.el.ham
          .on(
            'click',
          function(event) {
          Menu.activateMenu(event);
          event.preventDefault();
        }
      );
    },
    
    activateMenu: function() {
      Menu.el.menuTop.toggleClass('menu-top-click');
      Menu.el.menuMiddle.toggleClass('menu-middle-click');
      Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
    }
  };
  Menu.init();

function closeMenuAndBurger (){
  toggleMenu();
  Menu.activateMenu()
}

// BIG TITLE PARRALAX

let title = document.getElementById('title');
window.addEventListener('scroll', function(){
var value =  window.scrollY;
title.style.top = value * 1 + 'px';
});

// BTN BACK TO TOP JS 
$backtop = $('.back-top');
$backtop.hide();

$(window).on('scroll', function() {
  if ($(this).scrollTop() > 200) {
    $backtop.fadeIn();
  } else {
    $backtop.fadeOut();
  }
});

$backtop.on('click', function(e){
  $("html, body").animate({scrollTop:0}, 100);
});

// BTN HOME SCROLL

$btnScroll = $('.btn-scroll');
$btnScroll.on('click', function(e){
$('html, body').animate({
  scrollTop: $("#anchor-b1").offset().top
});
});

// SCROLLL REVEAL FOR LOVE

ScrollReveal().reveal('.right-block', {
  delay: 300,
  duration:450,
  // reset:true,
  easing: 'ease-in',
  distance: '40px',
  origin: 'right',
});
ScrollReveal().reveal('.left-block', {
  delay: 600,
  duration:600,
  // reset:true,
  easing: 'ease-in',
  origin: 'right',
  distance: '20px',
});
ScrollReveal().reveal('.reveal-title-about', {
  delay: 700,
  duration:400,
  // reset:true,
  easing: 'ease-in',
  origin: 'right',
  distance: '20px',
});

ScrollReveal().reveal('#title-about',{
  delay:500,
  duration:400,
  easing: 'ease-in',
  origin:'right',
  scale: 1.5,
  distance: '6em',
});
ScrollReveal().reveal('#text-about-me',{
  delay:800,
  duration:400,
  easing: 'ease-in',
});
// ScrollReveal().reveal('.reveal-title-icons', {
//   delay: 1500,
//   duration:400,
//   reset:true,
//   easing: 'ease-in',
//   origin: 'bottom',
//   distance: '60px',
// });


// try to load   SOBER THEME

var isSombre = true;
function changeCss(){
var stylesheet = document.getElementById('stylesheet');
if(isSombre === true){
   stylesheet.href='soberstyle.css';
}else {
    stylesheet.href='soberstyle.css';
}
}

function changeCss(){
         var css = document.getElementById("stylesheet").href;      
         var etat = css.endsWith("style.css");
         if(etat==true){
                 document.getElementById("stylesheet").setAttribute("href", "dark.css"); 
         } else {
             document.getElementById("stylesheet").setAttribute("href", "style.css");
           }
}





    