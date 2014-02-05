// простая галерея вида большая картинка + thumbnails
(function($) {
    
    var defaults = { loading:'#loading', showDescr:true, setThumbnailShadow:true, arrowNav:true }
    
    var options;
 
    $.fn.plainGallery = function(params){

        options = $.extend({}, defaults, options, params);
 
        function changeImg($thumbnail) {
            
            var $big_img = $("#big_image")
            
            $big_img.hide()
            $("#descr_content, #descr_shadow").hide()
            $(options.loading).show()
            
            var new_src = $thumbnail.attr('href')
            
            var cur = parseInt($thumbnail.attr('rel'))
            
            if(!$("#thumbnail"+(cur-1)).length) {
               $("#gallery_prev").addClass('inactive')
            }
            else {
                $("#gallery_prev").removeClass('inactive')
            }
            if(!$("#thumbnail"+(cur+1)).length) {
                $("#gallery_next").addClass('inactive')
                $big_img.addClass('inactive')
            }
            else {
                $("#gallery_next").removeClass('inactive')
                $big_img.removeClass('inactive')
            }
            
            var tmp = new Image()
            tmp.src = new_src
            $(tmp).load(function(){
                $big_img
                    .attr('src',new_src)
                    .show()
                    .attr('rel',cur)
                $big_img.closest('a').attr('href',new_src.replace(/big/,'bigger'))
                $(options.loading).hide()
                $("#thumbnails_block").find('a').removeClass('selected')
                $thumbnail.addClass('selected')
                
                if(options.setThumbnailShadow){
                    moveThumbnailShadow($thumbnail)
                }
                
                if(options.showDescr){
                    showDescr($thumbnail)
                }
                })
        }
        
        function moveThumbnailShadow($thumbnail) {
            var $div = $thumbnail.closest('div')
            var offset = $div.offset()
            $("#thumbnails_shadow")
                .width($div.width())
                .height($div.height())
                .offset({
                    top:offset.top,
                    left:offset.left
                    })
                .show()
        }
        
        function showDescr($thumbnail) {
            
            var text = $thumbnail.closest('div').find('span').html()
            
            $("#descr_content")
                .html(text)
                .width($("#big_image").width()-40)
                .show()
                
            var ht = $("#descr_content").outerHeight()    
            
            $("#descr_shadow")
                .height(ht)
                .width($("#big_image").width())
                .show()
                
            $("#descr_content, #descr_shadow")
                .css({'margin-top':-ht,left:$("#big_image").offset().left})
                
        }
        
        // обработка событий
        $("#thumbnails_block").find('a').click(function(event){
            var $thumbnail = $(event.target).closest('a')
            changeImg($thumbnail)
            event.preventDefault()
            })
        
        $("#gallery_prev").click(function(event){
            var $prev = $(event.target).closest('a')
            if(!$prev.hasClass('inactive')) {
                var cur = parseInt($("#big_image").attr('rel'))
                var $thumbnail = $("#thumbnail"+(cur-1))
                if($thumbnail.length) {
                    changeImg($thumbnail)
                }
            }
            event.preventDefault()
            })
        
        $("#gallery_next").click(function(event){
            var $next = $(event.target).closest('a')
            if(!$next.hasClass('inactive')) {
                var cur = parseInt($("#big_image").attr('rel'))
                var $thumbnail = $("#thumbnail"+(cur+1))
                if($thumbnail.length) {
                    changeImg($thumbnail)
                }
            }
            event.preventDefault()
            })

        $(window).load(function(){
            if(options.setThumbnailShadow){
                moveThumbnailShadow($("#thumbnail0"))
            }
            if(options.showDescr){
                showDescr($("#thumbnail0"))
            }
            
            })
        
        return this;
    };
})(jQuery);