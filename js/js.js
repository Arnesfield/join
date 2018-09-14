// init skrollr
$(function() {
    skrollr.init();
});

// loading
$(document).ready(function() {
    //setTimeout(function() {
    $('#loader-container').remove();
    $('#content').css('visibility','visible');
    $('body').css('overflow-y', 'visible');
    //}, 5000);
});

// smooth scroll
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });
});