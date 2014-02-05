$(function(){

    var img = new Image();  // Создание нового объекта изображения
    img.src = '../img/cloud.png';

    var example = document.getElementById("example"),
        ctx = example.getContext('2d'),
        pic = new Image();
    pic.src = '../img/cloud.png';

    pic.onload = function() {    // Событие onLoad, ждём момента пока загрузится изображение
        ctx.drawImage(pic, 0, 0);  // Рисуем изображение от точки с координатами 0, 0
        // Иллюстрация для пример №2
        ctx.drawImage(pic, 0, 130, 300, 150);
//        var moveCloud = TweenLite.to(example, 5, {css:{x:window.innerWidth, y:0}});
//        moveCloud.resume();
    }

    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.fillStyle = "#4593bc";
    ctx.fillRect(0, 0, example.width, example.height);


} );