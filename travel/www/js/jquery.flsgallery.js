/* -------------------------------------
 Галерея с неравномерным шагом
 autor: Alexandr Golovko
 www.xiper.net
 ----------------------------------------
 */
(function(jQuery){

    jQuery.fn.flsGallery = function(options) {

        var settings = jQuery.extend({
            btnNext: "#btnNext",
            btnPrev: "#btnPrev",
            mouseWheel: true,
            speed: 200
        }, options);

        this.each(function(){

            jQuery(this).wrapInner("<div class='flsGalleryInner'></div>");
            var containerWidth = jQuery(this).width();
            var current = 0;
            var totalWidth = 0;
            var points = new Array();
            var i=0;
            points[0]=0;
            var count;

            jQuery(".flsGalleryInner li").each(function(){
                totalWidth += jQuery(this).width();
                i++;
                points[i] = totalWidth;
            });
            jQuery(".flsGalleryInner").css("width",totalWidth);
            count =i++;

            jQuery(settings.btnPrev).addClass('disabled');
            if (containerWidth > totalWidth) jQuery(settings.btnNext).addClass('disabled');

            if(settings.btnPrev)
                jQuery(settings.btnPrev).click(function() {
                    goPrev()
                });

            if(settings.btnNext)
                jQuery(settings.btnNext).click(function() {
                    goNext()
                });


            if(settings.mouseWheel) {

                jQuery('.flsGalleryInner').bind('mousewheel', function(event, delta) {
                    return delta>0 ? goPrev() : goNext();
                });
            }


            function goNext() {
                if (!jQuery(settings.btnNext).hasClass('disabled'))
                {
                    var i=0;
                    while (points[i]-current <= containerWidth) {

                        i++;
                    }
                    if (i == count) {
                        jQuery(settings.btnNext).addClass('disabled');
                    }
                    jQuery(settings.btnPrev).removeClass('disabled');
                    goRight(-totalWidth+points[i]);
                    current = points[i] - containerWidth;
                }
            }


            function goPrev() {
                if (!jQuery(settings.btnPrev).hasClass('disabled'))
                {
                    var i=0;
                    while (points[i]< current ) {

                        i++;
                    }
                    current = points[i-1];
                    if (i == 1) {
                        jQuery(settings.btnPrev).addClass('disabled');
                        current = 0;
                    }
                    jQuery(settings.btnNext).removeClass('disabled');
                    goLeft(points[i-1]);
                }
            }

            function goRight(pixel) {
                jQuery(".flsGalleryInner").animate({
                        left: containerWidth - pixel - totalWidth
                    }, settings.speed
                );
            }

            function goLeft(pixel) {
                jQuery(".flsGalleryInner").animate({
                        left: -pixel
                    }, settings.speed
                );
            }

        });

        return this;

    };

})(jQuery);


		