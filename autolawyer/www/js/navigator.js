$( function(){
    var upButton = $( '.up' );
    upButton.on( {
        'click': function(){
            var curItem = $( this ),
                newClass = curItem.attr('data-href'),
                nextItemTop = $( '.' + newClass  ).offset().top;
            $( 'html, body' ).stop( true, false );
            $( 'html, body' ).animate( { scrollTop: nextItemTop  }, 300 );
        }
    });
});