$( function() {
	var j = 0;
	$( '.header > .menu > a' ).each( function( i ) {
        $( this ).addClass( 'nth' + j );
    	j++;
		if (j == 4) {
			j = 0;
		}
	} );
} );