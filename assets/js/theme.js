/* =================================================================
* Template JS
* 
* Template:    Agatha -	Photography Portfolio Website Template
* Author:      Themetorium
* URL:         https://themetorium.net
*
================================================================= */

"use strict";

// ===========================================
// Display loading animation while page loads
// ===========================================

// Wait for window load
$(window).on("load", function () {
    // Animate loader off screen
    $("#preloader").fadeOut("slow");
});

// =========================================================================
// Smooth scrolling
// Note: requires Easing plugin - http://gsgd.co.uk/sandbox/jquery/easing/
// =========================================================================

$(".sm-scroll").on("click", function () {
    if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
            $("html,body").animate(
                {
                    scrollTop: target.offset().top - 71,
                },
                1500,
                "easeInOutExpo"
            );
            return false;
        }
    }
});

// ===================================================
// Hide header/menu on scroll down, show on scroll up
// ===================================================

var lastScrollTop = 0, delta = 5;
var navbarHeight = $(".show-hide-on-scroll").outerHeight();

$(window).scroll(function (event) {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the header, add class .fly-up.
    // This is necessary so you never see what is "behind" the header.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $(".show-hide-on-scroll").addClass("fly-up");
    } else {
        // Scroll Up
        $(".show-hide-on-scroll").removeClass("fly-up");
    }

    lastScrollTop = st;
});

// ==========================================================================
// Header Filled (cbpAnimatedHeader)
// Source: http://tympanus.net/codrops/2013/06/06/on-scroll-animated-header/
// ==========================================================================

var cbpAnimatedHeader = (function () {
    var docElem = document.documentElement, header = document.querySelector("#header"), didScroll = false, changeHeaderOn = 1;

    function init() {
        window.addEventListener("scroll", function (event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 150);
                }
            },
            false
        );
    }

    function scrollPage() {
        var sy = scrollY();
        if ($(this).scrollTop() > 150) {
            $("#header.fixed-top, #header.show-hide-on-scroll").addClass("header-filled");
        } else {
            $("#header.fixed-top, #header.show-hide-on-scroll").removeClass("header-filled");
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();
})();

// =========================================================
// Justified Gallery
// Source: http://miromannino.github.io/Justified-Gallery/
// =========================================================

$(".justified-gallery").justifiedGallery({
    rowHeight: 360, // The preferred height of rows in pixel.
    maxRowHeight: "200%", // A number (e.g 200) which specifies the maximum row height in pixel. A negative value to don't have limits. Alternatively, a string which specifies a percentage (e.g. 200% means that the row height can't exceed 2 * rowHeight).
    margins: 6, // Decide the margins between the images.
    border: 0, // Decide the border size of the gallery. With a negative value the border will be the same as the margins.
    fixedHeight: false, // Decide if you want to have a fixed height (rowHeight).
    randomize: false, // Automatically randomize or not the order of photos.
    captions: false, // Must be "false"!!!
    lastRow: "nojustify", // 'justify', 'nojustify' or 'hide'.
});

// =====================================================================================
// Isotope
// Source: http://isotope.metafizzy.co
// Note-1: "imagesloaded" blugin is required: https://github.com/desandro/imagesloaded
// Note-2: "lazysizes" blugin is recommended: https://github.com/aFarkas/lazysizes
// =====================================================================================

// init Isotope
var $container = $(".isotope-items-wrap");
$container.imagesLoaded(function () {
    $container.isotope({
        itemSelector: ".isotope-item",
        transitionDuration: "0.5s",
        masonry: {
            columnWidth: ".grid-sizer",
            horizontalOrder: false,
        },
    });
});

// Filter
$(".isotope-filter-links a").on("click", function () {
    var selector = $(this).attr("data-filter");
    $container.isotope({
        filter: selector,
    });
    return false;
});

// Filter item active
var filterItemActive = $(".isotope-filter-links a");
filterItemActive.on("click", function () {
    var $this = $(this);
    if (!$this.hasClass("active")) {
        filterItemActive.removeClass("active");
        $this.addClass("active");
    }
});

// if isotope exist add "overflow-y: scroll;" to body tag
$(".isotope").each(function () {
    $("body").css("overflow-y", "scroll");
});

