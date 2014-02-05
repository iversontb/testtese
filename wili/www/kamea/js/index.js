$(document).ready(function(){
	$('#top-menu-content > ul > li').hover(function(){
		$(this).children('a').css({'color': '#6c5b46'});
		if($(this).children('ul').length > 0){
			$('#top-menu').addClass('top-menu-hover');
			$(this).children('ul').show();
		}
	}, function(){
		$(this).children('a').css({'color': '#fff'});
		if($(this).children('ul').length > 0){
			$('#top-menu').removeClass('top-menu-hover');
			$(this).children('ul').hide();
		}
	});
	var isUlLiUlLiHover = false 
	$('#top-menu-content > ul > li').click(function(){
		$('#top-menu-content > ul > li').removeClass('li-hover');
		$('#top-menu-content > ul > li > a').css({'color': '#fff'});
		if($('#top-menu-content > ul > li > ul > li').length > 0){
			if(!isUlLiUlLiHover){
				$('#top-menu-content > ul > li > ul > li').removeClass('ul-li-ul-li-hover');
			}
			isUlLiUlLiHover = false;
		}
		$(this).addClass('li-hover');
	});
	if($('#top-menu-content > ul > li > ul > li').length > 0){
		$('#top-menu-content > ul > li > ul > li').click(function(){
			isUlLiUlLiHover = true;
			$('#top-menu-content > ul > li > ul > li').removeClass('ul-li-ul-li-hover');
			$(this).addClass('ul-li-ul-li-hover');
		});
	}
	$('#images .row.second .img img').click(function(){
		var src = $(this).attr('src');
		$('#images .row.second .img').removeClass('img-click');
		$(this).parent().addClass('img-click');
		$('#images .row.first img').attr({'src': src});
	})
	
	if($('#test-page-context').length > 0){
		var testPageHeight = $('#test-page-context').position().top + $('#test-page-context').height() - $('#test-page').position().top,
			secondColumnHeight = $('#second-column').height();
		if(testPageHeight > secondColumnHeight){
			$('#test-page').height(testPageHeight);
			$('#second-column').height(testPageHeight);
		} else {
			$('#test-page').height(testPageHeight);
			$('#second-column').height(testPageHeight);
		}
	}
})