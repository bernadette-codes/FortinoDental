$(function () {

    $("a[rel*=leanModal]").leanModal();
    $('header nav').meanmenu({
        meanMenuContainer: 'header .place-nav',
        meanMenuOpen: "<i class='icon-menu'></i>",
        meanMenuClose: "<i class='icon-plus'></i>",
        meanScreenWidth: 900,
        meanDisplay: "block"
    });
    var theWindow = $(window), body = $("body"), headerBottom = $("header").outerHeight(),
        stickyBottom = $("header .top-nav").outerHeight();
    $("a[name]").parent("p").addClass('has_target');
    $(".video-grid > iframe").wrap("<div></div>");
    $(".internal #page > h1, .internal #page > h2#append").wrapAll("<article></article>");
    $(".internal #page > article").appendTo("#title .container");
    $(".internal #page img#append").unwrap("<p>");
    $(".internal #page > img#append.edge").appendTo("#title");
    $(".internal #page > img#append").appendTo("#title .container").parent(".container").addClass("flex-ed");
    $("#title .flex-ed img#append").wrap("<figure></figure>");
    $(".page-divider, #page #reviews, .after-divider, .services, .more-to-explore").appendTo(".internal");
    $(".internal").has(".page-divider").addClass('has_divider');
    $("#title").has("video").addClass('has_video');
    $("#title figure").has(".alt").addClass('needs_margin');
    $(".deco-bg.over li:first-child, .deco-bg.over li:last-child").prepend("<span></span>");
    $("h2[data-image-src], .services > div[data-image-src], #title[data-image-src]").addClass("col-flex-ed").css('background', function () {
        var bg = ('url(' + $(this).data("image-src") + ') no-repeat center center');
        return bg;
    });
    $("#title h1").wrapInner('<div>');
    $("#title h1 span").appendTo("#title h1");
    var words = $("#title h1 div").contents().text().split(" ");
    $("#title h1 div").empty();
    $.each(words, function (i, v) {
        $("#title h1 div").append($("<span>").text(v));
    });
    var XX = 2;
    $('#title h1 div span').filter(function () {
        return $(this).text().length < XX;
    }).wrap("<div>");
    $("body").css('padding-top', $("header").outerHeight());
    $(window).on('resize', function () {
        // $("header .top-nav .pho, header .top-nav .phy").appendTo("header .info");
        if ($(window).width() > 900) {
            $("header .info .pho").appendTo(".top-nav .right");
            $("header .info .phy").appendTo(".top-nav .left");
        }
        $("body").css('padding-top', $("header").outerHeight());
        if ($(window).width() < 591) {
            $("#title > img#append.edge").appendTo("#title .container").parent(".container").addClass("flex-ed");
            $("#title .flex-ed img#append.edge").wrap("<figure></figure>");
            $("#title .flex-ed img#append.edge").removeClass("edge")
        }
    }).trigger('resize');
    if (window.location.hash && theWindow.width() > 900) {
        body.addClass("fixed");
    }
    theWindow.on("scroll", function () {
        if (theWindow.scrollTop() >= stickyBottom) {
            body.addClass('attach');
        } else if (theWindow.scrollTop() <= stickyBottom) {
            body.removeClass('attach');
        }
        if (theWindow.width() > 900) {
            if (theWindow.scrollTop() >= headerBottom) {
                body.addClass("fixed");
            } else if (theWindow.scrollTop() <= headerBottom) {
                body.removeClass("fixed");
            }
        }
        if (theWindow.width() < 901) {
            body.removeClass("fixed");
        }
        $(window).on('resize2', function () {
            if ($(window).width() > 900) {
                $("header .info .pho").appendTo(".top-nav .right");
                $("header .info .phy").appendTo(".top-nav .left");
                $(".attach header .top-nav .pho, .attach header .top-nav .phy").appendTo("header .info");
            }
        }).trigger('resize2');
    });
    $(".accordion > h3, .accordion > h2").addClass("toogle");
    $(".toogle").each(function () {
        $(this).nextUntil('.toogle').add().wrapAll('<div>');
    });
    $(".toogle").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").next().slideUp();
        } else {
            $(".toogle").removeClass("active").next().slideUp();
            $(this).addClass("active").next().slideDown();
            for (var i = 0; i < $('.accordion iframe').length; i++) {
                $('.accordion iframe')[i].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
            }
        }
    });
    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        var iframe = iframes[i],
            players = /www.youtube.com|youtube-nocookie.com|player.vimeo.com|www.speareducation.com|icoivideos.com|www.slideshare.net/;
        if (iframe.src.search(players) > 0) {
            var videoRatio = (iframe.height / iframe.width) * 100;
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.right = '0';
            iframe.width = '100%';
            iframe.height = '100%';
            var wrap = document.createElement('div');
            wrap.className = 'fluid-vid';
            wrap.style.width = '100%';
            wrap.style.position = 'relative';
            wrap.style.paddingTop = videoRatio + '%';
            var iframeParent = iframe.parentNode;
            iframeParent.insertBefore(wrap, iframe);
            wrap.appendChild(iframe);
        }
    }
    var dividerTitle = "> h2, > hr", mobileWidth = 630;
    $.when(setupServices()).done(function () {
    });

    function setupServices() {
        $(".page-divider " + dividerTitle).addClass("title").each(function () {
            $(this).nextUntil(".title").addBack().wrapAll('<div id="block" class="move">');
        });
        $(".move").each(function (index) {
            $(this).find(".title").next("img, .fluid-vid").wrap('<figure class="elem-left elem-border">');
            $("#block .fluid-vid").parent(".elem-border").addClass('vid');
        });
        $(".page-divider a[name]").each(function () {
            var getAnchor = $(this).parent(".has_target"),
                anchorTarget = $(this).parentsUntil(".page-divider").next().find(".title").parent();
            getAnchor.remove();
            $(this).prependTo(anchorTarget);
        });
        $(".title").each(function () {
            $(this).nextUntil('#block').add().wrapAll('<div class="contain">');
        });
        $(".page-divider .tool").addClass("flex-ed").each(function () {
            $(this).find("h3").nextUntil('img').addBack().wrapAll('<article>');
        });
    }

    $(".youtube").on("click", function () {
        $(this).empty().addClass("active").setupYoutube();
    });
    $(".yt-btn").on("click", function () {
        $(this).closest(".has_yt").find(".youtube").empty().addClass("active").setupYoutube();
    });

    if ($(window).width() > 750) {
        $("#switch .rotation").cycle({
            slides: ">div",
            pager: "#switch #nav",
            timeout: "10000",
            paused: true,
            pagerTemplate: "",
            autoHeight: "container"
        });
    } else {
        var rotSlides = $("#switch .rotation > *");
        for (var i = 0; i < rotSlides.length; i++) {
            var rotSlide = rotSlides[i], rotNavItem = $("#switch #nav li");
            $(rotSlide).appendTo(rotNavItem[i]);
        }
        $("#switch #nav li").on("click", ">span", function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").next().slideUp();
            } else {
                $("#switch #nav li > span").removeClass("active").next().slideUp();
                $(this).addClass("active").next().slideDown();
            }
            return false;
        });
    }
    var slideshows = $('.cycle-slideshow').on('cycle-prev cycle-next', function (e, opts) {
        slideshows.not(this).cycle('goto', opts.currSlide);
    });
    $('#cycle-2.cycle-slideshow figure').click(function () {
        console.log("clicked");
        var index = $('#cycle-2.cycle-slideshow').data('cycle.API').getSlideIndex(this);
        slideshows.cycle('goto', index);
    });

    //Zoom-in Photos
    var $imgBig = $("#imgBig"),
        $overlay = $("#overlay"),
        $overlayContent = $("#overlayContent");

    $("#gallery section.row img").click(function(){
        $imgBig.attr("src",$(this).prop('src'));
        $overlay.show(350);
        $overlayContent.show(350);
    });

    // Hide Bigger Photos
    $imgBig.click(function(){
        $(this).attr("src", "");
        $overlay.hide();
        $overlayContent.hide();
    });

}); // end

