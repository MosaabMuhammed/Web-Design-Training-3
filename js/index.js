$(function(){
    $(".buttons button:first-child").click(function(){
        $(".posts .two, div.two").fadeOut(800, function(){
            $(".posts .one, div.one").fadeIn();
        });
    });
    $(".buttons button:last-child").click(function(){
        $(".posts .one, div.one").fadeOut(800, function(){
            $(".posts .two, div.two").fadeIn();
        });
    });
    // show the other header
    $(window).scroll(function(){
        var scl = $(this).scrollTop();
        if( scl >= 400){
            $(".hiddenHeader").slideDown("slow");
        } else {
            $(".hiddenHeader").slideUp("slow");
        }
    });
    // start fancybox
    $('.fancybox').fancybox();

    // the accordion
    $(".solutionsBox .accordion h3").click(function(){
        $(this).next().slideToggle("slow");
        $(".solutionsBox .accordion p").not($(this).next()).slideUp("slow");
    });
    // start teh mixitup
    var mixer = mixitup('.imgs');

    // actvie the clicked li
    $('.recent .head ul li').click(function(){
        $('.recent .head ul li.active').removeClass();
        $(this).addClass("active");
    });
});
