/*!
 * simpleSlider jQuery plugin v1.0
 * https://github.com/amaroks/simpleSlider
 * Released under the MIT license
 * Date: 2013-3-13
 */ (function ($) {
    $.fn.simpleSlider = function (params) {
        params = $.extend({
            width: $(this).width(),
            height: $(this).height(),
            styleNav: true,
            navColor: "#555555",
            direction: "left",
            speed: 300,
            interval: 2000,
            navigation: true
        }, params);
        
        if(params.navigation == false)
            params.styleNav = false;

        // add some css
        $(this).css({
            "position": "relative",
            "overflow": "hidden",
        });
        // create slider
        $(this).html('<div style="position:absolute;" id="slides-container">' + $(this).html() + '</div>');
        var count = $(this).find('.slide').length;

        // this div
        var thisDiv = $(this).attr("id");

        // check direction
        if (params.direction === "up") {
            var slidesWidth = params.width;
            var slidesHeigh = count * params.height;
        } else {
            var slidesWidth = count * params.width;
            var slidesHeigh = params.height;
        }


        $(this).find('#slides-container').css({
            'width': slidesWidth,
            'height': slidesHeigh
        });

        
        if(params.navigation == true){
            // create navs
            $(this).append('<div id="navigation"><span class="slider-nav prev"> Next </span> <span class="slider-nav next">Prev</span></div>');

            // some css to navigation
            $(this).find("#navigation").css({
                "position": "absolute",
                "top": "46%",
                "width": "100%",
            });
        }

        // some styles to slider items
        $(this).find(".slide").each(function () {
            $(this).css({
                "width": params.width,
                "height": params.height,
                "display": "block-inline",
                "float": "left",
            });
        });

        // if stylenav is true then add some styles
        if (params.styleNav == true) {

            $(this).find(".slider-nav").each(function () {
                $(this).css({
                    "background-color":  params.navColor,
                    "cursor": "pointer",
                    "color": "#FFFFFF",
                    "cursor": "pointer",
                    "font-family": "arial",
                    "font-size": "14px",
                    "font-weight": "bold",
                    "padding": "10px 15px",
                    "text-transform": "uppercase",
                    "position": "absolute",
                    "display": "block",
                });
            });

            $(this).find(".prev").css("right", "0");
        };


        // some properties
        var pix = 0;

        // bind events
        if(params.navigation == true){
            $(this).find(".prev").on("click", function () {

                if (params.direction !== "up") {

                    if (pix === slidesWidth || pix === (slidesWidth - params.width)) {
                        return;
                    }

                    pix = pix + params.width;

                        // slide left
                        slideLeft(pix);

                    } else {

                        // sldie up
                        if (pix === slidesHeigh || pix === (slidesHeigh - params.height)) {
                            return;
                        }

                        pix = pix + params.height;

                        // slide left
                        slideUp(pix);

                    }
                });

            $(this).find(".next").on("click", function () {
                if (pix === 0) {
                    return;
                }

                if (params.direction !== "up") {

                    pix = pix - params.width;
                        // slide left
                        slideLeft(pix);

                    } else {

                        pix = pix - params.height;

                        // slide left
                        slideUp(pix);

                    }

                });
        }
        else{
            setInterval(function(){
                if (params.direction !== "up") {

                    if (pix === slidesWidth || pix === (slidesWidth - params.width)) {
                        pix = 0; //resets the slider when it reaches the last element
                        slideLeft(pix);
                        return;
                    }

                    pix = pix + params.width;

                        // slide left
                        slideLeft(pix);

                    } else {

                        // sldie up
                        if (pix === slidesHeigh || pix === (slidesHeigh - params.height)) {
                            pix = 0; //resets the slider when it reaches the last element
                            slideUp(pix);
                            return;
                        }

                        pix = pix + params.height;

                        // slide left
                        slideUp(pix);

                    }
            }, params.interval);
        }

        // function to do sliding left/right

        function slideLeft(pixels) {
            $("#"+thisDiv+" #slides-container").animate({
                "left": '-' + pixels + 'px'
            }, params.speed);
        }

        // function to do sliding up/down
        function slideUp(pixels) {
            $("#"+thisDiv+" #slides-container").animate({
                "top": '-' + pixels + 'px'
            }, params.speed);
        }

        // allow jQuery chaining
        return this;
    };

})(jQuery);
