$(function() {
    $(".description dl").height( $(".description dt.active").next().outerHeight() + 32 );
    $(".description dl dt").click(function() {
        $(".description dl dt").removeClass("active");
        $(this).toggleClass("active");
        var newHeight = $(this).next().outerHeight();
        $(".description dl").height( newHeight + 32 );
    })
});