// =====================================================
// lightGallery (lightbox plugin)
// Source: http://sachinchoolur.github.io/lightGallery
// =====================================================

$(".lightgallery").lightGallery({
    // Please read about gallery options here: http://sachinchoolur.github.io/lightGallery/docs/api.html

    // lightgallery core
    selector: ".lg-trigger",
    mode: "lg-fade", // Type of transition between images ('lg-fade' or 'lg-slide').
    height: "100%", // Height of the gallery (ex: '100%' or '300px').
    width: "100%", // Width of the gallery (ex: '100%' or '300px').
    iframeMaxWidth: "100%", // Set maximum width for iframe.
    loop: true, // If false, will disable the ability to loop back to the beginning of the gallery when on the last element.
    speed: 600, // Transition duration (in ms).
    closable: true, // Allows clicks on dimmer to close gallery.
    escKey: true, // Whether the LightGallery could be closed by pressing the "Esc" key.
    keyPress: true, // Enable keyboard navigation.
    hideBarsDelay: 5000, // Delay for hiding gallery controls (in ms).
    controls: true, // If false, prev/next buttons will not be displayed.
    mousewheel: true, // Chane slide on mousewheel.
    download: false, // Enable download button. By default download url will be taken from data-src/href attribute but it supports only for modern browsers. If you want you can provide another url for download via data-download-url.
    counter: true, // Whether to show total number of images and index number of currently displayed image.
    swipeThreshold: 50, // By setting the swipeThreshold (in px) you can set how far the user must swipe for the next/prev image.
    enableDrag: true, // Enables desktop mouse drag support.
    enableTouch: true, // Enables touch support.

    // thumbnial plugin
    thumbnail: true, // Enable thumbnails for the gallery.
    showThumbByDefault: false, // Show/hide thumbnails by default.
    thumbMargin: 5, // Spacing between each thumbnails.
    toogleThumb: true, // Whether to display thumbnail toggle button.
    enableThumbSwipe: true, // Enables thumbnail touch/swipe support for touch devices.
    exThumbImage: "data-exthumbnail", // If you want to use external image for thumbnail, add the path of that image inside "data-" attribute and set value of this option to the name of your custom attribute.

    // autoplay plugin
    autoplay: false, // Enable gallery autoplay.
    autoplayControls: true, // Show/hide autoplay controls.
    pause: 6000, // The time (in ms) between each auto transition.
    progressBar: true, // Enable autoplay progress bar.
    fourceAutoplay: false, // If false autoplay will be stopped after first user action

    // fullScreen plugin
    fullScreen: true, // Enable/Disable fullscreen mode.

    // zoom plugin
    zoom: true, // Enable/Disable zoom option.
    scale: 0.5, // Value of zoom should be incremented/decremented.
    enableZoomAfter: 50, // Some css styles will be added to the images if zoom is enabled. So it might conflict if you add some custom styles to the images such as the initial transition while opening the gallery. So you can delay adding zoom related styles to the images by changing the value of enableZoomAfter.

    // video options
    videoMaxWidth: "1000px", // Set limit for video maximal width.

    // Youtube video options
    loadYoutubeThumbnail: true, // You can automatically load thumbnails for youtube videos from youtube by setting loadYoutubeThumbnail true.
    youtubeThumbSize: "default", // You can specify the thumbnail size by setting respective number: 0, 1, 2, 3, 'hqdefault', 'mqdefault', 'default', 'sddefault', 'maxresdefault'.
    youtubePlayerParams: {
        // Change youtube player parameters: https://developers.google.com/youtube/player_parameters
        modestbranding: 0,
        showinfo: 1,
        controls: 1,
    },

    // Vimeo video options
    loadVimeoThumbnail: true, // You can automatically load thumbnails for vimeo videos from vimeo by setting loadYoutubeThumbnail true.
    vimeoThumbSize: "thumbnail_medium", // Thumbnail size for vimeo videos: 'thumbnail_large' or 'thumbnail_medium' or 'thumbnail_small'.
    vimeoPlayerParams: {
        // Change vimeo player parameters: https://developer.vimeo.com/player/embedding#universal-parameters
        byline: 1,
        portrait: 1,
        title: 1,
        color: "CCCCCC",
        autopause: 1,
    },
});

