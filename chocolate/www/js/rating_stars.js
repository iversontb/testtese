$(function(){
    var stars = jQuery('.rating .niceRadio');
    stars.hover(function() {
        var index = stars.index(jQuery(this));
        for (var i = 0; i <= index; i++) {
            jQuery(stars[i]).css('background', 'url("img/radio.png")');
        }
    }, function(){
        var index = stars.index(jQuery('.rating span.radioChecked'));
        if (index < 0 ) {
            stars.css({ background: 'url("img/radio.png")', backgroundPosition: '-23px 0' });
        } else {
            for (var i = index+1; i <= stars.length; i++) {
                jQuery(stars[i]).css({ background: 'url("img/radio.png")', backgroundPosition: '-23px 0' });
            }
        }
    });
} );

