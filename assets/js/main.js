// CSS only, js only for adding classes, animation purposes only...I'm lazy :)
console.log("Hello World");
$(window).on("load", function() {
  $(".loader-wrapper").fadeOut(1800);
});
$(document).ready(function () {
  setTimeout(function () {
    $(".circle").addClass("is-in-view");
  }, 2000);
  setTimeout(function () {
    $(".moon").addClass("is-moon-in-the-sky");
  }, 2500);
  setTimeout(function () {
    $(".blockchain").addClass("is-in-view");
  }, 2000);
  setTimeout(function () {
    $(".b_chain").addClass("is-in-view");
  }, 2500);
  setTimeout(function () {
    $(".light_mode").addClass("light_image");
  }, 2000);
  setTimeout(function () {
    $(".margin_nav_load").addClass("margin_nav_onload");
  }, 1800);
  setTimeout(function () {
    $(".dev_text").addClass("bg_text");
  }, 1800);

 
});

$('.circle').on('click', function () {
  // console.log("clicked");
  var element = document.body;
  element.classList.toggle("dark-mode");
  $(".moon").toggleClass("moon_is_on");
  $(".dark_image").toggleClass("dark_image_view");
  $(".light_image").toggleClass("light_image_view");
  $(".text_light").toggleClass("text_dark")
  $(".bg_text").toggleClass("bg_text_dark");
  

});

$('.blockchain').on('click', function () {
  //console.log("clicked");
  var element = document.body;
  element.classList.toggle("chain_mode");
});



