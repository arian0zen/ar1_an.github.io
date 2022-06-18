// CSS only, js only for adding classes, animation purposes only...I'm lazy :)
console.log("Hello World");
$(document).ready(function () {
  setTimeout(function () {
    $(".circle").addClass("is-in-view");
  }, 550);
  setTimeout(function () {
    $(".moon").addClass("is-moon-in-the-sky");
  }, 1150);
  setTimeout(function () {
    $(".blockchain").addClass("is-in-view");
  }, 550);
  setTimeout(function () {
    $(".b_chain").addClass("is-in-view");
  }, 1150);

});

$('.circle').on('click', function () {
  // console.log("clicked");
  var element = document.body;
  element.classList.toggle("dark-mode");
  $(".moon").toggleClass("moon_is_on");
});

$('.blockchain').on('click', function () {
  // console.log("clicked");
  var element = document.body;
  element.classList.toggle("chain_mode");
});
