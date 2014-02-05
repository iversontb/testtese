if($.browser.mozilla||$.browser.opera){
	document.removeEventListener("DOMContentLoaded", $.ready, false);
	document.addEventListener("DOMContentLoaded",function(){$.ready()},false)
}

$.event.remove(window,"load",$.ready);
$.event.add( window,"load",function(){$.ready()});

$.extend({
	includeStates:{},
	include:function(url,callback,dependency){
			if(typeof callback!='function'&&!dependency){
				dependency=callback;
				callback=null}
				
		url=url.replace('\n','');
		
		$.includeStates[url]=false;
		
		var script=document.createElement('script');
		script.type='text/javascript';
		script.onload=function(){
			$.includeStates[url]=true;
			if(callback)callback.call(script)
			};
		script.onreadystatechange=function(){
			if(this.readyState!="complete"&&this.readyState!="loaded")return;
			$.includeStates[url]=true;
			if(callback)callback.call(script)
			};
		script.src=url;
		
		if(dependency){
			if(dependency.constructor!=Array)dependency=[dependency];
			setTimeout(function(){
				var valid=true;
				$.each(dependency,function(k,v){
					if(!v()){valid=false;return false}
				});
				if(valid)document.getElementsByTagName('head')[0].appendChild(script);
				else setTimeout(arguments.callee,10)
				},10)
		}else document.getElementsByTagName('head')[0].appendChild(script);
			return function(){return $.includeStates[url]}
	},
	readyOld:$.ready,
	ready:function(){
	if($.isReady) return;
	imReady=true;
	$.each($.includeStates,function(url,state){
		if(!state)return imReady=false}
	);
	if(imReady){
		$.readyOld.apply($,arguments)
	}else{
	setTimeout(arguments.callee,10)}
	}
});


$.include('js/jquery.easing.1.3.js')
/*======= Navigation =======*/
$.include('js/jquery.responsivemenu.js')
$.include('js/superfish.js')
$.include('js/nav-small.js')
/*======= Sliders =======*/
/*$.include('js/jquery.flexslider-min.js')*/
$.include('js/jquery.elastislide.js')
/*======= Responsive Script =======*/
$.include('js/script.js')
/*======= Form =======*/
/*$.include('js/forms.js')
/*======= Hover Effect =======*/
$.include('js/hover.js')
$.include('js/hover-image.js')
/*======= Tooltip =======*/
$.include('js/jquery.tipsy.js')
$.include('js/jquery.ui.totop.js')
/*======= PrettyPhoto =======*/
$.include('js/jquery.prettyPhoto.js')
/*======= Fancybox =======*/
/*$.include('js/jquery.fancybox-1.3.4.js')
/*======= Portfolio =======*/
$.include('js/jquery.quicksand.js')
$.include('js/filter_setting.js')
/*======= Accordion =======*/
$.include('js/accordion.js')
/*======= Tabs =======*/
/*$.include('js/tabs.js')
/*$.include('js/addthis.widget.js')
/*======= Flickr =======*/
/*$.include('js/flickrfeed.min.js')
/*$.include('js/flickrsetup.js')

/*=========================================================================
 Flex Slider /loaded in index page/
========================================================================= */

/*$(function(){
	$('.flexslider .slides > li').addClass('dnone')
	$('.flexslider').flexslider();

}); */

/*=========================================================================
 Feature box Fade effect
========================================================================= */

jQuery(".features").delegate(".features ul li li", "mouseout mouseover", function(m) {
	if (m.type == 'mouseover') {
		jQuery(".features ul li li").not(this).dequeue().animate({opacity: 0.3}, 400);
	} else {
		jQuery(".features ul li li").not(this).dequeue().animate({opacity: 1}, 400);}
});


/*=========================================================================
 prettyPhoto
========================================================================= */

		$(function(){
			$("a[data-gal^='prettyPhoto']").prettyPhoto({
				animation_speed: 'normal', /* fast/slow/normal */
				slideshow: 5000, /* false OR interval time in ms */
				autoplay_slideshow: false, /* true/false */
				opacity: 0.40, /* Value between 0 and 1 */
				show_title: true, /* true/false */
				allow_resize: true, /* Resize the photos bigger than viewport. true/false */
				default_width: 900,
				default_height: 600,
				counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
				theme: 'pp_default', /* pp_default / light_rounded / dark_rounded / light_square / dark_square / facebook */
				horizontal_padding: 20, /* The padding on each side of the picture */
				hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
				wmode: 'opaque', /* Set the flash wmode attribute */
				autoplay: true, /* Automatically start videos: True/False */
				modal: false, /* If set to true, only the close button will close the window */
				deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
				overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
				keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
				changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
				callback: function(){}, /* Called when prettyPhoto is closed */
				ie6_fallback: true,
			});
		});
		
		var pp_alreadyInitialized = false; // Для правильного страничного возврата по стрелкам в браузере !!!
		
/*=========================================================================
 Social icon Tooltip
========================================================================= */

	$(function() {    
		$('.sociable li a img').tipsy({gravity: 's'});		
	});

/*=========================================================================
 Accordion
========================================================================= */

jQuery().ready(function(){
		jQuery('#accordion').accordion({
			autoheight: false
		});
	});

/*=========================================================================
 Close Message box
========================================================================= */

$('.message-box').find('.closemsg').click(function() {
        $(this).parent('.message-box').slideUp(500);
    });


/*=========================================================================
 Caption portfolio hover
========================================================================= */

/* ---- Portfolio 4 column --- */

			$('.portfolio-4column li').hover(function(){
				$(".cover", this).stop().animate({bottom:'5px'},{queue:false,duration:580});
			}, function() {
				$(".cover", this).stop().animate({bottom:'-70px'},{queue:false,duration:580});
			});

/* ---- Portfolio 3 column --- */

			$('.portfolio-3column li').hover(function(){
				$(".cover", this).stop(true).animate({bottom:'4px'},{queue:false,duration:580});
			}, function() {
				$(".cover", this).stop(true).animate({bottom:'-142px'},{queue:false,duration:580});
			});
	
/* ---- Portfolio 2 column --- */
	
			$('.portfolio-2column li').hover(function(){
				$(".cover", this).stop().animate({bottom:'-28px'},{queue:false,duration:580});
			}, function() {
				$(".cover", this).stop().animate({bottom:'-147px'},{queue:false,duration:580});
			});

			
/*=========================================================================
Butterflies animation
========================================================================= */
$(function() {

	$("div.butterfly-big-down").hover(function() {
	$(this).toggleClass("butterfly-big-up"); 
	});

	$("div.butterfly-small-down").hover(function() {
	$(this).toggleClass("butterfly-small-up"); 
	});
	
});


