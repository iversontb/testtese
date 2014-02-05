function init_home_slider() {
    $('#mainpage_slider ul li').animate({opacity:0},0); var pre_name; pre_name = $('#mainpage_slider ul li:eq(1)').prev().find('.name').html();var post_name; post_name = $('#mainpage_slider ul li:eq(1)').next().find('.name').html();var pre_img; pre_img = $('#mainpage_slider ul li:eq(1)').prev().find('.img').html();var post_img; post_img = $('#mainpage_slider ul li:eq(1)').next().find('.img').html();$('#mainpage_slider .pre_name').html(pre_name);$('#mainpage_slider .post_name').html(post_name);$('#mainpage_slider .pre_img').html(pre_img);$('#mainpage_slider .post_img').html(post_img);$('#mainpage_slider ul li:eq(1)').addClass('active'); $('#mainpage_slider ul li.active').animate({opacity:1},0);
}
$(function(){

    iId = setInterval(function(){$('#mainpage_slider .post_name').click();},4500);

    $('#mainpage_slider .post_name').click(function(){
        clearInterval(iId);
        iId = setInterval(function(){$('#mainpage_slider .post_name').click();},4500);

        var me = $(this).parent().find('.active');	var label = $(this); var p_img = $('#mainpage_slider .post_img'); var text; var img;	var an_label = $('#mainpage_slider .pre_name');	var an_img = $('#mainpage_slider .pre_img');
        var cur_label = $('#mainpage_slider .active').find('.name').html();	var cur_img = $('#mainpage_slider .active').find('.img').html();

        if(me.nextAll().length == 1) {
            text =  $('#mainpage_slider li.item').first().find('.name').html();
            img =  $('#mainpage_slider li.item').first().find('.img').html();

        }
        else if(me.nextAll().length == 0) {
            text = $('#mainpage_slider li.item').first().next().find('.name').html();
            img = $('#mainpage_slider li.item').first().next().find('.img').html();
        }
        else {
            text = me.next().next().find('.name').html();
            img = me.next().next().find('.img').html();
        }

        if(me.nextAll().length > 0) {
            me.stop().animate({opacity:0},350,function(){$(this).removeClass('active');});
            me.next().addClass('active').stop().animate({opacity:1},350);
        }
        else {
            me.stop().animate({opacity:0},350,function(){$(this).removeClass('active');});
            $('#mainpage_slider ul li').first().addClass('active').stop().animate({opacity:1},350);
        }

        label.stop().animate({opacity:0, right: '300px'},200,function(){ $(this).css({right: "-280px"}); $(this).html(text); $(this).stop().animate({opacity:1, right: '0px'},200);} );
        p_img.stop().animate({opacity:0, right: '400px', top: "0px"},200,function(){ $(this).css({right: "-280px",top: "90px"}); $(this).html(img); $(this).stop().animate({opacity:1, right: '20px'},200);});
        p_img.children('img').stop().animate({width: '420px', height: '320px'}, 200, function(){$(this).stop().animate({width: '190px', height: '145px'},200)});

        an_label.stop().animate({opacity:0, left: '-300px'},200,function(){ $(this).css({left: "280px"}); $(this).html(cur_label); $(this).stop().animate({opacity:1, left: '0px'},200);} );
        an_img.stop().animate({opacity:0, left: '-400px', top: "0px"},200,function(){ $(this).css({left: "280px",top: "90px"}); $(this).html(cur_img); $(this).stop().animate({opacity:1, left: '20px'},200);});
        an_img.children('img').stop().animate({width: '420px', height: '320px'}, 200, function(){$(this).stop().animate({width: '190px', height: '145px'},200)});
    });

    $('#mainpage_slider .pre_name').click(function(){
        clearInterval(iId);iId = setInterval(function(){$('#mainpage_slider .post_name').click();},4500);
        var me = $(this).parent().find('.active');	var label = $(this); var p_img = $('#mainpage_slider .pre_img');	var text; var img;	var an_label = $('#mainpage_slider .post_name');	var an_img = $('#mainpage_slider .post_img');	var cur_label = $('#mainpage_slider .active').find('.name').html();	var cur_img = $('#mainpage_slider .active').find('.img').html();

        if(me.prevAll().length == 1) {
            text = $('#mainpage_slider li.item').last().find('.name').html();
            img = $('#mainpage_slider li.item').last().find('.img').html();

        }
        else if(me.prevAll().length == 0) {
            text = $('#mainpage_slider li.item').last().prev().find('.name').html();
            img = $('#mainpage_slider li.item').last().prev().find('.img').html();
        }
        else {
            text = me.prev().prev().find('.name').html();
            img = me.prev().prev().find('.img').html();
        }

        if(me.prevAll().length > 0) {
            me.stop().animate({opacity:0},450,function(){$(this).removeClass('active')});
            me.prev().addClass('active').stop().animate({opacity:1},600);
        }
        else {

            me.stop().animate({opacity:0},450,function(){$(this).removeClass('active')});
            $('#mainpage_slider ul li').last().addClass('active').stop().animate({opacity:1},600);
        }

        label.stop().animate({opacity:0, left: '300px'},200,function(){ $(this).css({left: "-280px"}); $(this).html(text); $(this).stop().animate({opacity:1, left: '0px'},200);} );
        p_img.stop().animate({opacity:0, left: '300px',top: "0px"},200,function(){ $(this).css({left: "-280px",top: "90px"}); $(this).html(img); $(this).stop().animate({opacity:1, left: '20px'},200);});
        p_img.children('img').stop().animate({width: '420px', height: '320px'}, 200, function(){$(this).stop().animate({width: '190px', height: '145px'},200)});

        an_label.stop().animate({opacity:0, right: '-300px'},200,function(){ $(this).css({right: "280px"}); $(this).html(cur_label); $(this).stop().animate({opacity:1, right: '0px'},200);} );
        an_img.stop().animate({opacity:0, right: '-400px', top: "0px"},200,function(){ $(this).css({right: "280px",top: "90px"}); $(this).html(cur_img); $(this).stop().animate({opacity:1, right: '20px'},200);});
        an_img.children('img').stop().animate({width: '420px', height: '320px'}, 200, function(){$(this).stop().animate({width: '190px', height: '145px'},200)});
    });
})