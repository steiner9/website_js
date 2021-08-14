'use strict';

// humburger-menu
$('.nav-toggle').on('click', function() {
    $('.nav-toggle, .nav-list, .title-toggle, .yt_search, .contact').toggleClass('show');
});

// dropdown-menu
$(function () {
    $('#nav-list dt').click(function () {
        $('#nav-list dd').slideToggle();
    });
});

// css animation
const CLASSNAME = "-visible";
const TIMEOUT = 1500;
const DELAY = 100;
const $target1 = $(".title-toggle.show");

setInterval(() => {
  $target1.addClass(CLASSNAME);
  setTimeout(() => {
    $target1.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT * 2);

