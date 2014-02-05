$(function(){
    var slider = $( '.ares-slider' );

    new AresSlider1( {
        obj: slider,
        items: slider.find( '> .contBox' ),
        btnNext: slider.find( '.ares-slider__next' ),
        btnPrev: slider.find('.ares-slider__prev'),
        duration: 5000
    } );
});

var AresSlider1 = function( params ){
    this.obj = params.obj;
    this.elems = {
        btnPrev: params.btnPrev,
        btnNext: params.btnNext,
        items: params.items
    };
    this.action = false;
    this.duration = params.duration || 3000;

    this.init();
};
    AresSlider1.prototype = {
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
                    var count = elems.items.length,
                        i,
                        points = $( '<ul class="ares-slider__points"></ul>' );


                    for( i = 0; i < count; i++ ){
                        points.append( '<li></li>' );
                    }
                    self.obj.append( points );

                    elems.points = points.find( 'li' );

                    elems.points.each( function(){
                        this.circle = new AresCircleTimer( {
                            obj: $( this ),
                            height: 3,
                            color: '#ff3d86',
                            duration: self.duration

                        } );
                    } );

                    elems.points.eq( 0 ).addClass( 'active' );
                    elems.items.eq( 0 ).css( { display: 'block' } );

                    self.core.controls();

                    elems.points[ 0 ].circle.play();
                    self.core.slideToNext();
                },
                slideToNext: function(){
                    self.timer = setTimeout( function(){
                        elems.btnNext.trigger( 'click' );
                    }, self.duration );
                },
                controls: function(){
                    elems.btnPrev.on( {
                        'click': function(){
                            var index = ( ( elems.points.filter( '.active' ).index() - 1 ) == -1 ) ? (elems.points.length - 1) :( elems.points.filter( '.active' ).index() - 1 );

                            self.slideTo( index );
                        }
                    } );
                    elems.btnNext.on( {
                        'click': function(){
                            var index = ( ( elems.points.filter( '.active' ).index() + 1 ) == elems.points.length )? 0:( elems.points.filter( '.active' ).index() + 1 );

                            self.slideTo( index );
                        }
                    } );
                    elems.points.on( {
                        'click': function(){
                            var curItem = $( this );

                            if( !curItem.hasClass( 'active' ) ){
                                self.slideTo( curItem.index() );
                            }
                        }
                    } );
                }
            };
        },
        slideTo: function( index ) {
            var self = this,
                elems = self.elems,
                activeIndex = elems.points.filter( '.active' ).index(),
                direction,
                curW = 734,
                activeItem = elems.items.eq( activeIndex ),
                activePoint = elems.points.eq( activeIndex ),
                newItem = elems.items.eq( index),
                newPoint = elems.points.eq( index );

            clearTimeout( self.timer );
            activePoint[ 0 ].circle.stop();
            if( !self.action ){
                self.action = true;

                if( activeIndex < index ){
                    direction = 1;
                } else {
                    direction = -1;
                }

                if( activeIndex == 0 && index == ( elems.points.length - 1 ) ){
                    direction = -1;
                } else if ( activeIndex == ( elems.points.length - 1 )  && index == 0 ){
                    direction = 1;
                }

                activePoint.removeClass( 'active' );
                newPoint.addClass( 'active' );

                newItem.css( {
                    display: 'block',
                    left: curW * -direction,
                    opacity: 0
                } );
                activeItem.animate( {
                    left: curW * direction,
                    opacity: 0
                }, 300, function() {
                    $( this ).css( { display: 'none' } );
                    self.action = false;
                } );
                newItem.animate( {
                    left: 0,
                    opacity: 1
                }, 300 );
                newPoint[0].circle.play();
                self.core.slideToNext();
            }
        }
    };

var AresCircleTimer = function( params ){
    this.obj = params.obj;
    this.height = params.height || 2;
    this.color = params.color || "#00ff00";
    this.duration = params.duration || 3000;
    this.action = true;

    this.init();
};
    AresCircleTimer.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this;

            return {
                build: function(){
                    self.canvas = document.createElement( 'canvas' );
                    self.ctx = self.canvas.getContext( '2d' );

                    self.canvas.width = self.obj.height() + ( self.height * 2 );
                    self.canvas.height = self.obj.height() + ( self.height * 2 );

                    self.obj.append( self.canvas );
                    $( self.canvas ).css( {
                        position: 'absolute',
                        top: -self.height,
                        left: -self.height
                    } );

                    self.centerX = self.canvas.width / 2; // Координата центра круга по оси X
                    self.centerY = self.canvas.width / 2; // Координата центра круга по оси Y
                    self.radius = self.obj.height() / 2 + ( self.height / 2 ); // Радиус окружности
                }
            };
        },
        stop: function(){
            var self = this;

            self.action = false;
        },
        play: function(){
            var self = this,
                from = 1.5 * Math.PI,
                to = 3.5 * Math.PI,
                start = new Date().getTime();

            setTimeout(function() {
                var now = (new Date().getTime()) - start; // Текущее время
                var progress = now / self.duration; // Прогресс анимации

                var result = (to - from) * progress + from;

                self.ctx.clearRect( 0, 0, self.obj.height() + ( self.height * 2 ), self.obj.height() + ( self.height * 2 ));

                self.ctx.beginPath();
                self.ctx.arc( self.centerX, self.centerY, self.radius, from, result, false);
                self.ctx.lineWidth = self.height; // Толщина обводки (границы) окружности
                self.ctx.strokeStyle = self.color; // Цвет обводки (границы) окружности
                self.ctx.stroke();

                if (progress < 1 && self.action) // Если анимация не закончилась, продолжаем
                    setTimeout(arguments.callee, 10);
                else {
                    self.action = true;
                    self.ctx.clearRect( 0, 0, self.obj.height() + ( self.height * 2 ), self.obj.height() + ( self.height * 2 ));

                }
            }, 10);

        }
    };