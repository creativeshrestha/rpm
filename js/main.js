window.addEventListener('load', AOS.refresh);
AOS.init();

function myDeviceFunction() {
    var mywidth = window.innerWidth;
    if (mywidth < 450) {
        console.log("mywidth");
    } else {
        $(window).resize(function() {
            location.reload();
        });
    }
}

// $(document).mouseup(function (e){
//     var container = $("#megamenu");
//     if (!container.is(e.target)
//         && container.has(e.target).length === 0){
//         container.hide();
//         //$("#navbtn").removeClass("active");
//     }
// });

$(window).on('load', function() {
    var headerHeight = $(".header").height();
    var heightMain = $(window).height() - headerHeight ;

    if ($(window).width() < 768) {
        $(".isotopebanner").css({height: heightMain});
        $(".megamenu").css({maxHeight: heightMain});

    }
});


$(document).ready(function() {

    $('#atGlance .rounded-card--inner span').counterUp({
        delay: 10,
        time: 1000
    });

    // click to scroll navigation
    function hidenav(){
        $('#megamenu').hide();
        $('.navbtn').removeClass('active');
    }

    $('a[href*="#atGlance"]').on('click', function (e) {
        var ccHeight = $("header").height();
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#atGlance").offset().top - ccHeight
        }, 500, 'linear');
        hidenav();
    });

    $('a[href*="#messageChairman"]').on('click', function (e) {
        var ccHeight = $("header").height();
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#messageChairman").offset().top - ccHeight
        }, 500, 'linear');
        hidenav();
    });

    $('a[href*="#messageCEO"]').on('click', function (e) {
        var ccHeight = $("header").height();
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#messageCEO").offset().top - ccHeight
        }, 500, 'linear');
        hidenav();
    });

    $('a[href*="#partners"]').on('click', function (e) {
        var ccHeight = $("header").height();
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#partners").offset().top - ccHeight
        }, 500, 'linear');
        hidenav();
    });

    $('a[href*="#medicalServices"]').on('click', function (e) {
        var ccHeight = $("header").height();
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#medicalServices").offset().top - ccHeight
        }, 500, 'linear');
        hidenav();
    });

    $('a[href*="#manpowerServices"]').on('click', function (e) {
        var ccHeight = $("header").height();
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#manpowerServices").offset().top - ccHeight
        }, 500, 'linear');
        hidenav();
    });

    $('a[href*="#emergencyServices"]').on('click', function (e) {
        var ccHeight = $("header").height();
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#emergencyServices").offset().top - ccHeight
        }, 500, 'linear');
        hidenav();
    });

    $('a[href*="#supportEvent"]').on('click', function (e) {
        var ccHeight = $("header").height();
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#supportEvent").offset().top - ccHeight
        }, 500, 'linear');
        hidenav();
    });

    $('a[href*="#schoolHealthcare"]').on('click', function (e) {
        var ccHeight = $("header").height();
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#schoolHealthcare").offset().top - ccHeight
        }, 500, 'linear');
        hidenav();
    });

    $('a[href*="#healthServices"]').on('click', function (e) {
        var ccHeight = $("header").height();
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#healthServices").offset().top - ccHeight
        }, 500, 'linear');
        hidenav();
    });

    $('a[href*="#facilitiesManagement"]').on('click', function (e) {
        var ccHeight = $("header").height();
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#facilitiesManagement").offset().top - ccHeight
        }, 500, 'linear');
        hidenav();
    });

    $('a[href*="#mobileClinics"]').on('click', function (e) {
        var ccHeight = $("header").height();
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#mobileClinics").offset().top - ccHeight
        }, 500, 'linear');
        hidenav();
    });




});

$(window).scroll(function() {
    var cHeight = $("header").height() + 600;
    var scrollDistance = $(window).scrollTop() + cHeight;
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.megamenu a.active').removeClass('active');
            $('.megamenu a').eq(i).addClass('active');
        } else{
            $('.megamenu a').eq(i).removeClass('active');
        }
    });
}).scroll();


// $('body').on('click','.dropdown-icon',function(e){
//     // $(this).parent().find('.menu-dropdown').fadeToggle(300);
//     $('#megamenu').fadeToggle(300);
//     // $('.menu-dropdown').not($(this).siblings()).hide();
//     e.stopPropagation();
//     $('html').click(function() {
//         $('.menu-dropdown').hide();
//     });
// });

$('.btn-link').on('click',function(){
    $('.card-header').removeClass('togglered');
    var parent=$(this).parents('.card-header');
    parent.toggleClass('togglered');
})


// $('.accordion').on('click',function () {
//     var name= $(this).data('name');
//     console.log(name);
//     $(name).slideToggle();
// })

$('body').on('click','.accordion',function(e){
    // $(this).parent().find('.menu-dropdown').fadeToggle(300);

    var name='#'+ $(this).data('name');
    console.log(name);
    // $('.desktophide').hide();
    //$(this).next().hide();
    // console.log(this, "this");
    $(name).toggleClass('hidetoggle').slideToggle();

    e.stopPropagation();

});

