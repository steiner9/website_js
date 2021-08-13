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


// form of contact.html
window.addEventListener('load', function () {
    let textarea = document.getElementById('message');

    let maxTextNum = textarea.getAttribute('maxlength');

    let textMessage = document.createElement('div');
    let parent = textarea.parentElement;
    parent.insertBefore(textMessage, textarea);

    textarea.addEventListener('keyup', function() {
        let currentTextNum = textarea.value.length;
        if (currentTextNum === 0 || currentTextNum === 1) {
            textMessage.innerHTML = '<p>Now you wrote ' + String(currentTextNum) + ' character. <br><p>You can write another ' + String(maxTextNum - currentTextNum) + 'characters.</p>'
        } else {
            textMessage.innerHTML = '<p>Now you wrote ' + String(currentTextNum) + ' characters. <br><p>You can write another ' + String(maxTextNum - currentTextNum) + 'characters.</p>'};

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
