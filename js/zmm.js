$(".x-menu").click(function () {
    $(".nav-opt").slideToggle("fast");
});

$(".s1, .s2").click(function () {
    $(".nav-opt").slideUp("fast");
});

$('.show-7ktsp').click(function() {
    $('.xpedia7ktsp-desc').slideDown();
    $('.show-7ktsp').hide();
    $('.hide-7ktsp').show();
});

$('.hide-7ktsp').click(function() {
    $('.xpedia7ktsp-desc').slideUp();
    $('.hide-7ktsp').hide();
    $('.show-7ktsp').show();
});

$('.show-7k13').click(function() {
    $('.xpedia7k13-desc').slideDown();
    $('.show-7k13').hide();
    $('.hide-7k13').show();
});

$('.hide-7k13').click(function() {
    $('.xpedia7k13-desc').slideUp();
    $('.hide-7k13').hide();
    $('.show-7k13').show();
});