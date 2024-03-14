/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* =========================================
                Team
============================================ */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});
/* =========================================
                Progress Bars
============================================ */
$(function(){
    $(".progress-bar").each(function(){
        $(this).animate({
            width:$(this).attr("aria-valuenow")+"%"
        },1000)
    })
})

/* =========================================
                Responsive Tabs
============================================ */
$('#services-tabs').responsiveTabs({
    startCollapse:'accordion'
});

/* =========================================
                Portgolio 
============================================ */
$(window).on('load',function(){
    $("#isotope-container").isotope({

    })

    $("#isotope-filters").on('click','button',function(){
        var filterValue=$(this).attr('data-filter');
        $("#isotope-container").isotope({
            filter:filterValue
    })
        $("isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active')
    })
})
/* =========================================
                Magnifier 
============================================ */
$(function(){
    $("#portfolio-wrapper").magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    })
})

/* =========================================
               Testimonials
============================================ */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* =========================================
              Stats
============================================ */
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});


/* =========================================
              Clients
============================================ */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 6
            }
        }
    });
});


/* =========================================
              Google Map
============================================ */