/*
* JS рисуем ножки
*
* depend:
*   <script src="js/jquery-1.9.0.min.js"></script>
*   <script src="js/tween-max.min.js"></script>
* */

$( window ).load(function(){
    var path = new Path( $( '#path' )),
        counter = 0;

    /*
    * график строится по кривой Безъе
    *
    * где
    *   from - начальная точка,
    *   to - конечная точка,
    *   controlPoints - массив контрольных точек
    *   duration - время за которое будет пройден путь
    *   step - шаг
    *
    * */
    arrPath = [
        {
            from: {x:552, y:30},
            to: {x:840, y:540},
            controlPoints: [
                {x:620, y:90},
                {x:690, y:480}
            ],
            duration: 6,
            step: 30
        },
        {
            from: {x:500, y:1200},
            to: {x:940, y:1320},
            controlPoints: [
                {x:650, y: 1200},
                {x:670, y: 1280},
                {x:900, y:1300}
            ],
            duration: 5,
            step: 30
        }
    ];

    path.drowPath(arrPath[ 0 ]);

    setTimeout( function(){ path.drowPath(arrPath[ 1 ] ); }, 6100);

} );

/*
* Path
*
*   Methods:
*       init - инициализация объекта;
*       clear - очистка канвы;
*       clone - клонирование объектов;
*       drowPath - отрисовка пути
*
* */
var Path = function( obj ){
    this.canvas = obj[ 0 ];
    this.ctx = this.canvas.getContext( '2d' );
    this.img1 = new Image();
    this.img2 = new Image();

    this.init();
};
    Path.prototype = {
        init: function(){
            var self = this,
                canvas = self.canvas,
                body = $( '.site' );

            this.img1.src = 'img/paw1.png';
            this.img2.src = 'img/paw2.png';

            canvas.width = 981;
            canvas.height = body.height();

            $( canvas ).css( { left: ( body.width() - 981 ) / 2 } );
        },
        clear: function(){
            var self = this;

            self.ctx.clearRect( 0, 0, self.canvas.width, self.canvas.height );
        },
        clone: function( obj ){
            var self = this;

            if ( obj == null || typeof( obj ) != 'object' ) {
                return obj;
            }
            var temp = new obj.constructor();

            for ( var key in obj ) {
                temp[ key ] = self.clone( obj[ key ] );
            }
            return temp;
        },
        drowPath: function( params ){
            var self = this,
                tween,
                from = self.clone( params.from ),
                bezierArr = self.clone( params.controlPoints ),
                length = 0,
                ctx = self.ctx,
                img1 = self.img1,
                img2 = self.img2,
                curImg = 1;

            bezierArr.push( self.clone(params.to) );

            cur = {x: from.x, y: from.y};

            tween = new TweenMax.to(from, params.duration, {
                bezier: bezierArr,
                onUpdate: function(){
                    length = Math.sqrt( ( Math.abs(this.target.x - cur.x) * Math.abs(this.target.x - cur.x) ) + ( Math.abs(this.target.y - cur.y) * Math.abs(this.target.y - cur.y) ) );

                    if ( length >= params.step ) {
                        var v1 = {
                                x: this.target.x - cur.x,
                                y: this.target.y - cur.y
                            },
                            v2 = {
                                x: Math.abs(this.target.x - cur.x),
                                y:0
                            },
                            angle = Math.acos( ( ( v1.x * v2.x ) + ( v1.y * v2.y ) ) / ( Math.sqrt( ( v1.x * v1.x ) + ( v1.y * v1.y ) ) * Math.sqrt( ( v2.x * v2.x ) + ( v2.y * v2.y ) ) ) );

                        if (v1.y < 0){
                            angle = -angle;
                        }
                        cur.x = this.target.x;
                        cur.y = this.target.y;
                        ctx.save();
                        ctx.translate(cur.x, cur.y);
                        ctx.rotate(angle);
                        if ( curImg == 1 ){
                            ctx.drawImage(img2, -38.5, -19,77,38);
                            curImg ++;
                        } else {
                            ctx.drawImage(img1, -38.5, -19,77,38);
                            curImg = 1;
                        }
                        ctx.restore();
                    };
                },
                ease:Linear.easeNone
            });
        }
    };