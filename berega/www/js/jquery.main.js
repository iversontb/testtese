$(function(){

    var map = new BMap( $( '.mapBox' ) );

    $(".gallery").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev"
    });

    $( '.mapNav li').click( function(){
        var curElem = $( this );

        if( !curElem.hasClass( 'active' ) ) {
            $( '.mapNav li').removeClass('active');
            curElem.addClass('active');
            map.setCurRote();
        }

    } );

    $( '.address' ).on( 'click', '.orderCall', function() {

        $('.callBackPop').fadeIn();
        return false;

    });

    $( '.placecText' ).on( 'click', 'h2 a', function() {


        var elemSrc = $(this).attr("href");

        $('.textPagePop').attr('src',elemSrc);
        $('.textPagePop').fadeIn();
        console.log($('.textPagePop').attr());
       // $(window).scrollTop(0);
        return false;

    });



    $( '.main-menu' ).on( 'click', 'li a', function() {

        var elemSrc = $(this).attr("href");
        $('.popUp').attr('src',elemSrc);
        $('.popUp').fadeIn();
       // map.setCurRote();
        var elemHeight = $('.popUp').height();
        $('.site').height(elemHeight+800);

        return false;

    });

//    frameBody = $( window.frames[0].document.getElementsByTagName('body')[0]);
//    console.log(frameBody.find('.close'));
//    frameBody.find('.close').click( function(){
//       console.log(1);
//    });


    $( '.textPagePop' ).on( 'click', '.close2', function() {

        console.log(1);
        $('.textPagePop').fadeOut();

        $('.site').removeAttr('style');
        return false;

    });

//    $('.close').click( function(){
//        alert(1);
//        $('.popUp').fadeOut();
//
//        $('.site').removeAttr('style');
//        return false;
//    });
    $( '.aboutContainer' ).on( 'click', '.close', function() {

        alert(1);
        console.log(1);
        //$('.popUp, .popUpMap, .callBackPop, .textPagePop').fadeOut();

        //$('.site').removeAttr('style');
        //return false;

    });


    $( '.aboutContainer, .mapContainer, .callBackContainer, .textPagePop' ).on( 'click', '.close', function() {

        $('.popUp, .popUpMap, .callBackPop, .textPagePop').fadeOut();

        $('.site').removeAttr('style');
        return false;

    });


} );

