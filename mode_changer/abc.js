// CSS only, js only for adding classes, animation purposes only...I'm lazy :) 
console.log("Hello World");
$(document).ready(function() {
    setTimeout(function() {
      $('.circle').addClass("is-in-view");
    }, 550);
  setTimeout(function() {
    $('.moon').addClass("is-moon-in-the-sky");
  }, 1150);
  setTimeout(function() {
    $('.star').addClass("is-sky-full-of-stars");
  }, 1050);
  setTimeout(function() {
    $('.bench-shadow').addClass("activate-shadow");
  }, 1250);
 
});
