$(function(){
    Ares.init();
});


/*
	Ares scripts
		Depend: 
			js/jquery-1.8.2.min.js
		Methods:
			init(init object),
			controls(object controls);
		
	
	Ares classes:
		
		History:
			Depend: 
				js/history.js
			Propperties:
				obj(slider conteiner).
			Methods:
				init(init object).
				
		BigGallery:
			Depend: 
				js/coin-slider.min.js
			Propperties:
			Methods:
				init(init object),
				addElement(add element for history),
				loadContent(load content on change url).
				
	
*/
var Ares = {
	init: function() {
		var self = this,
            slider = $( '#index-gallery' );

		self.history = new self.History();
		
		self.history.addElement( '.menu a' );

        self.messager = new Ares.Messager();

		if( slider.length && slider.find( ' > a ' ).length > 1 ) {
			self.bigGallery = new self.BigGallery( slider );
		} else if ( $( '.portfolio' ).length ) {
			self.portfolio = new self.Portfolio();
		} else if ( $( '#feedback').length ){
            self.feedback = new self.Feedback();
        }
	}
};

/*
	History class
*/
Ares.History = function() {
	this.ajaxRequest = new XMLHttpRequest();
	
	this.init();	
};

	Ares.History.prototype = {
		
		// init object
		init: function() {
			var self = this;
			
			window.onpopstate = function() {
				self.loadContent( history.state );
			}
		},
		// add element for history
		addElement: function( selector ) {
			var self = this,
                i,
				arrElems = selector.split(','),
                body = $( 'body' );

			for( i = 0; i < arrElems.length; i++) {

                body.off( 'click', $.trim(arrElems[ i ]) );
                body.on( 'click', $.trim(arrElems[ i ]), function() {
					var state = {
						title: this.getAttribute( "title" ),
						url: this.getAttribute( "href" )
					};

					history.pushState( state, state.title, state.url );

					self.loadContent( state );
					
					return false;
				} );
			}			
		},
		// load content on change url
		loadContent: function( state ) {
			var self = this,
				url = state.url.replace( '.html', '' ),
				title = state.title,
				logo = '<a href="/" title="Web Ares Lab"><img class="logo" src="img/logo.png" width="266" height="203" alt="Web Ares Lab"/></a>',
				content = $( '.site__wrapper'),
                list = $( '.menu > a' );

            list.filter( '.active' ).removeClass( 'active' );
			$( 'title' ).text( title );
						
			if( url == '/' ) {
				url = '/index';
				logo = '<h1><img class="logo" src="img/logo.png" width="266" height="203" alt="Web Ares Lab"/></h1>';
			} else if ( url.split( '/' )[ 1 ] == 'about-us' ) {
                list.eq( 0 ).addClass( 'active' );
			} else if ( url.split( '/' )[ 1 ] == 'portfolio' ) {
                list.eq( 1 ).addClass( 'active' );
			} else if ( url.split( '/' )[ 1 ] == 'news' ) {
                list.eq( 2 ).addClass( 'active' );
			} else if ( url.split( '/' )[ 1 ] == 'contact' ) {
                list.eq( 3 ).addClass( 'active' );
			}
			
			$( '.logo' ).parent().remove();
			$( '.header' ).append( logo );
			
			self.addElement( '.header > a' );
			
			if( !content.hasClass( 'site__wrapper_' + ( url.split( '/' ).join( '-' ) ).substr( 1 ) ) ) {
				content.removeAttr( 'class' );
				content.addClass( 'site__wrapper' );
				content.addClass( 'site__wrapper_' +  ( url.split( '/' ).join( '-' ) ).substr( 1 ) );
				
				self.ajaxRequest.abort();
				self.ajaxRequest = $.ajax({//данные для аякс запроса
					url: content.attr('data-php'),//путь к php скрипту берем с атрибута data-php блока b-contentWrap
					data: 'page=' + url,
					dataType: 'json', // определяем тип получаемых данных
					timeout: 20000,
					type: "GET",
					beforeSend: function() {
						content.append( '<div class="preload"></div>' );
						content.find( '.preload' ).fadeIn( 300 );
					},
					success: function ( msg ){
						
						setTimeout( function() {
							var startH = content.height(),
								newH;
							
							content.css( {
								height: startH
							} );
							
							content.find( '> *' ).each( function() {
								if( !$( this ).hasClass( 'preload' ) ) {
									$( this ).remove();
								}
							} );
							
							content.append( msg.html );
							
							content.height( 'auto' );
							newH = content.height();
							content.height( startH );
							
							content.animate( { height: newH }, 300, function() {
								
								$( this ).height( 'auto' );
								$( this ).find( '.preload' ).stop( false, false ).fadeOut( 300, function() {
									$( this ).remove();
								} );
								
								Ares.init();
							} );
						}, 300 );
					},
					error: function (XMLHttpRequest){
						if(XMLHttpRequest.statusText!="abort"){//если запрос отменен не выводим сообщение об ошибке
							// действие при возникновении ошибки
							alert('Нада сделать дизайн для сообщений')		
						}
						content.find( '.preload' ).stop( false, false ).fadeOut( 300, function() {
							$( this ).remove();
						} );
					}
				});
			}
		}
	};
