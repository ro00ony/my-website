jQuery(function ($) {

    'use strict';

    // Mean menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1199"
    });
    // Sticky navbar
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar-area').addClass('is-sticky');
        } else {
            $('.navbar-area').removeClass('is-sticky');
        }
    });

    // Preloader
    $('body').addClass('pre-loaded');

    // Scrolltop
    $(window).on('scroll', function() {
        if( $(this).scrollTop() > 300 ) {
            $("#scrolltop").addClass("scrolltopactive");
        }
        else {
            $("#scrolltop").removeClass("scrolltopactive");
        }
    });
    $("#scrolltop").on('click', function () {
        $("html").animate({
            scrollTop: 0
        }, 0);
        return false;
    });

    // Navbar
    $("#dot").on("click", function(e) {
        $(this).siblings(".navbar-dots-dropdown").toggleClass("show");
    })
    $('body').on('click', function (e) {
        if (!$('#dot').is(e.target) 
            && $('#dot').has(e.target).length === 0 
            && $('.show').has(e.target).length === 0
        ) {
            $('.navbar-dots-dropdown').removeClass('show');
        }
    });

    // Revolution
    $("#rev_slider_26_1").show().revolution({
        sliderType:"standard",
        sliderLayout:"fullscreen",
        dottedOverlay:"none",
        delay: 9000,
        navigation: {
            keyboardNavigation:"off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation:"off",
            mouseScrollReverse:"default",
            onHoverStop:"on",
            touch:{
                touchenabled:"on",
                touchOnDesktop:"off",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
            arrows: {
                enable:false,
            },
            bullets: {
                enable:true,
                hide_onmobile:false,
                style:"bullet-bar",
                hide_onleave:false,
                direction:"horizontal",
                h_align:"center",
                v_align:"bottom",
                h_offset:0,
                v_offset:30,
                space:5,
                tmp:''
            }
        },
        responsiveLevels:[1240,1024,778,480],
        visibilityLevels:[1240,1024,778,480],
        gridwidth:[1500,1024,778,480],
        gridheight:[868,768,660,450],
        lazyType:"none",
        parallax: {
            type:"scroll",
            origo:"slidercenter",
            speed:2000,
            levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
        },
        shadow:0,
        spinner:"off",
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,
        shuffle:"off",
        autoHeight:"off",
        fullScreenAutoWidth:"off",
        fullScreenAlignForce:"off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "60px",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
            simplifyAll:"off",
            nextSlideOnWindowFocus:"off",
            disableFocusListener:false,
        }
    });

    // NICE SELECT
    $('.select_js').niceSelect();
    
    // Faq-accordion
    $(".faq-accordion-header").on("click", function() {
        $(this).parent(".faq-accordion-item").toggleClass("faq-accordion-item-active").siblings().removeClass("faq-accordion-item-active")
    })

    // Magnific-popup
    $("#video-popup").magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Header-carousel
    var swiper = new Swiper('.header-carousel', {
        loop: true,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
    // Ads Slider  
    $(function() {
        var swiper = new Swiper('.ads-hero', {
            slidesPerView: 1,
            loop: true, 
            autoplay: {
                delay: 8000, 
            },
            centeredSlides: true,
            spaceBetween: 0,
        });
    });

    $(".header-carousel").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    // Testimonial-carousel
    var swiper = new Swiper('.testimonial-carousel', {
        loop: true,
        spaceBetween: 30,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // Partner-carousel
    var swiper = new Swiper('.partner-carousel', {
        slidesPerView: 7,
        loop: true,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {  
            0: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 6,
            },
            1024: {
                slidesPerView: 7,
            }
        },
    });
    $(".partner-carousel").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    // Partner-carousel-two
    var swiper = new Swiper('.partner-carousel-two', {
        slidesPerView: 5,
        loop: true,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {  
            0: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            }
        },
    });
    $(".partner-carousel").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    // Testimonial-carousel-two
    var swiper = new Swiper('.testimonial-carousel-two', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 1500,
        breakpoints: {  
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 5000,
        },
    });
    $(".testimonial-carousel-two").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    // Instructor-carousel
    var swiper = new Swiper('.instructor-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {  
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2,
            },
            1550: {
                slidesPerView: 'auto',
            },
        },
        pagination: {
            el: '.instructor-pagination',
            clickable: true
        },
    });

    var windowTab = $(window).width();
    if(windowTab < 992) {
        $(".instructor-pagination").appendTo(".instructor-carousel");
    }
    $(".instructor-carousel").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    // Mylearn Carousel
    var swiper = new Swiper('.mylearn-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        // speed: 1500,
        // autoplay: {
        //     delay: 5000,
        // },
        breakpoints: {  
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next.leran',
            prevEl: '.swiper-button-prev.leran',
        }
    });
    // Category courses Carousel
    var swiper = new Swiper('.main-courses', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        // speed: 1500,
        // autoplay: {
        //     delay: 5000,
        // },
        breakpoints: {  
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next.course',
            prevEl: '.swiper-button-prev.course',
        }
    });
    // main-spec Carousel
    var swiper = new Swiper('.main-spec', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        // speed: 1500,
        // autoplay: {
        //     delay: 5000,
        // },
        breakpoints: {  
            300: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next.spec',
            prevEl: '.swiper-button-prev.spec',
        }
    });

    // Instagram-carousel
    var swiper = new Swiper('.instagram-carousel', {
        slidesPerView: 7,
        loop: true,
        spaceBetween: 0,
        speed: 1500,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {  
            0: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 7,
            }
        },
    });
    $(".partner-carousel").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    // Header-carousel-two
    var swiper = new Swiper('.header-carousel-two', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1500,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.header-swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });

    // Counter
    $('.counter').counterUp({
        time: 1000
    });

    // Product +/- button
    $(".qu-btn").on("click", function(e) {
        var btn = $(this),
        inp = btn.siblings(".qu-input").val();
        if(btn.hasClass("inc")){
            var i = parseFloat(inp) + 1;
        }
        else {
            if (inp > 1) (i = parseFloat(inp) - 1) < 2 && $(".dec").addClass("deact");
            else i = 1;
        }
        btn.addClass("deact").siblings("input").val(i)
    })

    // Course-details-item
    $(".product-tab-list li").click(function() {
        var tab_modal = $(this).attr("data-product-tab");
        $(this).addClass("active").siblings().removeClass("active");
        $(".summery-info-details-item[data-summery-info-details=" +tab_modal+ "]").addClass("summery-info-details-item-active").siblings().removeClass("summery-info-details-item-active");
    })

    // Course-carousel
    var swiper = new Swiper('.course-carousel', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        speed: 1500,
        breakpoints: {  
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // Popup-gallery
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        }
    });

    // Course-details-item
    $(".product-tab-list li").click(function() {
        var tab_modal = $(this).attr("data-product-tab");
        $(this).addClass("active").siblings().removeClass("active");
        $(".product-tab-information-item[data-product-details-tab=" +tab_modal+ "]").addClass("active").siblings().removeClass("active");
    })

    // Related-product-carousel
    var swiper = new Swiper('.related-product-carousel', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        speed: 1500,
        breakpoints: {  
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // Profile-action-information
    $(".profile-information-tab li").click(function() {
        var tab_modal = $(this).attr("data-profile-information-tab");
        $(this).addClass("active").siblings().removeClass("active");
        $(".profile-information-details-item[data-profile-information-details=" +tab_modal+ "]").addClass("active").siblings().removeClass("active");
    })

    // Chapters In Course Details
    $(".chapters-tab li").click(function() {
        var tab_modal = $(this).attr("data-chapters-tab");
        $(this).addClass("active").siblings().removeClass("active");
        $(".chapters-details-item[data-chapters-details=" +tab_modal+ "]").addClass("active").siblings().removeClass("active");
    })
    // Collapse Classrooms 
    $(document).ready(function () {
        $('.collapse-btn-materials').on('click', function () {
            $(this).toggleClass('active'); 
            $(this).next('.collapse-content-materials').slideToggle(); 
        });
    });    

    // Event-speaker-carousel
    var swiper = new Swiper('.event-speaker-carousel', {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30,
        speed: 1500,
        breakpoints: {  
            0: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // Summery counter
    function newCounter1() {
        var countDate = new Date("15 October 2030 9:56:00");
        var sec = 1000;
        var min = sec * 60;
        var hr = min * 60;
        var day = hr * 24;
        var today = new Date();
        var distance = countDate - today;
        var days = Math.floor(distance / day);
        var hours = Math.floor((distance % day) / hr);
        var mins = Math.floor((distance % hr) / min);
        $(".counter-days").html(days + "<span>Days</span>")
        $(".counter-hours").html(hours + "<span>Hours</span>")
        $(".counter-minutes").html(mins + "<span>Minutes</span>")
        if(distance < 0) {
            clearInterval(dealCounter1);
            $(".new-counter-1").html("Session Expired");
        }
    }
    setInterval(function() {
        newCounter1();
    }, 1000)

    // Coming-soon counter
    function newCounter2() {
        var countDate = new Date("15 October 2030 9:56:00");
        var sec = 1000;
        var min = sec * 60;
        var hr = min * 60;
        var day = hr * 24;
        var today = new Date();
        var distance = countDate - today;
        var days = Math.floor(distance / day);
        var hours = Math.floor((distance % day) / hr);
        var mins = Math.floor((distance % hr) / min);
        var secs = Math.floor((distance % min) / sec);
        $(".day1").html(days + "<span>Days</span>")
        $(".hr1").html(hours + "<span>Hrs</span>")
        $(".min1").html(mins + "<span>Mins</span>")
        $(".sec1").html(secs + "<span>Sec</span>")
        if(distance < 0) {
            clearInterval(dealCounter1);
            $(".new-counter-2").html("Session Expired");
        }
    }
    setInterval(function() {
        newCounter2();
    }, 1000)

     // Init Isotope
    var $grid = $(".gallery-tab-details").isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
    });
    // Bind filter button click
    $(".gallery-selection-tab").on('click', 'li', function() {
        var filterValue = $( this ).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    // Change is-checked class on buttons
    $(".gallery-selection-tab li").on('click', function( ) {
        $(this).addClass("active").siblings().removeClass("active")
    });
    
    // MyLearn Content  
    $(function() {
        $('.mylearn-card').each(function() {
            var $card = $(this);
            var $statusElement = $card.find('.status-badge');
            var $rejectionReasonModal = $card.find('.modal');
            var $rejectionText = $card.find('.rejection-text');
            var $closeModalBtn = $rejectionReasonModal.find('.close-btn');
            var $endDateElement = $card.find('.course-end-date');
            
            
            var applicationStatus = 'waiting'; 
            var rejectionReason = 'لم يتم استيفاء الشروط المطلوبة.';
    
            function updateStatus() {
                if (applicationStatus === 'waiting') {
                    $statusElement.addClass('waiting').text('فى انتظار القبول');
                } else if (applicationStatus === 'accepted') {
                    $statusElement.addClass('accepted').text('مقبول');
                    
                    $endDateElement.css('cursor', 'pointer').on('click', function() {
                        window.location.href = '/academic-content'; 
                    });
                } else if (applicationStatus === 'rejected') {
                    $statusElement.addClass('rejected').text('مرفوض');
                    $statusElement.on('click', function() {
                        $rejectionText.text(rejectionReason);
                        $rejectionReasonModal.show();
                    });
                } else if (applicationStatus === 'completed') {
                    $statusElement.addClass('completed').text('منتهى');
                }
            }
            
            $closeModalBtn.on('click', function() {
                $rejectionReasonModal.hide();
            });
    
            updateStatus();
        });
    });
    
    // show comments form 
    $(function() {
        $('.btn.comment').click(function(event) {
            event.preventDefault(); 
            $('.btn.comment').hide(); 
            $('.new-comment').show();
        });
    });

    /// Selected Star 
    $(function() {
        $('.review-star.comment li').on('click', function() {
            const index = $(this).index();
            $('.review-star.comment li').removeClass('active');
            $('.review-star.comment li').slice(0, index + 1).addClass('active');
    
            const selectedStars = $('.review-star.comment li.active');
            const selectedValues = selectedStars.map(function() {
                return $(this).data('value');
            }).get();
    
            console.log("Selected stars:", selectedValues);
        });
    });
    
    // Show Or Hide Sale
    $(document).ready(function() {
        $('.course-filter-list').each(function() {
            if ($(this).find('.sale').length) {
                $(this).show(); 
            } else {
                $(this).hide(); 
            }
        });
    });
    
    // Uploud Images In Checkout Details 
    $(document).ready(function() {
        $(".file-input").on("change", function() {
            const uploadedImgs = $(".uploaded-imgs");
            let firstImageUploaded = false;
            const inputField = $(this); 
            
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imgContainer = $("<div>").addClass("uploaded-img-container");
                    const img = $("<img>").attr("src", e.target.result);
                    const deleteIcon = $("<button>").addClass("delete-icon").html("&times;");
                    
                    deleteIcon.on("click", function() {
                        imgContainer.remove(); 
                        inputField.val(''); 
                        if (uploadedImgs.children().length === 0) {
                            firstImageUploaded = false;
                            $(".line").hide();
                        }
                    });

                    imgContainer.append(img).append(deleteIcon);
                    uploadedImgs.append(imgContainer);
                    
                    if (!firstImageUploaded) {
                        $(".line").show();
                        firstImageUploaded = true;
                    }
                };
                reader.readAsDataURL(this.files[0]);
            }
        });
    });
    
    // Upload Single img 
    $(document).ready(function() {
        $("input[type='file']").on("change", function() {
            const uploadedImgs = $(this).siblings("div");
            const inputField = $(this); // حفظ الحقل المرتبط بالصورة المرفوعة
    
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imgContainer = $("<div>").addClass("uploaded-img-container");
                    const img = $("<img>").attr("src", e.target.result);
                    const deleteIcon = $("<button>").addClass("delete-icon").html("&times;");
    
                    // عند الضغط على زر الحذف
                    deleteIcon.on("click", function() {
                        imgContainer.remove(); // إزالة الصورة المعروضة
                        inputField.val(''); // مسح اسم الصورة فقط في الحقل المرتبط بالصورة المحذوفة
                    });
    
                    imgContainer.append(img).append(deleteIcon);
                    uploadedImgs.append(imgContainer);
                };
                reader.readAsDataURL(this.files[0]);
            }
        });
    });
    
    
    // show Payment Methods
    $(document).ready(function() {
        $('input[type="radio"]').change(function() {
            const electronicPayment = $('#electronic-payment').is(':checked');
            const bankTransfer = $('#Bank-transfer').is(':checked');
            const electronicWallets = $('#electronic-wallets').is(':checked');
            
            $('.pay-methods').show();
            $('.transfer-content').hide();
            $('.elepayment-content').hide();
            $('.wallets-content').hide();
            
            if (electronicPayment) {
                $('.elepayment-content').show();
            }
            if (bankTransfer) {
                $('.transfer-content').show();
            }
            if (electronicWallets) {
                $('.wallets-content').show();
            }
            if (!electronicPayment && !bankTransfer && !electronicWallets) {
                $('.pay-methods').hide();
            }
        });
    });

    // Course Content 
    // Collapse Chapters 
    $(document).ready(function () {
        $('.collapse-btn').on('click', function () {
            $(this).toggleClass('active'); 
            $(this).next('.collapse-content').slideToggle(); 
        });
        
        const $firstChapter = $('#menu-items-1').prev('.collapse-btn'); 
        $firstChapter.addClass('active'); 
        $('#menu-items-1').slideDown(); 
    });    
    
    // Show Content And Question Tabs For Each Material
    $(document).ready(function () {
        let currentContent = 'videos'; 
        let currentSubject = '#content-item-1-1'; 
        let currentTabIndex = {}; 
        
        function updateContent() {
            $('.content-item').hide(); 
            $(currentSubject).show(); 
            
            $(currentSubject).find('.videos-content, .books-content, .links-content, .questions-content').hide();
            $(currentSubject + ' .' + currentContent + '-content').show();

            if (currentContent === 'questions') {
                const currentTab = currentTabIndex[currentSubject] || 1; 
                showQuestionTab(currentSubject, currentTab);
            }
        }
        
        function showQuestionTab(subjectId, tabIndex) {
            const $questionContent = $(subjectId + ' .questions-content');
            $questionContent.find('.tab-content').hide(); 
            $questionContent.find(`.tab-content[data-tab="${tabIndex}"]`).show(); 
            
            if (tabIndex === 1) {
                $questionContent.find('.prev-tab').hide();
            } else {
                $questionContent.find('.prev-tab').show();
            }
            
            const totalTabs = $questionContent.find('.tab-content').length;
            if (tabIndex >= totalTabs) {
                $questionContent.find('.next-tab').hide();
            } else {
                $questionContent.find('.next-tab').show();
            }
            
            $questionContent.find('.tab-info .current-tab').text(tabIndex);
            $questionContent.find('.tab-info .total-tabs').text(totalTabs);
            currentTabIndex[subjectId] = tabIndex;
        }
        
        $('#menu-items-1').slideDown(); 
        $('#menu-items-1 .menu-item:first').addClass('active'); 
        updateContent(); 
        
        $('.menu .menu-item a').click(function (event) {
            event.preventDefault(); 
            
            const $currentChapter = $(this).closest('.menu'); 
            const chapterIndex = $currentChapter.attr('id').split('-')[2]; 
            const subjectIndex = $(this).parent().index() + 1; 
            
            currentSubject = `#content-item-${chapterIndex}-${subjectIndex}`;
            currentTabIndex[currentSubject] = 1; 
            updateContent();
            
            $('.menu .menu-item').removeClass('active');
            $(this).parent().addClass('active');
        });
        
        $('#videos, #books, #links, #questions').click(function () {
            currentContent = this.id;
            updateContent();
            
            $('#videos, #books, #links, #questions').removeClass('active');
            $(this).addClass('active');
        });
        
        $('.next-tab').click(function () {
            const totalTabs = $(currentSubject + ' .questions-content .tab-content').length;
            const currentTab = currentTabIndex[currentSubject] || 1;
            
            if (currentTab < totalTabs) {
                showQuestionTab(currentSubject, currentTab + 1);
            }
        });
        
        $('.prev-tab').click(function () {
            const currentTab = currentTabIndex[currentSubject] || 1;
            
            if (currentTab > 1) {
                showQuestionTab(currentSubject, currentTab - 1);
            }
        });
        
        currentContent = 'videos';
        updateContent();
    });

    // Show written And Oral Exam Content  
    $(document).ready(function () {
        // written Exam 
        $('.written-exam-btn').click(function () {
            const $currentMaterial = $(this).closest('.content-item'); 
            const $writtenExamInst = $currentMaterial.find('.written-exam-inst');
            const $examContent = $currentMaterial.find('.exam-content');
    
            if ($(this).text() === 'عرض الامتحان') {
                $writtenExamInst.hide();
                $examContent.show();
                $examContent.find('.info').hide();
                $examContent.find('.question textarea').hide();
                $examContent.find('.content').addClass('bordered-box');
                $examContent.find('.submit .submit-btn').text('إنهاء').addClass('mt-20');
            } else {
                $writtenExamInst.show();
                $examContent.find('.info').show();
                $examContent.find('.question textarea').show();
            }
        });
    
        $('.close-popup-btn').click(function () {
            const $currentMaterial = $(this).closest('.content-item'); 
            $currentMaterial.find('.written-exam-inst').hide();
        });
    
        $('.show-written-exam').click(function () {
            const $currentMaterial = $(this).closest('.content-item'); 
            const $examContent = $currentMaterial.find('.exam-content');
            $currentMaterial.find('.written-exam-inst').hide();
            $examContent.show();
            $examContent.find('.info').show();
            $examContent.find('.question textarea').show();
            $('.navbar-area').addClass('opacity-0');
            $('.questions-content').addClass('opacity-0');
        });
    
        $('.submit-btn').click(function () {
            const $currentMaterial = $(this).closest('.content-item'); 
            $currentMaterial.find('.exam-content').hide();
            $currentMaterial.find('.written-exam-inst').hide();
            $('.navbar-area').removeClass('opacity-0');
            $('.questions-content').removeClass('opacity-0');
            $currentMaterial.find('.written-exam-btn').text('عرض الامتحان');
        });
    
        // Oral Exam
        $('.oral-exam-btn').click(function () {
            const $currentMaterial = $(this).closest('.content-item'); 
            $currentMaterial.find('.oral-exam-inst').show();
        });
    
        $('.close-popup-btn').click(function () {
            const $currentMaterial = $(this).closest('.content-item'); 
            $currentMaterial.find('.oral-exam-inst').hide();
        });
    
        $('.show-oral-exam').click(function () {
            const $currentMaterial = $(this).closest('.content-item'); 
            const $examContent = $currentMaterial.find('.exam-content');
            $currentMaterial.find('.oral-exam-inst').hide();
            $examContent.show();
            $examContent.find('.info').hide();
            $examContent.find('.question textarea').hide();
            $examContent.find('.content').addClass('bordered-box');
            $examContent.find('.submit .btn').text('إنهاء').addClass('mt-20');
        });
    });

    // Show Rate Popup
    $(document).ready(function() {
        $('.rate-button').click(function() {
            $('.reviews.popup').show(); 
        });
    
        $('.close-popup').click(function() {
            $('.course-details .reviews').hide(); 
        });
    });
    // End Course Content
    
    
    // delete account Pop 
    $(document).ready(function() {
        $('#deleteBtn').click(function() {
            $('#deletePopup').show(); 
        });
    
        $('#cancelBtn, #closePopupBtn').click(function() {
            $('#deletePopup').hide();
        });    
    });

    // Reset Paswword 
    $(document).ready(function() {
        $('#sendBtn').click(function(event) {
            event.preventDefault(); 
            $('#step1').hide(); 
            $('#step2').show(); 
        });
    
        $('#verifyBtn').click(function(event) {
            event.preventDefault(); 
            $('#step2').hide(); 
            $('#step3').show(); 
        });
    });    
    
    // login Modal 
    $(function() {
        $('.open-popup').magnificPopup({
            type: 'inline', 
            midClick: true 
        });
    });
    // Register Modal 
    $(function() {
        $('.open-popup2').magnificPopup({
            type: 'inline', 
            midClick: true 
        });
    });



    // Subscribe form
    $("#contactForm, .newsletter-form").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });
    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }
    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub() {
        $(".newsletter-form").addClass("animate__animated animate__shakeX");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animate__animated animate__shakeX");
        }, 1000)
    }
    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }

    // ajax mailchimp
    $(".newsletter-form").ajaxChimp({
        url: "https://hibootstrap.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

}($));
