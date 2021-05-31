
var nav = document.querySelector(".navbar");
var navBtn = document.querySelector(".togglemenu");

navBtn.addEventListener("click", toggleMenu)

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
  $("html, body").animate({scrollTop:0});
});