/*
	/History class
*/

/*
	BigGallery class
*/
Ares.BigGallery = function( obj ) {
	this.obj = obj;
	
	this.init();
};
	Ares.BigGallery.prototype = {
		
		// init object
		init: function() {
			var self = this;
			
			self.obj.coinslider({	
				width: 968,
				height: 339,
				delay: 5000,
				spw: 5,
				links: true,
				sph: 4
			});
		}
	};
/*
	/BigGallery class
*/
Ares.Portfolio = function() {
	this.elems = {
		slider: $( '.scroll' ),
		bigItems: $( '.portfolio > ul > li' )
	};
	this.timeline = [];
	this.step = 0;
	this.play = true;
	
	this.init();
	
};
	Ares.Portfolio.prototype = {
		init: function() {
			var self = this;
			
			self.doOnLoadImg();
			self.controls();
		},
		controls: function() {
			var self = this;
			
			$( '.portfolio' ).hover( function() {
				self.play = false;
			}, function() {
				self.play = true;
			} );			
		},
		slide: function( toTime ) {
			var self = this;
			
			self.timeline[ self.step ][ 0 ].pause(0);
			self.timeline[ toTime ][ 1 ].pause(0);
			
			self.timeline[ self.step ][ 0 ].play();
			setTimeout( function() {
				self.timeline[ toTime ][ 1 ].play();
			}, 300);		
		},
		addSlider: function() {
			var self = this,
				i,
				elems = self.elems.bigItems,
				elemsCount = elems.length,
				nextItem = 0;
			
			for( i = 0; i < elemsCount; i++ ) {
				self.timeline[ i ] = [];
				self.timeline[ i ][ 0 ] = TweenMax.fromTo( elems.eq( i ), 0.3,{
						css: {
							scaleX: 1,
							scaleY: 1,
							autoAlpha: 1
						}
					}, {
						css: {
							scaleX: 1.5,
							scaleY: 1.5,
							autoAlpha: 0
						},
						paused: true					
					} );
				self.timeline[ i ][ 1 ] = TweenMax.fromTo( elems.eq( i ), 0.3,{
					css: {
						scaleX: 0.5,
						scaleY: 0.5,
						autoAlpha: 0
					}
				}, {
					css: {
						scaleX: 1,
						scaleY: 1,
						autoAlpha: 1
					},
						paused: true
				} );
			}
			
			setTimeout( function() {
				render();
			}, 10000 );
			
			function render() {
				if( self.play ) {
					nextItem = self.step + 1;
					
					if ( nextItem == elemsCount ){
						nextItem = 0;
					}
					self.elems.slider.slider( 'value', nextItem );
				}
				setTimeout( function() {
					render();
				}, 10000 );
			}
			self.elems.slider.slider( {
				animate: 'slow',
				min: 0,
				max: elemsCount - 1,
				change: function( e, obj) {
					if( self.step != obj.value ) {
						self.slide( obj.value );
						self.step = obj.value;
					}
				}
			} );
		},
		addSubSlider: function() {
			var self = this,
				htmlString = '';
				
			self.elems.bigItems.each( function(){
				htmlString = '<div class="sub-gallery">\
				                <ul class="portfolio__using">' + $( this).find( '.portfolio__using' ).html() + '</ul>\
								<a href="' + $( this ).find( '>a' ).eq(0).attr( 'href' ) + '">\
									<img src="' + $( this ).find( '>a' ).eq(0).attr( 'data-pic' ) + '" width="680" height="394" >\
								</a>\
								<ul class="sub-gallery__layout">';


				$( this ).find( '> a' ).each( function(){
					htmlString += '<li class="sub-gallery__item">\
										<a href="' + $( this ).attr('href') + '" data-pic="' + $( this ).attr('data-pic') + '">\
											<img src="' + $( this ).find( 'img' ).attr( 'src' ) + '" width="232" height="122" >\
										</a>\
									</li>';
				} );
				
				htmlString += '</ul>\
				<ul class="portfolio__programmers">' + $( this).find( '.portfolio__programmers' ).html() + '</ul>\
                </div>';
				$( this ).html( htmlString );

                new Ares.VerticalGalery( $(this) );
			} );
			
			self.elems.bigItems.eq(0).css( {'visibility':'visible'} );
			
		},
		// do on load image
		doOnLoadImg: function() {
			var	self = this,
				loadCount = 0,
				arrUrl = [],
				i;
			
			self.elems.bigItems.find( '>a' ).each( function() {
				arrUrl[ arrUrl.length ] = $( this ).attr( 'data-pic' );
			});
			self.elems.bigItems.find( '>a img' ).each( function() {
				arrUrl[ arrUrl.length ] = $( this ).attr( 'src' );
			});
			
			for( i = 0; i < arrUrl.length; i++) {
				( function loadImg( value ) {
					var	img = new Image();
						
					if ( typeof this == 'object' ) {
						$( img ).load( function() {
							loadCount++;
							if( loadCount == arrUrl.length ){
								self.addSubSlider();
								self.addSlider();
							} 
						} ).attr( 'src', value );
					}
				} )( arrUrl[ i ] );
			}	
		}
		
	};
	
