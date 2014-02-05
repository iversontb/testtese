$( function(){
    new Panorama( $( '.panorama' ) );
} );
var Panorama = function( obj ){
    this.obj = obj;
    this.action = false;
    this.duration = 2000;
    this.activeScreen = 0;

    this.init();
};
    Panorama.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this;

            self.elems = {};
            elems = self.elems;

            return {
                build: function(){
                    elems.btnPrev180 = $( '<div class="panorama__btn panorama__btn_prev180"><img src="img/penorama-prev180.png"></div>' );
                    elems.btnPrev = $( '<div class="panorama__btn  panorama__btn_prev"><img src="img/penorama-prev.png"></div>' );
                    elems.btnRound = $( '<div class="panorama__btn  panorama__btn_round"><img src="img/penorama-round.png"></div>' );
                    elems.btnNext = $( '<div class="panorama__btn panorama__btn_next"><img src="img/penorama-next.png"></div>' );
                    elems.btnNext180 = $( '<div class="panorama__btn panorama__btn_next180"><img src="img/penorama-next180.png"></div>' );

                    self.width = self.obj.width();

                    self.obj.height( self.obj.height() );
                    self.obj.find( '>div' ).eq( 0 ).append( self.obj.find( 'img' ).clone() );
                    self.obj.append( elems.btnPrev180 );
                    self.obj.append( elems.btnPrev );
                    self.obj.append( elems.btnRound );
                    self.obj.append( elems.btnNext );
                    self.obj.append( elems.btnNext180 );
                    elems.pics = self.obj.find( 'img' );
                    self.picWidth = elems.pics.eq( 0 ).width();
                    elems.pics.eq( 1 ).css( { left: - self.picWidth } );
                    self.core.controls();
                },
                controls: function(){
                    elems.btnNext.on( {
                        'click': function(){
                            if( !self.action ){
                                self.slideNext( 1 );
                            }
                        }
                    });
                    elems.btnNext180.on( {
                        'click': function(){
                            if( !self.action ){
                                self.slideNext( 2 );
                            }
                        }
                    });
                    elems.btnRound.on( {
                        'click': function(){
                            if( !self.action ){
                                self.slideNext( 3 );
                            }
                        }
                    });
                    elems.btnPrev.on( {
                        'click': function(){
                            if( !self.action ){
                                self.slidePrev( 1 );
                            }
                        }
                    });
                    elems.btnPrev180.on( {
                        'click': function(){
                            if( !self.action ){
                                self.slidePrev( 2 );
                            }
                        }
                    });
                }
            };
        },
        slideNext: function( count ) {
            var self = this,
                elems = self.elems;

            self.action = true;
            elems.pics.eq( 1 ).css( { left: ( 4  - self.activeScreen ) * self.width } );

            elems.pics.eq( 1 ).animate( { left: elems.pics.eq( 1 ).position().left - ( self.width * count ) }, self.duration * count )
            elems.pics.eq( 0 ).animate( {
                left: elems.pics.eq( 0 ).position().left - ( self.width * count )
            }, self.duration * count, function(){
                self.activeScreen = self.activeScreen + count;

                if( self.activeScreen  > 3 ) {
                    self.activeScreen =  self.activeScreen - 4;
                }
                elems.pics.eq( 0 ).css( { left: -self.width * self.activeScreen } );
                elems.pics.eq( 1 ).css( { left: -self.picWidth } );
                self.action = false;

            } );
        },
        slidePrev: function( count ) {
            var self = this,
                elems = self.elems;

            self.action = true;
            elems.pics.eq( 1 ).css( { left: -self.picWidth - self.activeScreen * self.width } );

            elems.pics.eq( 1 ).animate( { left: elems.pics.eq( 1 ).position().left + ( self.width * count ) }, self.duration * count )
            elems.pics.eq( 0 ).animate( {
                left: elems.pics.eq( 0 ).position().left + ( self.width * count )
            }, self.duration * count, function(){
                self.activeScreen = self.activeScreen - count;

                if( self.activeScreen < 0 ) {
                    self.activeScreen =  self.activeScreen + 4;
                }
                elems.pics.eq( 0 ).css( { left: -self.width * self.activeScreen } );
                elems.pics.eq( 1 ).css( { left: -self.picWidth } );
                self.action = false;

            } );
        }
    };