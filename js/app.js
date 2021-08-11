'use strict';

// humburger-menu
$('.nav-toggle').on('click', function() {
    $('.nav-toggle, .nav-list, .title-toggle').toggleClass('show');
});

// dropdown-menu
$(function () {
    $('#nav-list dt').click(function () {
        $('#nav-list dd').slideToggle();
    });
});