var BMap = function( obj ){
    this.obj = obj;
    this.elems = {
        map: this.obj.find('.yMap'),
        points: this.obj.find('.points li'),
        route: this.obj.find('.route__line')
    };
    this.allLenght = 0;
    this.move = false;

    this.init();
};

    BMap.prototype = {
        init: function(){
            var self = this;

            ymaps.ready( function () {
                self.myMap = new ymaps.Map("yMap", {
                    center: [ $( '.mapNav .active .points li').eq( 0 ).attr('data-lat'), $( '.mapNav .active .points li').eq( 0 ).attr('data-lng')],
                    zoom: 10
                });

                self.setCurRote();
                self.controls();
            } );

        },

        controls: function(){
            var self = this;

            if ( self.obj[ 0 ].addEventListener) {
                self.obj[ 0 ].addEventListener('DOMMouseScroll', function(e){

                    var delta = e.detail,
                        direction,
                        newIndex;

                    ( delta > 0 ) ? direction = -1 : direction = 1;
                    newIndex = $('.route__point.active').index() + direction;

                    if( !self.move && ( newIndex > 0 ) && ( newIndex < $('.route__point' ).length + 1 ) ){
                        self.goTo( $('.route__point').eq(newIndex-1) );
                    }

                    e = e || window.event;
                    if (e.preventDefault)
                        e.preventDefault();
                    e.returnValue = false;

                }, false);
            }

            self.obj.on( "mousewheel", function (e) {
                var evt = event || e || window.event;

                var delta =  evt.wheelDelta || evt.originalEvent.wheelDelta,
                    direction,
                    newIndex;

                ( delta > 0 ) ? direction = 1 : direction = -1;

                newIndex = $('.route__point.active').index() + direction;

                if( !self.move && ( newIndex > 0 ) && ( newIndex < $('.route__point' ).length + 1 ) ){
                    self.goTo( $('.route__point').eq(newIndex-1) );
                }

                return false;
            });

            self.obj.on( 'click', '.route__point', function(){
                if( !$( this).hasClass( 'active' ) && !self.move ){
                    self.goTo( $(this) );
                }
            } );
        },

        goTo: function( obj ){
            var self = this,
                line = self.elems.route.find('> div'),
                points = $( '.route__point'),
                pathArr = [],
                i, j;

            self.move = true;

            points.removeClass('active');
            points.removeClass('selected');
            points.each( function( i ){
                var curElem = $( this );

                if( curElem.index() > obj.index() ){
                    return false;
                }
                curElem.addClass('selected');
            } );

            obj.addClass( 'active' );
            $( '.scroll-car').animate( { bottom: (obj.attr( 'percent' )*100) + '%' }, 300 );
            line.animate( { height: (obj.attr( 'percent' )*100) + '%' }, 300, function(){
                self.move = false;
            } );

            for( i=0; i < obj.index(); i++ ){

                if( i ){

                    var curPoints = $('.mapNav > .active > .points > li').eq(i).attr('data-points');

                    if(curPoints){
                        curPoints = JSON.parse(curPoints);

                        for( j=0; j < curPoints.points.length; j++ ){
                            pathArr.push(curPoints.points[j]);
                        }
                    }
                }
                pathArr.push([ self.arrPoints[ i ].latitude, self.arrPoints[ i ].longitude ]);
            }

            if( obj.index() == 1 ) {
                self.myMap.geoObjects.remove(self.lastRoute);
            } else {
                if(self.lastRoute){
                    self.myMap.geoObjects.remove(self.lastRoute);
                }
               // console.log(pathArr);
                self.lastRoute = new ymaps.GeoObject({
                    // Описываем геометрию типа "Ломаная линия".
                    geometry: {
                        type: "LineString",
                        coordinates: pathArr
                    },
                    // Описываем данные геообъекта.
                    properties: {
                        hintContent: "Москва-Берлин"
                    }
                },{
                    geodesic: true,
                    strokeWidth: 5,
                    strokeColor: "#F008"
                });

                self.myMap.geoObjects.add(self.lastRoute);
                self.myMap.setBounds(self.myMap.geoObjects.getBounds());
               // console.log(self.myMap.getBounds());
//                ymaps.route( pathArr,  {mapStateAutoApply: true } ).then(
//                    function (route) {
//
//                        if(self.lastRoute){
//                            self.myMap.geoObjects.remove(self.lastRoute);
//                        }
//                        self.lastRoute = route;
//
//                        self.myMap.geoObjects.add( route );
//                    },
//                    function (error) {
//                        alert("Возникла ошибка: " + error.message);
//                    }
//                );
            }
        },

        setCurRote: function(){
            var self = this,
                i;

            self.arrPoints = self.getPoints();
        },

        getPoints: function(){
            var self = this,
                points = $( '.mapNav .active .points li' ),
                arrPoints = [],
                arrRote = [],
                routeConteiner = self.elems.route,
                curLength = 0;

            $('.route__point').remove();
            if(self.lastRoute){
                self.myMap.geoObjects.remove(self.lastRoute);
            }
            self.elems.route.find('> div').css( { height: 0 } );
            $( '.scroll-car').css( { bottom: 0 } );

            self.allLenght = 0;
            points.each( function( i ){
                var curElem = $( this );

                arrPoints[ i ] = {};
                arrPoints[ i ].latitude = curElem.attr('data-lat');
                arrPoints[ i ].longitude = curElem.attr('data-lng');
                arrPoints[ i ].info = curElem.attr('data-info');
                arrPoints[ i ].content = $( curElem.html() );

                arrRote[ i ] = [ arrPoints[ i ].latitude, arrPoints[ i ].longitude ];
            } );

            self.myMap.setCenter(arrRote[ 0 ], 12);

            ymaps.route( arrRote ).then(
                function (route) {
                    var count = route.getPaths().getLength(),
                        i;

                    for( i = 0; i < count; i++ ){
                        var curPath = route.getPaths().get( i );

                        arrPoints[ i + 1 ].length = curPath.getLength() / 1000;
                        self.allLenght += parseFloat( arrPoints[ i + 1 ].length );
                    }

                    for( i = 0; i < arrPoints.length; i++ ){
                        var curElem = arrPoints[ i ],
                            curPoint = $( '<span class="route__point">' + curElem.info + '</span>' )
                            curBottom = -12;

                        curPoint.append( curElem.content );


                        if( i == 0 ) {
                            curPoint.css( { bottom: curBottom } );
                            curPoint.attr( 'percent', '0' );
                            curPoint.addClass('selected');
                            curPoint.addClass('active');
                        } else {
                            curLength += curElem.length;
                            curPoint.attr( 'percent', curLength / self.allLenght );

                            curBottom = ( ( curLength / self.allLenght ) * 726 ) - 12;

                            curPoint.css( { bottom:  curBottom } );

                            curPoint.append( '<span class="point__text">' + Math.round( curLength * 10 ) / 10  + ' км</span>' );
                        }

                        routeConteiner.append( curPoint );
                    }

                },
                function (error) {
                    alert('Возникла ошибка: ' + error.message);
                }
            );

            return arrPoints;
        }

    };