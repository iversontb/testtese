$(function(){
    $('#accordion > li ul')
        .click(function(event){
            event.stopPropagation();
        })
        .filter(':not(:first)')
        .hide();

    $('#accordion > li, #accordion > li > ul > li, #accordion > li > ul > li > ul > li').click(function(){
        var selfClick = $(this).find('ul:first').is(':visible');
        if(!selfClick) {
            $(this)
                .parent()
                .find('> li ul:visible')
                .slideToggle();
        }

        $(this)
            .find('ul:first')
            .stop(true, true)
            .slideToggle();
    });

    jQuery(".go_up").click(function(){
        jQuery('html, body').animate({scrollTop: "0px"});
    });
} );