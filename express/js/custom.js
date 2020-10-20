// JavaScript Document
$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    // var parallax = function () {
    //     $(window).stellar();
    // };

    // $(function () {
    //     parallax();
    // });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    // $('#projects').waitForImages(function () {
    //     var $container = $('.portfolio_container');
    //     $container.isotope({
    //         filter: '*',
    //     });

    //     $('.portfolio_filter a').click(function () {
    //         $('.portfolio_filter .active').removeClass('active');
    //         $(this).addClass('active');

    //         var selector = $(this).attr('data-filter');
    //         $container.isotope({
    //             filter: selector,
    //             animationOptions: {
    //                 duration: 500,
    //                 animationEngine: "jquery"
    //             }
    //         });
    //         return false;
    //     });

    // });
    
    $("#project_plms").animatedModal({
        modalTarget: 'animatedModal_plms'
    });

    $("#project_payments").animatedModal({
        modalTarget: 'animatedModal_payments'
    });

    $("#project_valkart").animatedModal({
        modalTarget: 'animatedModal_valkart'
    });


    // validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "This field is required"
                },
                message: {
                    required: "This field is required"
                }
            },
            submitHandler: function (form) {
                var data={
                        message: $('#message').val(),
                        email: $('#email').val(),
                        name: $('#name').val(),
                        phone: $('#phone').val(),
                        }
                $.ajax({
                    type: "POST",
                    url: "/contact_me",
                    data: data,
                    success: function(data) {
                      $('#success').css('display','block');
                     },
                      error: function(data) {
                        console.log(data)
                          $("#error").css('display','block');
                      }
                  }) 
            }
        });

    // });
    $(function(){

        new Typed(".typed", {
            /**
            * @property {array} strings strings to be typed
            * @property {string} stringsElement ID of element containing string children
            */
            strings: ['Software Developer', 'Backend Engineer', 'Web Developer'],
            stringsElement: null,
    
            /**
            * @property {number} typeSpeed type speed in milliseconds
            */
            typeSpeed: 10,
    
            /**
            * @property {number} startDelay time before typing starts in milliseconds
            */
            startDelay: 10,
    
            /**
            * @property {number} backSpeed backspacing speed in milliseconds
            */
            backSpeed: 5,
    
            /**
            * @property {boolean} smartBackspace only backspace what doesn't match the previous string
            */
            smartBackspace: true,
    
            /**
            * @property {boolean} shuffle shuffle the strings
            */
            shuffle: false,
    
            /**
            * @property {number} backDelay time before backspacing in milliseconds
            */
            backDelay: 1500,
    
            /**
            * @property {boolean} fadeOut Fade out instead of backspace
            * @property {string} fadeOutClass css class for fade animation
            * @property {boolean} fadeOutDelay Fade out delay in milliseconds
            */
            fadeOut: false,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500,
    
            /**
            * @property {boolean} loop loop strings
            * @property {number} loopCount amount of loops
            */
            loop: true,
            loopCount: Infinity,
    
            /**
            * @property {boolean} showCursor show cursor
            * @property {string} cursorChar character for cursor
            * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
            */
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true,
    
            /**
            * @property {string} attr attribute for typing
            * Ex: input placeholder, value, or just HTML text
            */
            attr: null,
    
            /**
            * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
            */
            bindInputFocusEvents: false,
    
            /**
            * @property {string} contentType 'html' or 'null' for plaintext
            */
            contentType: 'html',
    
            /**
            * All typing is complete
            * @param {Typed} self
            */
            onComplete: (self) => {},
    
            /**
            * Before each string is typed
            * @param {number} arrayPos
            * @param {Typed} self
            */
            preStringTyped: (arrayPos, self) => {},
    
            /**
            * After each string is typed
            * @param {number} arrayPos
            * @param {Typed} self
            */
            onStringTyped: (arrayPos, self) => {},
    
            /**
            * During looping, after last string is typed
            * @param {Typed} self
            */
            onLastStringBackspaced: (self) => {},
    
            /**
            * Typing has been stopped
            * @param {number} arrayPos
            * @param {Typed} self
            */
            onTypingPaused: (arrayPos, self) => {},
    
            /**
            * Typing has been started after being stopped
            * @param {number} arrayPos
            * @param {Typed} self
            */
            onTypingResumed: (arrayPos, self) => {},
    
            /**
            * After reset
            * @param {Typed} self
            */
            onReset: (self) => {},
    
            /**
            * After stop
            * @param {number} arrayPos
            * @param {Typed} self
            */
            onStop: (arrayPos, self) => {},
    
            /**
            * After start
            * @param {number} arrayPos
            * @param {Typed} self
            */
            onStart: (arrayPos, self) => {},
    
            /**
            * After destroy
            * @param {Typed} self
            */
            onDestroy: (self) => {}
        });
    });
    });

});





