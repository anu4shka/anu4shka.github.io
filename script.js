$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

document.getElementById('blue').onclick = switchBlue;
document.getElementById('crimson').onclick = switchCrimson;
document.getElementById('yellow').onclick = switchYellow;
document.getElementById('purple').onclick = switchPurple;

function switchBlue() {
 document.documentElement.style.setProperty('--color', '#2BA1EB');  
}

function switchCrimson() {
  document.documentElement.style.setProperty('--color', 'crimson');
}

function switchYellow() {
   document.documentElement.style.setProperty('--color', '#faa700');
}

function switchPurple() {
   document.documentElement.style.setProperty('--color', '#5A47A9');
}

/*day-night*/

const daynight=document.querySelector(".theme");

daynight.addEventListener("click",() =>{
  daynight.querySelector("i").classList.toggle("fa-moon");
  daynight.querySelector("i").classList.toggle("fa-sun");
  document.body.classList.toggle("light")
})

window.addEventListener("load",()=>{
  if(document.body.classList.contains("light")){
    daynight.querySelector("i").classList.add("fa-moon");
  }
  else{
    daynight.querySelector("i").classList.add("fa-sun");
  }
   });

});
