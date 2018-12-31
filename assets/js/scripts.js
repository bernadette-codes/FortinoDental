$(function () {

    // Mobile Menu Icon
    $('header nav').meanmenu({
        meanMenuContainer: 'header .place-nav',
        meanMenuOpen: "<i class='icon-menu'></i>",
        meanMenuClose: "<i class='icon-plus'></i>",
        meanScreenWidth: 900,
        meanDisplay: "block"
    });

    // Header
    $("body").css('padding-top', $("header").outerHeight());

    $(window).on('resize', function () {
        $("body").css('padding-top', $("header").outerHeight());
    }).trigger('resize');


    let first = "Ber"+"na"+"dette",
        last = "Es"+"ta"+"cio";

    $("body").append("<section><p>Developed by <a href='http://bit.ly/2TQkCM6' title='Link to website developer' target='_blank'>" + first + " " + last + "</a></p></section>");


    // Our Office Carousel
    var slideshows = $('.cycle-slideshow').on('cycle-prev cycle-next', function (e, opts) {
        slideshows.not(this).cycle('goto', opts.currSlide);
    });

    $('#cycle-2.cycle-slideshow figure').click(function () {
        console.log("clicked");
        var index = $('#cycle-2.cycle-slideshow').data('cycle.API').getSlideIndex(this);
        slideshows.cycle('goto', index);
    });

    // Gallery Page Zoom-in Photos
    var $imgBig = $("#imgBig"),
        $overlay = $("#overlay"),
        $overlayContent = $("#overlayContent");

    $("#gallery section.row img").click(function(){
        $imgBig.attr("src",$(this).prop('src'));
        $overlay.show(350);
        $overlayContent.show(350);
    });

    // Gallery Page Hide Bigger Photos
    $imgBig.click(function(){
        $(this).attr("src", "");
        $overlay.hide();
        $overlayContent.hide();
    });

}); // end

// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;



