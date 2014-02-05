$( function() {
	var j = 0;
	$( '.e-mainMenu_header > li' ).each( function( i ) {
        $( this ).addClass( 'nth' + j );
    	j++;
		if (j == 4) {
			j = 0;
		}
	} );
} );