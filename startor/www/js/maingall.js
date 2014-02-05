$(function(){

    jQuery(".excellence").jCarouselLite({
        auto: 1000,
        speed: 1000,
        visible: 7
    });

    $('#slides').slidesjs({
        width: 947,
        height: 278,
        navigation: false,
        play: {
            active: true,
            auto: true,
            interval: 5000,
            swap: true
        }
    });


} );