Ares.VerticalGalery = function( obj ) {
	this.obj = obj;
	this.move = false;
    this.TL = new TimelineMax( { paused: true } );
	
	this.init()
};
	Ares.VerticalGalery.prototype = {
		init: function() {
			var self = this;

            self.startView();
			self.controls();
		},
		controls: function(){
			var self = this,
                items = self.obj.find( '.sub-gallery__item'),
                subMenu = self.obj.find( '.sub-gallery__layout');

			self.obj.find( '.sub-gallery__item' ).on( 'click', function() {
				if( !$( this ).hasClass( 'active' ) ) {
					self.obj.find( '..sub-gallery__item' ).removeClass( 'active' );
					$( this ).addClass( 'active' );
					self.schangeSlide( $( this ) );
				}
				return false;
			} );

            subMenu.hover( function() {
                $( this).find('.vertical-scroll').fadeIn( 300 );
            }, function() {
                $( this).find('.vertical-scroll').fadeOut( 300 );
            } );

            if( items.length > 3 ) {
                subMenu.on( "mousewheel DOMMouseScroll", function (e) {
                    var e = e || window.event,
                        delta = e.originalEvent.wheelDelta;

                    if( delta == undefined ){
                        delta = -(e.originalEvent.detail);
                    }
                    ( delta > 0 ) ? delta = -20: delta = 20;

                    delta = (self.scroll.slider( 'value' ) - delta );
                    self.scroll.slider( 'value', delta );
                    return false;
                });
            }
		},
        startView: function(){
            var self = this,
                items = self.obj.find( '.sub-gallery__item'),
                time = 1 / items.length,
                animCount = items.length- 3,
                time2 = 1 / animCount,
                deltaTop = animCount * 133;

            items.each( function( i ) {
                var curElem = $( this),
                    curTop = 14 + (133 * i);

                self.TL.insert( TweenMax.fromTo( curElem , 1, {
                    css:{
                        top: curTop
                    }
                }, {
                    css: {
                        top: curTop - deltaTop
                    },
                    ease: Linear.easeNone
                } ), 0 );
                curElem.css( { top: curTop } );
            } );
            items.eq(0).addClass( 'active' );

            if( items.length > 3 ) {
                self.scroll = $('<li class="vertical-scroll"></li>');
                self.obj.find('.sub-gallery__layout').append( self.scroll );

                self.scroll.slider({
                    orientation: "vertical",
                    min: 0,
                    max: 1000,
                    value: 1000,
                    change: function(e,obj){
                       // self.obj.css( { display: 'none' } );
                        self.TL.seek(1 - obj.value/1000);
                        self.obj.find( '.sub-gallery__item' ).css( { display: 'block' } );
                    },
                    slide: function( event, ui ) {
                      //  self.obj.css( { display: 'none' } );
                        self.TL.seek(1 - ui.value/1000);
                        self.obj.find( '.sub-gallery__item' ).css( { display: 'block' } );
                    }
                });
            }
        },
		schangeSlide: function( obj ) {
			var self = this,
				newBlock = [],
				startBlock = [];
			
			if( !self.move ){
				self.move = true;
				
				self.obj.find( '.sub-gallery' ).prepend( obj.html() );
				newBlock = self.obj.find( '.sub-gallery > a' ).eq( 0 );
				startBlock = self.obj.find( '.sub-gallery > a' ).eq( 1 );
				
				newBlock.css( {
					opacity: 0
				} );
				
				newBlock.find('img').attr('src', newBlock.attr('data-pic'));
				
				newBlock.animate( { opacity: 1 }, 500 );
				startBlock.animate( { opacity: 0 }, 500, function() {
					$( this ).remove();
					self.move = false;
				} );
				
				
			}
		},
		slideNext: function() {
			var self = this;
			
			self.obj.find('.sub-gallery__prev').css( { 'display': 'block' } );
			self.elems.third.next().css( {
				display: 'block',
				top: 399,
				opacity: 0
			} );
			
			self.elems.first.animate( { 
				opacity: 0,
				top: -133 
			}, 300 );
			self.elems.second.animate( { 
				top: 0 
			}, 300 );
			self.elems.third.animate( { 
				top: 133 
			}, 300 );
			self.elems.third.next().animate( { 
				top: 266,
				opacity: 1
			}, 300, function() {
				self.move = false;
			} );
			
			self.elems.first = self.elems.second;
			self.elems.second = self.elems.third;
			self.elems.third = self.elems.third.next();
			
			if( !self.elems.third.next().length ) {
				self.obj.find('.sub-gallery__next').css( { 'display': 'none' } );
			}
			
		},
		slidePrev: function() {
			var self = this;
			
			self.obj.find('.sub-gallery__next').css( { 'display': 'block' } );
			self.elems.first.prev().css( {
				display: 'block',
				top: -133,
				opacity: 0
			} );
			
			self.elems.first.animate( { 
				top: 133 
			}, 300 );
			self.elems.second.animate( { 
				top: 266
			}, 300 );
			self.elems.third.animate( { 
				top: 399,
				opacity: 0
			}, 300 );
			self.elems.first.prev().animate( { 
				top: 0,
				opacity: 1
			}, 300, function() {
				self.move = false;
			} );
			
			self.elems.third = self.elems.second;
			self.elems.second = self.elems.first;
			self.elems.first = self.elems.first.prev();
			
			if( !self.elems.first.prev().length ) {
				self.obj.find('.sub-gallery__prev').css( { 'display': 'none' } );
			}
						
		}	
	};

