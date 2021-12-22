(function($){
    $(function(){

        /* Scroll to section */
        $(".jq--scroll-about-us").click(function(){
            $("html, body").animate({scrollTop: $(".jq--about-us").offset().top}, 1000); 
        });

        $(".jq--scroll-our-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1500); 
        });

        $(".jq--scroll-reference").click(function(){
            $("html, body").animate({scrollTop: $(".jq--reference").offset().top}, 1500); 
        });

        $(".jq--scroll-photo-gallery").click(function(){
            $("html, body").animate({scrollTop: $(".jq--photo-gallery").offset().top}, 1500); 
        });

        $(".jq--scroll-contact").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contact").offset().top}, 1500); 
        });

        $(".jq--scroll-button-first").click(function(){
            $("html, body").animate({scrollTop: $(".jq--about-us").offset().top}, 1000); 
        });

        $(".jq--scroll-button-second").click(function(){
            $("html, body").animate({scrollTop: $(".jq--reference").offset().top}, 1500); 
        });

        /* Mobile navigation */
        $(".jq--nav-icon").click(function(){

            $(".nav-background").fadeToggle();
             $(".mobile-nav-back").fadeToggle();
              $("nav ul").fadeToggle();
        });
       
        $(document).load($(window).bind("resize", checkPosition));

        function checkPosition()
        { if($(window).width() > 1007)
    {
        $("nav ul").fadeIn(0);
    } else {
         $("nav ul").fadeOut(0);
     }
        }
    /* Change hamburger to croos vice versa */
    $(".jq--image-hamburger").click(function(){
  
        if($(".jq--image-hamburger").attr("src") == "img/hamburgerMenu.png")
        {
            $($(".jq--image-hamburger").attr("src","img/crossMenu.png"));
        } 
        else 
        {
            $($(".jq--image-hamburger").attr("src","img/hamburgerMenu.png"));
        }  
    });


    });
})(jQuery);