// =======================================================================================
// Defer videos (Youtube, Vimeo)
// Note: When you have embed videos in your webpages it causes your page to load slower.
// Deffering will allow your page to load quickly.
// Source: https://www.feedthebot.com/pagespeed/defer-videos.html
// =======================================================================================

function init() {
    var vidDefer = document.getElementsByTagName("iframe");
    for (var i = 0; i < vidDefer.length; i++) {
        if (vidDefer[i].getAttribute("data-src")) {
            vidDefer[i].setAttribute(
                "src",
                vidDefer[i].getAttribute("data-src")
            );
        }
    }
}
window.onload = init;

// =============================================================================================
// Styling a select element
// Source: http://stackoverflow.com/questions/7208786/how-to-style-the-option-of-a-html-select
// =============================================================================================

// Iterate over each select element
$("select").each(function () {
    // Cache the number of options
    var $this = $(this),
        numberOfOptions = $(this).children("option").length;

    // Hides the select element
    $this.addClass("s-hidden");

    // Wrap the select element in a div
    $this.wrap('<div class="select"></div>');

    // Insert a styled div to sit over the top of the hidden select element
    $this.after('<div class="styledSelect"></div>');

    // Cache the styled div
    var $styledSelect = $this.next("div.styledSelect");

    // Show the first select option in the styled div
    $styledSelect.text($this.children("option").eq(0).text());

    // Insert an unordered list after the styled div and also cache the list
    var $list = $("<ul />", {
        class: "options",
    }).insertAfter($styledSelect);

    // Insert a list item into the unordered list for each select option
    for (var i = 0; i < numberOfOptions; i++) {
        $("<li />", {
            text: $this.children("option").eq(i).text(),
            rel: $this.children("option").eq(i).val(),
        }).appendTo($list);
    }

    // Cache the list items
    var $listItems = $list.children("li");

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $styledSelect.on("click", function (e) {
        e.stopPropagation();
        $("div.styledSelect.active").each(function () {
            $(this).removeClass("active").next("ul.options").hide();
        });
        $(this).toggleClass("active").next("ul.options").toggle();
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.on("click", function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass("active");
        $this.val($(this).attr("rel"));
        $list.hide();
        /* alert($this.val()); Uncomment this for demonstration! */
    });

    // Hides the unordered list when clicking outside of it
    $(document).on("click", function () {
        $styledSelect.removeClass("active");
        $list.hide();
    });
});

// ==============================================================================
// Add to favorite button
// Source: http://www.webdesigncrowd.com/demo/circle-reveal-animation-12.23.13/
// ==============================================================================

$(".fav-count").on("click", function () {
    var total = parseInt($(this).html(), 10);
    if ($(this).parent().hasClass("active")) {
        total -= 1;
    } else {
        total += 1;
    }
    $(this).html(total);
    $(this).parent().toggleClass("active");
});

$(".icon-heart").on("click", function () {
    var total = parseInt(
        $(this).parent().siblings(".fav-count").first().html(),
        10
    );
    if ($(this).parent().parent().hasClass("active")) {
        total -= 1;
    } else {
        total += 1;
    }
    $(this).parent().siblings(".fav-count").first().html(total);
    $(this).parent().parent().toggleClass("active");
});

// ==========================
// Album description toggle
// ==========================

$(".al-desc-toggle-trigger").on("click", function () {
    $(".album-description").toggleClass("al-desc-full");
    $(".al-desc-toggle").slideToggle(400);
});

// ================================================
// OWL Carousel
// Source:: http://www.owlcarousel.owlgraphic.com
// ================================================

$(".owl-carousel").each(function () {
    var $carousel = $(this);
    $carousel.owlCarousel({
        items: $carousel.data("items"),
        loop: $carousel.data("loop"),
        margin: $carousel.data("margin"),
        center: $carousel.data("center"),
        startPosition: $carousel.data("start-position"),
        animateIn: $carousel.data("animate-in"),
        animateOut: $carousel.data("animate-out"),
        autoWidth: $carousel.data("autowidth"),
        autoHeight: $carousel.data("autoheight"),
        autoplay: $carousel.data("autoplay"),
        autoplayTimeout: $carousel.data("autoplay-timeout"),
        autoplayHoverPause: $carousel.data("autoplay-hover-pause"),
        autoplaySpeed: $carousel.data("autoplay-speed"),
        nav: $carousel.data("nav"),
        navText: [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>',
        ],
        navSpeed: $carousel.data("nav-speed"),
        dots: $carousel.data("dots"),
        dotsSpeed: $carousel.data("dots-speed"),
        mouseDrag: $carousel.data("mouse-drag"),
        touchDrag: $carousel.data("touch-drag"),
        dragEndSpeed: $carousel.data("drag-end-speed"),
        lazyLoad: $carousel.data("lazy-load"),
        video: true,
        responsive: {
            0: {
                items: $carousel.data("mobile-portrait"),
                center: false,
            },
            480: {
                items: $carousel.data("mobile-landscape"),
                center: false,
            },
            768: {
                items: $carousel.data("tablet-portrait"),
                center: false,
            },
            992: {
                items: $carousel.data("tablet-landscape"),
            },
            1200: {
                items: $carousel.data("items"),
            },
        },
    });

    // Mousewheel plugin
    var owl = $(".owl-mousewheel");
    owl.on("mousewheel", ".owl-stage", function (e) {
        if (e.deltaY > 0) {
            owl.trigger("prev.owl");
        } else {
            owl.trigger("next.owl");
        }
        e.preventDefault();
    });
});

// =======================================================
// YTPlayer (Background Youtube video)
// Source: https://github.com/pupunzi/jquery.mb.YTPlayer
// =======================================================

// Disabled on mobile devices, because the video background doesn't work on mobile devices (instead, the background image is displayed).
if (!jQuery.browser.mobile) {
    $(".youtube-bg").mb_YTPlayer();
}

// =======================================
// Background image scrolling animations
// =======================================

var x = 0;
setInterval(function () {
    x -= 1;
    // Background image scrolling horisontally.
    $(".bg-image-scroll-horizontal").css("background-position", x + "px 50%");

    // Background image scrolling vertically.
    $(".bg-image-scroll-vertical").css(
        "background-position",
        "50% " + x + "px"
    );
}, 80); // Scrolling speed.

// ===============================================
// Universal PHP Mail Feedback Script
// Source: https://github.com/agragregra/uniMail
// ===============================================

//E-mail Ajax Send
$("#contact-form").submit(function () {
    //Change (your contact form ID)
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change (mail.php path)
        data: th.serialize(),
    }).done(function () {
        alert("Thank you. Your message has been sent!");
        setTimeout(function () {
            // Done Functions
            th.trigger("reset");
        }, 1000);
    });
    return false;
});

