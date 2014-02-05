$( function(){

    $(window).load(function(){
        $('.about_block').height($('.slideWrap').height()-44);
    });

    $(window).resize(function(){
        $('.about_block').height($('.slideWrap').height()-44);
    });
});