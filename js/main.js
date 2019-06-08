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

$(document).mouseup(function (e){
    var container = $("#megamenu, .navbtn");
    if (!container.is(e.target)
        && container.has(e.target).length === 0){
        container.hide();
        $("#navbtn").removeClass("active").show();
    }
});

$(window).on('load', function() {
    var headerHeight = $(".header").height();
    var heightMain = $(window).height() - headerHeight;

    if ($(window).width() < 768) {
        $(".desktopMenu").css({'minHeight': heightMain, 'height': heightMain,'overflow-y':hidden});
    }
});

$(document).ready(function() {
    $('#profilePDF').on('click', function (e) {
        e.preventDefault();
        window.location.href = window.location.pathname + "/pdf/RPM%20Corporate%20Profile.pdf";
    });

    var headerHeight = $(".header").height();
    $(".isotopebanner").css({'margin-top': headerHeight});

    $('#atGlance .rounded-card--inner span em, .numbersCount').counterUp({
        delay: 10,
        time: 1000
    });

    // click to scroll navigation
    function hidenav(){
        $('#megamenu').hide();
        $('.navbtn').removeClass('active');
    }

    //mobile section
    $('#megamenu a').on('click', function (e) {
        var link = $(this).attr('href');
        e.preventDefault();
        var s = link.substr(1);
        if ($(window).width() < 427) {
            if ($(`[data-name="${s}"]`).next().hasClass('show')) {
                // console.log('already open')

                setTimeout(function () {
                    $('html,body').animate({
                        scrollTop: $(`[data-name="${s}"]`).offset().top - headerHeight
                    }, 500, 'linear');
                    AOS.init();

                    $('#atGlance .rounded-card--inner span em, .numbersCount').counterUp({
                        delay: 10,
                        time: 1000
                    });
                }, 500);
            } else {

                $(`[data-name="${s}"]`).trigger('click');
                AOS.init();

                // $('#atGlance .rounded-card--inner span em, .numbersCount').counterUp({
                //     delay: 10,
                //     time: 1000
                // });
            }
        } else {
            // console.log('bigger');
        }
        hidenav();
    });



    //
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

$('.btn-link').on('click',function(){
    $('.card-header').removeClass('togglered');
    var parent=$(this).parents('.card-header');
    parent.toggleClass('togglered');
});

$('.accordion').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    $('.accordion').removeClass('togglered');
    $(this).toggleClass('togglered');
    $('.accordion').find('.minusicon').hide();
    $('.accordion').find('.downicon').show();
    var dataname=$(this).data('name');
    var da="#"+dataname;

    if ($this.next().hasClass('show')) {
        $this.removeClass('togglered');
        $this.next().removeClass('show');
        $this.find('.minusicon').hide();
        $this.find('.downicon').show();
        $this.next().slideUp(350);

        AOS.init();


    } else {
        $this.parent().parent().find('.desktophide').removeClass('show');
        $this.parent().parent().find('.desktophide').slideUp(350);
        $this.next().toggleClass('show');
        $this.find('.minusicon').show();
        $this.find('.downicon').hide();
        $this.next().slideToggle(350);

        AOS.init();



        $('#atGlance .rounded-card--inner span em, .numbersCount').counterUp({
            delay: 10,
            time: 1000
        });

        var ccHeight = $("header").height() + $(this).height() + 16;


        setTimeout(function() {
            AOS.init();
            $('html,body').animate({
                scrollTop: $(da).offset().top - ccHeight
            }, 500, 'linear');
        }, 500);
    }
});