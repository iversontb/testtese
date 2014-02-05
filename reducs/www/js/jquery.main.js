$( function(){
    new Menu( $( '.menu' ) );
    $( '.hidden-form .star' ).each( function(){
        new Star( $( this ) );
    } );
    $( '.hidden-form' ).each( function(){
        new HiddenForm( $( this ) );
    } );
    $( '.review' ).each( function(){
        new ReviewMore( $( this ) );
    } );
    $( '.map' ).each( function(){
        new Map( $( this ) );
    } );
    // табуляция на странице продукта
    $(".site_product .info_nav li").click(function(){
        var index = $(this).index();
        $(".site_product .info_nav li").removeClass("current");
        $(this).addClass("current");
        $(".info").stop(false,false).hide();
        $(".info:eq("+index+")").stop(false,false).show();
    });
} );

var Map = function( obj ){
    this.obj = obj;
    this.mapWrap = this.obj.find( '.map__wrap' );
    this.window = $( window );
    this.form = this.obj.find( '.map__form' );
    this.links = this.form.find( 'dd' );
    this.php = this.form.attr( 'action' );
    this.request = new XMLHttpRequest();
    this.markers = [];
    this.infowindow = [];


    this.init();
};
    Map.prototype = {
        init: function(){
            var self= this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self= this;

            return {
                build: function(){
                    google.maps.event.addDomListener(window, 'load', self.core.loadMap);
                },
                loadMap: function(){
                    var latlng = new google.maps.LatLng( parseFloat( self.mapWrap.attr( 'data-lat' ) ),  parseFloat( self.mapWrap.attr( 'data-lang' )) );
                    var myOptions = {
                        zoom:  parseFloat( self.mapWrap.attr( 'data-zoom' ) ),
                        center: latlng,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    self.map = new google.maps.Map( self.mapWrap[0], myOptions );

                    self.core.controls();
                    self.form.trigger( 'submit' );
                    self.core.setSize();
                },
                setSize: function(){
                    self.mapWrap.height( self.obj.width() * 0.5 );
                },
                controls: function(){
                    self.window.on( {
                        'resize': function(){
                            self.core.setSize();
                        }
                    } );
                    self.form.on( {
                        'submit': function(){
                            self.core.setPoints();

                            return false;
                        }
                    } );
                    self.links.on( {
                        'click': function(){
                            self.form.find( 'input[type="text"]' ).val( $( this ).text() );

                            self.form.trigger( 'submit' );
                            return false;
                        }
                    } );
                },
                setPoints: function(){
                    self.request.abort();
                    self.request = $.ajax( {
                        url: self.php,
                        data: self.form.serialize(),
                        dataType: 'json',
                        timeout: 20000,
                        type: "GET",
                        success: function( msg ){
                            self.core.clearMap();
                            if( msg.points.length ){
                                var arrPoints = [],
                                    countPoints = msg.points.length,
                                    i;

                                self.latlngbounds = new google.maps.LatLngBounds();

                                var image = new google.maps.MarkerImage('img/marker.png',
                                    new google.maps.Size(63, 56),
                                    new google.maps.Point(0,0),
                                    new google.maps.Point(20, 50));
                                var image2 = new google.maps.MarkerImage('img/marker2.png',
                                    new google.maps.Size(63, 56),
                                    new google.maps.Point(0,0),
                                    new google.maps.Point(20, 50));

                                for( i=0; i<countPoints; i++ ){
                                    var myLatLng = new google.maps.LatLng( msg.points[ i ].lat, msg.points[ i ].lang );

                                    self.latlngbounds.extend(myLatLng);
                                    var marker = new google.maps.Marker({
                                        position: myLatLng,
                                        map: self.map,
                                        icon: image,
                                        title: msg.points[ i ].title,
                                    });
                                    self.markers[ i ] = marker;

                                    self.infowindow[ i ] = new google.maps.InfoWindow({
                                        content: '<div class="map__tooltip">\
                                                    <h2>' + msg.points[ i ].title + '</h2>\
                                                    <dl>\
                                                        <dt>Телефон:</dt>\
                                                        <dd>' + msg.points[ i ].phone + '</dd>\
                                                        <dt>Email:</dt>\
                                                        <dd><a href="mailto:' + msg.points[ i ].mail + '">' + msg.points[ i ].mail + '</a></dd>\
                                                        <dt>Адрес:</dt>\
                                                        <dd>' + msg.points[ i ].address + '</dd>\
                                                    </dl>\
                                                    <a href="' + msg.points[ i ].link + '">Узнайте Больше!</a>\
                                                    </div>'
                                    });

                                    addInfo( i );

                                    google.maps.event.addListener(self.markers[ i ], 'mouseover', function() {
                                        this.setIcon(image2);
                                    });
                                    google.maps.event.addListener(self.markers[ i ], 'mouseout', function() {
                                        this.setIcon(image);
                                    });

                                    function addInfo( index ){
                                        google.maps.event.addListener(self.markers[ index ], 'click', function() {
                                            self.infowindow[ index ].open( self.map,this );
                                        });
                                    }

                                }
                                self.map.setCenter( self.latlngbounds.getCenter(), self.map.fitBounds(self.latlngbounds));
                            }

                           // console.log( msg )
                        },
                        error: function(XMLHttpRequest){
                            if(XMLHttpRequest.statusText!="abort"){
                                alert("При попытке отправить сообщение произошла неизвестная ошибка. \n Попробуй еще раз через несколько минут.");
                            }
                        }
                    } );
                },
                clearMap: function(){
                    if (self.markers.length) {
                        for (var i = 0; i < self.markers.length; i++) {
                            self.markers[ i ].setMap(null);
                        }
                        self.infowindow = [];
                        self.markers = [];
                    }
                }
            };
        }
    };

var Menu = function( obj ){
    this.obj = obj;
    this.items = this.obj.find( 'li' );
    this.parent = this.obj.find( '>ul' );
    this.subMenu = this.obj.find( '>ul ul' );
    this.subMenuControl = this.obj.find( '>ul div' );
    this.window = $( window );
    this.closed = true;

    this.init();
};
    Menu.prototype = {
        init: function(){
            var self= this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self= this;

            return {
                build: function(){
                   self.core.addTitle();
                   self.core.controls();
                },
                controls: function(){
                    self.title.on( {
                        'click': function(){
                            if( self.closed ){
                                self.core.show();
                            } else {
                                self.core.hide();
                            }
                        }
                    } );
                    self.subMenuControl.on( {
                        click: function(){
                            var curItem = $( this ).find( 'ul' );

                            if( curItem.css( 'display' ) == 'block' ){
                                curItem.slideUp( 300 );
                            } else {
                                curItem.slideDown( 300 );
                            }
                        }
                    } );
                    self.window.on( {
                        'resize': function(){
                            self.core.shutMenu();
                        }
                    } );
                },
                shutMenu: function(){
                    self.closed = true;
                    self.parent.stop( true, false );
                    self.parent.removeAttr( 'style' );
                    self.subMenu.removeAttr( 'style' );
                },
                show:function(){
                    self.closed = false;
                    self.parent
                        .stop( true, false )
                        .slideDown( 300 );
                },
                hide: function(){
                    self.closed = true;
                    self.parent
                        .stop( true, false )
                        .slideUp(300);
                },
                addTitle: function(){
                    self.title = $( '<div class="menu__title"></div>' );
                    self.obj.prepend( self.title );
                    self.core.setActiveText();
                },
                setActiveText: function(){
                    var activeItem = self.items.filter( '.active' );

                    if( activeItem.length ){
                        if( activeItem.find( '>a').length ){
                            self.title.text( activeItem.find( '>a').text() );
                        } else {
                            self.title.text( activeItem.find( '>div>span').text() );
                        }
                    } else {
                        self.title.text( 'Главная' );
                    }
                }
            };
        }
    };

var Star = function( obj ){
    this.obj = obj;
    this.item = this.obj.find( 'div' );
    this.width = '100%';

    this.init();
};
    Star.prototype = {
        init: function(){
            var self= this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self= this;

            return {
                build: function(){
                    self.core.controls();
                },
                controls: function(){
                    self.obj.on( {
                        'mousemove': function(e){
                            var curItem = $( this),
                                curPos = Math.ceil( ( e.pageX - curItem.offset().left )/ curItem.width() * 10 );

                            if( curPos > 8 ){
                                self.item.width( '100%' );
                            } else if (curPos > 6 ){
                                self.item.width( '80%' );
                            } else if (curPos > 4 ){
                                self.item.width( '60%' );
                            } else if (curPos > 2 ){
                                self.item.width( '40%' );
                            } else {
                                self.item.width( '20%' );
                            }
                        },
                        'click': function(){
                            self.width = self.item.width();
                            self.item.width( self.width );
                            $( '.rate' ).val( self.width/20 );
                        },
                        'mouseleave': function(){
                            self.item.width( self.width );
                        }
                    } );
                }
            };
        }
    };

var HiddenForm = function( obj ){
    this.obj = obj;
    this.showBtn = this.obj.find( '.hidden-form__show' );
    this.hideBtn = this.obj.find( '.hidden-form__hide' );
    this.content = this.obj.find( '.hidden-form__content' );

    this.init();
};
    HiddenForm.prototype = {
        init: function(){
            var self= this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self= this;

            return {
                build: function(){
                    self.core.controls();
                },
                controls: function(){
                    self.showBtn.on( {
                        'click': function(){
                            self.content
                                .stop( true, false )
                                .slideDown( 300 );
                            self.showBtn.fadeOut( 300 );
                            return false;
                        }
                    } );
                    self.hideBtn.on( {
                        'click': function(){
                            self.content
                                .stop( true, false )
                                .slideUp( 300 );
                            self.showBtn.fadeIn( 300 );
                            return false;
                        }
                    } );
                }
            };
        }
    };

var ReviewMore = function( obj ){
    this.obj = obj;
    this.btn = this.obj.find( '.review__more' );
    this.lastCount = parseInt( this.obj.attr( 'data-has-items' ) );
    this.request = new XMLHttpRequest();
    this.php = this.obj.attr( 'data-php' )

    this.init();
};
    ReviewMore.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this;

            return {
                build: function(){
                    self.core.controls();
                },
                controls: function(){
                    self.btn.on( {
                        'click': function(){
                            self.core.loadMore();
                            return false;
                        }
                    } );
                },
                loadMore: function(){

                    if( self.lastCount ){
                        self.request.abort();
                        self.request = $.ajax( {
                            url: self.php,
                            data: 'loadedCount=' + self.obj.find( 'section' ).length,
                            dataType: 'json',
                            timeout: 20000,
                            type: "GET",
                            success: function( msg ){
                                var newItems = $( msg.html );

                                if ( msg.has_elems == 0 ) {
                                    self.btn.fadeOut();
                                } else {
                                    self.lastCount = msg.has_elems;
                                }
                                newItems.css( {
                                    opacity: 0,
                                    top: 30
                                } );
                                self.btn.before( newItems );
                                newItems.animate( { opacity: 1, top: 0 }, 300 );
                            },
                            error: function(XMLHttpRequest){
                                if(XMLHttpRequest.statusText!="abort"){
                                    alert("При попытке отправить сообщение произошла неизвестная ошибка. \n Попробуй еще раз через несколько минут.");
                                }
                            }
                        } );
                    }

                }
            };
        }
    };