Ares.Feedback = function(){
    this.obj = $( '#feedback' );
    this.elems = {
        name: this.obj.find( '.feedback__name' ),
        mail: this.obj.find( '.feedback__mail' ),
        message: this.obj.find( '.feedback__area' )
    };
    this.request = new XMLHttpRequest();

    this.init();
};
    Ares.Feedback.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.controls();
        },
        core: function(){
            var self = this;

            return {
                controls: function(){
                    self.obj.on( {
                        'submit': function(){
                            self.validate();

                            return false;
                        }
                    } );
                }
            };
        },
        validate: function(){
            var self = this,
                elems = self.elems,
                checker = true,
                resultString = '';

            if( elems.name.val() == '' ){
                resultString += '<p>Введите ваше имя.</p>';
                checker = false;
            }
            if( elems.mail.val() ==  '' ){
                resultString += '<p>Заполните поле "E-mail"</p>';
                checker = false;
            } else if( !( /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i.test( elems.mail.val() ) ) ){
                resultString += '<p>Некорректный "E-mail"</p>';
                checker = false;
            }

            if( !checker ){
                Ares.messager.show( {
                    content: resultString,
                    type: 'error'
                } );
            } else {
                self.sendLetter();
            }
        },
        sendLetter: function(){
            var self = this;

            self.request.abort();
            self.request = $.ajax({//данные для аякс запроса
                url: self.obj.attr( 'action' ),
                data: self.obj.serialize(),
                dataType: 'html', // определяем тип получаемых данных
                timeout: 20000,
                type: "GET",
                success: function( msg ){
                    Ares.messager.show( {
                        content: msg
                    } );
                },
                error: function( msg ){
                    Ares.messager.show( {
                        content: msg.statusText,
                        type: 'error'
                    } );
                }
            });
        }
    };

Ares.Messager = function(){
    this.obj = $( '<div class="message"><div class="message__content"></div></div>' );
    this.content = this.obj.find( '.message__content' );

    this.init();
};
    Ares.Messager.prototype = {
        init: function(){
            var self = this;

            $( 'body' ).append( self.obj );

            self.obj.on( {
                'click.ares': function(){
                    self.hide();
                }
            } );
        },
        show: function( params ){
            var self = this,
                content = params.content,
                type = params.type || 'good';

            self.content.addClass( type );
            self.content.append( content );

            self.content.css( { top: ( $( window).height() - self.content.height() ) / 2  } )

            self.obj.fadeIn( 300 );
            self.timer = setTimeout( function(){
                self.hide();
            }, 5000 );
        },
        hide: function(){
            var self = this;

            clearTimeout( self.timer );

            self.obj.fadeOut( 300, function(){
                self.content.html('');
                self.content.removeAttr( 'class' );
                self.content.addClass( 'message__content' );
            } )
        }
    };