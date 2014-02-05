function initCustomScrollbar(){
    $('.scroll-standard').scrollbar();

    $('.scroll-simple').scrollbar({
        "type": "simple"
    });

    $('.external-scroll').scrollbar({
        "autoScrollSize": false,
        "scrollx": $('.external-scroll_x'),
        "scrolly": $('.external-scroll_y')
    });

}

function destroyCustomScrollbar(){
    $('.scroll-content').scrollbar('destroy');
}

$(document).ready(function(){
    initCustomScrollbar();

    $('.buttons').each(function(){
        $(this).find('input.default').attr('checked', true);
    }).find('input:radio').change(function(){
            $(this).closest('form').next().find('.resizable').css($(this).attr('name'), $(this).val());
        });

});