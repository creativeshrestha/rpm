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
    // var headerHeight = $(".header").height();
    // var heightMain = $(window).height() - headerHeight ;
    // $(".isotopebanner").css({height: heightMain});

});


$(document).ready(function() {






    // click to scroll div atGlance
    $('a[href*="#atGlance"]').on('click', function (e) {
        var ccHeight = $("header").height();
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#atGlance").offset().top - ccHeight
        }, 500, 'linear');

        $('#megamenu').hide();
        $('.navbtn').removeClass('active');
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