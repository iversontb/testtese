$( function(){
    new Warranty();
} );
var Warranty = function(){
    this.obj = $( '.warranty' );
    this.elems = {
        items: this.obj.find( 'li' ),
        area: this.obj.find( 'area' )
    };
    this.action = false;
    this.arrLines = [];

    this.init();
};
    Warranty.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this,
                elems = self.elems;

            return {
                build: function(){
                    self.activeItem = elems.items.filter( '.' + elems.area.filter( '.active' ).attr( 'href' ) );
                    self.activeItem.css( { display: 'block' } );
                    self.circle = $( '<u class="after"></u>' );
                    self.activeItem.parent().append( self.circle );

                    var angle = self.activeItem.attr( 'data-angle' );

                    self.circle.css( {
                        '-moz-transform': 'rotate(' + angle + 'deg)',
                        '-o-transform': 'rotate(' + angle + 'deg)',
                        '-webkit-transform': 'rotate(' + angle + 'deg)',
                        'transform': 'rotate(' + angle + 'deg)'
                    } );

                    elems.area.each( function( i ){
                        var curArr = $( this ).attr( 'coords' ).split( ','),
                            countItems = curArr.length,
                            j,
                            counter = 0;

                        self.arrLines[ i ] = [];

                        for( j=0; j < countItems; j+=2 ){
                            self.arrLines[ i ][ counter ] = [];
                            self.arrLines[ i ][ counter ][ 0 ] = curArr[ j ];
                            self.arrLines[ i ][ counter ][ 1 ] = curArr[ j + 1 ];
                            counter++;
                        }
                    } );
                    self.core.controls();
                },
                checkCross: function( first, second ){
                    var isCross = false,
                        x1 = parseFloat( first[ 0 ][ 0 ] ),
                        x2 = parseFloat( first[ 1 ][ 0 ] ),
                        x3 = parseFloat( second[ 0 ][ 0 ] ),
                        x4 = parseFloat( second[ 1 ][ 0 ] ),
                        y1 = parseFloat( first[ 0 ][ 1 ] ),
                        y2 = parseFloat( first[ 1 ][ 1 ] ),
                        y3 = parseFloat( second[ 0 ][ 1 ] ),
                        y4 = parseFloat( second[ 1 ][ 1 ] ),
                        x, y,
                        a1 = y1 - y2,
                        b1 = x2-x1,
                        c1 = -a1 * x1 - b1 * y1,
                        a2 = y3 - y4,
                        b2 = x4-x3,
                        c2 = -a2 * x3 - b2 * y3;

                    x = ( c1 * b2 - c2 * b1 ) / ( b1*a2 - a1 * b2 );
                    y = ( c2 * a1 - c1 * a2 ) / ( a2 * b1 - a1 * b2 );

                    if( (x1 >= x2) && ( ( x < x1 ) && ( x > x2 ) ) ){
                        if( (x3 >= x4) && ( ( x < x3 ) && ( x > x4 ) ) ){
                            isCross = true;
                        } else if( (x4 >= x3) && ( ( x < x4 ) && ( x > x3 ) ) ){
                            isCross = true;
                        }
                    } else if( (x2 >= x1) && ( ( x < x2 ) && ( x > x1 ) ) ){
                        if( (x3 >= x4) && ( ( x < x3 ) && ( x > x4 ) ) ){
                            isCross = true;
                        } else if( (x4 >= x3) && ( ( x < x4 ) && ( x > x3 ) ) ){
                            isCross = true;
                        }
                    }
//                    console.log( x1,x2,x3,x4,x );
//                    console.log( y1,y2,y3,y4,y );
//                    console.log(isCross)

                    return isCross;
                },
                pointInArea: function( point ){
                    var isIn = false,
                        countItems = self.arrLines.length,
                        countPoints,
                        curPoint,
                        curArea,
                        countCross,
                        i, j,
                        first,
                        second;

                    for( i = 0; i < countItems; i++ ){
                        curArea = self.arrLines[ i ];
                        countPoints = curArea.length;
                        countCross = 0;

                        for( j = 0; j < countPoints; j++ ){
                            second = [ point, [ 626, 627 ] ];
                            curPoint = curArea[ j ];
                            if( j == countPoints - 1 ){
                                first = [ curPoint, curArea[ 0 ] ];
                            } else {
                                first = [ curPoint, curArea[ j + 1 ] ];
                            }

                            if( self.core.checkCross( first, second ) ){

                                countCross++;
                            }
                        }
                        if( countCross == 1 || countCross == 3 ){
                            return { isPoint:true, index: i };
                        };
                    }

                    return isIn;
                },
                controls: function(){
                    elems.area.on( {
                        'click': function(){
                            var curItem = $( this ),
                                newItem = elems.items.filter( '.' + curItem.attr( 'href' )),
                                angle = newItem.attr( 'data-angle' );

                            if( !curItem.hasClass( 'active' ) && !self.action ){
                                elems.area.filter( '.active' ).removeClass( 'active' );
                                curItem.addClass( 'active' );
                                self.action = true;
                                self.activeItem.stop( false, true ).fadeOut( 300 );
                                newItem.stop( false, true ).fadeIn( 300, function(){
                                    self.activeItem = newItem;
                                    self.action = false;
                                } );

                                self.circle.css( {
                                    '-moz-transform': 'rotate(' + angle + 'deg)',
                                    '-o-transform': 'rotate(' + angle + 'deg)',
                                    '-webkit-transform': 'rotate(' + angle + 'deg)',
                                    'transform': 'rotate(' + angle + 'deg)'
                                } );

                                if( !Modernizr.canvas ){
                                    self.circle.removeAttr( 'style' );
                                    if( angle == 48  ) {
                                        self.circle.css( {
                                            backgroundImage: 'url(img/warranty-circle-' + angle + '.png)',
                                            width: 398,
                                            height: 365
                                        } );
                                    } else if( angle == 99  ) {
                                        self.circle.css( {
                                            backgroundImage: 'url(img/warranty-circle-' + angle + '.png)',
                                            width: 365,
                                            height: 375
                                        } );
                                    } else if( angle == 154  ) {
                                        self.circle.css( {
                                            backgroundImage: 'url(img/warranty-circle-' + angle + '.png)',
                                            width: 365,
                                            height: 379
                                        } );
                                    } else if( angle == 205  ) {
                                        self.circle.css( {
                                            backgroundImage: 'url(img/warranty-circle-' + angle + '.png)',
                                            width: 395,
                                            height: 365,
                                            left: 100
                                        } );
                                    } else if( angle == 258  ) {
                                        self.circle.css( {
                                            backgroundImage: 'url(img/warranty-circle-' + angle + '.png)',
                                            width: 365,
                                            height: 365,
                                            left: 131,
                                            top: 131
                                        } );
                                    } else if( angle == 308  ) {
                                        self.circle.css( {
                                            backgroundImage: 'url(img/warranty-circle-' + angle + '.png)',
                                            width: 364,
                                            height: 402,
                                            top: 94
                                        } );
                                    }
                                }

                            }
                            return false;
                        }
                    } );
                    self.obj.on( {
                        'click': function( e ){
                            var point = [],
                                data;

                            if ( e.offsetX ){
                                point = [ Math.round( e.pageX - self.obj.offset().left ), Math.round( e.pageY - self.obj.offset().top ) ];
                            }else {
                                point = [ Math.round( e.originalEvent.layerX ), Math.round( e.originalEvent.layerY ) ];
                            }

                            data = self.core.pointInArea( point );
                            if( data.isPoint ){
                                elems.area.eq( data.index ).trigger( 'click' );
                            }
                        },
                        'mousemove': function( e ){
                            var point = [],
                                data;

                            if ( e.offsetX ){
                                point = [ Math.round( e.pageX - self.obj.offset().left ), Math.round( e.pageY - self.obj.offset().top ) ];
                            }else {
                                point = [ Math.round( e.originalEvent.layerX ), Math.round( e.originalEvent.layerY ) ];
                            }

                            data = self.core.pointInArea( point );
                            if( data.isPoint ){
                                self.obj.addClass( 'active' );
                            } else {
                                self.obj.removeClass( 'active' );
                            }
                        }
                    } );
                }
            };
        }
    };