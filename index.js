console.log("Hello World");
$(document).ready(function () {
  setTimeout(function () {
    $(".moon").addClass("is-moon-in-the-sky");
  }, 250);
});

$(".moon").on("click", function () {
  console.log("you clicked on moon icon");
  $(".moon").addClass("moon_is_on");
  $("body").addClass("body_dark");
});

$(".moon").on("click", function () {
  console.log("you clicked on moon icon");
  $(".moon").addClass("moon_is_on");
  $("body").addClass("body_dark");
});

$(".text").on("click", function () {
  console.log("you clicked on text");
  $(".moon").removeClass("moon_is_on");
  $("body").removeClass("body_dark");
});
