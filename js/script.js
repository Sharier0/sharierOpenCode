//======= Nav Bar Position Sticky start=========
let main_menu = document.querySelector('.main_menu');


window.addEventListener('scroll',function(){

    let scrolling = this.scrollY

if(scrolling > 100){
    main_menu.classList.add('sticky')
}
else{
    main_menu.classList.remove('sticky')
}
//======= Nav Bar Position Sticky End=========


})
// ============= Scroll Head Part Start ==============
let menu_part = document.querySelector('#menu_part');

window.addEventListener('scroll',function(){

    let scrolling = this.scrollY

if(scrolling > 300){
    menu_part.classList.add('menu_stick')
}else{
    menu_part.classList.remove('menu_stick')
}
})
// --------------Scroll Head Part End ---------------

// ============= Slider Part Start ==============

// $('.client_feedback').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     dots: false,
//     arrows: false,
//   });
// --------------Slider Part End ---------------

// ============= Counter Part Start ==============

$('.counter').counterUp({
    delay: 10,
    time: 1000,
});

$('.counter_2').counterUp({
    delay: 10,
    time: 1000,
});

$('.counter_3').counterUp({
    delay: 10,
    time: 1000,
});

$('.counter_4').counterUp({
    delay: 10,
    time: 1000,
});

// --------------Counter Part End ---------------

// ============= back to top button Start ==============//
let top_button  =document.querySelector(".top_button")
window.addEventListener("scroll", ()=>{
  let scrolling  = this.scrollY;
  console.log(scrolling)
  if(scrolling >100){
    top_button.classList.add("go_top");
  }
  else{
    top_button.classList.remove("go_top");
  }
})
top_button.addEventListener('click',function(){
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })
})
// -------- Back to top button end -------//
