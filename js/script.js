var btn = $('#button');
var btn1 = $('#hamburger');

$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        btn.addClass('show');
        btn1.addClass('hide-hamburger')

    } else {
        btn.removeClass('show');
        btn1.removeClass('hide-hamburger')
    }
});

// btn.on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: 0
//     }, '300');
// });


 /* Mobile navigation */
 $('.js--nav-icon').click(function () {
    var row = $('.js--nav-row');
 var nav = $('.js--main-nav');
 var icon = $('.js--nav-icon i');

 nav.slideToggle(200);

 if (icon.hasClass('ion-navicon-round')) {
     row.addClass('nav-row');
     icon.addClass('ion-close-round');
     icon.removeClass('ion-navicon-round');
 } else {
     icon.addClass('ion-navicon-round');
     row.removeClass('nav-row');
     icon.removeClass('ion-close-round');
 }
 });
 