// Gallery Page Image Comparison Slider
function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
    }
    function compareImages(img) {
        var slider, img, clicked = 0, w, h;
        /*get the width and height of the img element*/
        w = img.offsetWidth;
        h = img.offsetHeight;
        /*set the width of the img element to 50%:*/
        img.style.width = (w / 2) + "px";
        /*create slider:*/
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        /*insert slider*/
        img.parentElement.insertBefore(slider, img);
        /*position the slider in the middle:*/
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        /*execute a function when the mouse button is pressed:*/
        slider.addEventListener("mousedown", slideReady);
        /*and another function when the mouse button is released:*/
        window.addEventListener("mouseup", slideFinish);
        /*or touched (for touch screens:*/
        slider.addEventListener("touchstart", slideReady);
        /*and released (for touch screens:*/
        window.addEventListener("touchstop", slideFinish);
        function slideReady(e) {
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*the slider is now clicked and ready to move:*/
            clicked = 1;
            /*execute a function when the slider is moved:*/
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }
        function slideFinish() {
            /*the slider is no longer clicked:*/
            clicked = 0;
        }
        function slideMove(e) {
            var pos;
            /*if the slider is no longer clicked, exit this function:*/
            if (clicked == 0) return false;
            /*get the cursor's x position:*/
            pos = getCursorPos(e)
            /*prevent the slider from being positioned outside the image:*/
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            /*execute a function that will resize the overlay image according to the cursor:*/
            slide(pos);
        }
        function getCursorPos(e) {
            var a, x = 0;
            e = e || window.event;
            /*get the x positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x coordinate, relative to the image:*/
            x = e.pageX - a.left;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            return x;
        }
        function slide(x) {
            /*resize the image:*/
            img.style.width = x + "px";
            /*position the slider:*/
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}

initComparisons();

// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;