// ======================
// Scroll to top button
// ======================

// Check to see if the window is top if not then display button
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $(".scrolltotop").fadeIn();
    } else {
        $(".scrolltotop").fadeOut();
    }
});

// =========================================================================================
// Parallax effect
// Source: http://www.webdesignerdepot.com/2013/07/how-to-create-a-simple-parallax-effect/
// =========================================================================================

$(window).scroll(function (e) {
    parallax();
});
function parallax() {
    var scrolled = $(window).scrollTop();
    if ($(window).width() > 992) {
        // disable parallax on small devices.
        $(".parallax").css("top", scrolled * 0.4 + "px");
    }
}

// ===============
// Window resize
// ===============

$(window)
    .resize(function () {
        // Make "body" padding-top equal to "#header" height
        $("body").css("padding-top", $("#header").css("height"));

        // Full height page - minus "header" and "footer" height
        $(".full-page").innerHeight(
            $(window).height() - $("#header").innerHeight() - $("#footer").innerHeight()
        );

        // Full height carousel - minus "header" and "footer" height
        $(".full-carousel").innerHeight(
            $(window).height() - $("#header").innerHeight() - $("#footer").innerHeight()
        );
    })
    .resize();

// ===============
// Miscellaneous
// ===============

// Bootstrap-3 modal fix
$(".modal").appendTo("body");

// Bootstrap tooltip
$('[data-toggle="tooltip"]').tooltip();

// Bootstrap popover
$('[data-toggle="popover"]').popover({
    html: true,
});
