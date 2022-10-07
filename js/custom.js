jQuery(function($) {
    $(document).ready(function() {
        $(function() {
            $('.flow-box .list-items').slick({
                variableHeight: true,
                centerMode: true,
                centerPadding: '90px',
                slidesToShow: 3,
                responsive: [
                    {
                        breakpoint: 810,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '90px',
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        });

        // scroll top
        $(function() {
            if ($('.header').length) {
                var scrollTrigger = 300; // px
                    showMenu = function () {
                        var scrollTop = $(window).scrollTop();
                        if (scrollTop > scrollTrigger) {
                            $('.header').addClass('is_active');
                        } else {
                            $('.header').removeClass('is_active');
                        }
                    };
                    showMenu();
                $(window).on('scroll', function () {
                    showMenu();
                });
            }
        });

        //scroll
        $(function() {
            $('.faq-box h3').click(function() {
                $(this).toggleClass('is_active');
                $(this).next().slideToggle();
            });
        });
        
        //scroll
        $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                $('body').removeClass('is_active');
                var target = $(this.hash);
                var h = $('.header').height();
                target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - h
                    }, 1000);
                    return false;
                }
            });
        });

        
    });
});