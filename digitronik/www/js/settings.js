$(document).ready(function () {
    // START MAIN SETTINGS
    var zoomInButtonImage = 'buttons/zoom_in.png';
    var zoomOutButtonImage = 'buttons/zoom_out.png';
    var zoomModeButtonImage = 'buttons/zoom.png';
    var rotateModeButtonImage = 'buttons/rotate.png';
    var frames = 72;
    var invertDirection = false;
    // END MAIN SETTINGS

    var initialRotateImagePath = $('#activeImage').attr('src');
    var zoomIsActivated = false;
    var reelIsActivated = false;
    var buttonMode = 'zoom';

    function initiateReel() {
        $('#activeImage').reel({
            frames: frames,
            speed: 0.3,
              
            cw: invertDirection,
            wheelable: false,
            klass: 'rotateImage',
            images: initialRotateImagePath.replace('001.jpg', '###.jpg'),
            hint: 'Вращайте фотографию мышью или пальцем'
        }).attr('border', 'none');
        reelIsActivated = true;
    }

    function initiateZoom() {
        $('#activeImage').axzoomer({
            'maxZoom': 3,
            'showControls': true,
            'zoomIn': zoomInButtonImage,
            'zoomOut': zoomOutButtonImage,
            'opacity': 0.8,
            'sensivity': 12,
            'resetImage': true
        });
        zoomIsActivated = true;
    }

    $('#stopButton').click(function () {
        $('#activeImage').trigger('stop');
    });

    $('#playButton').click(function () {
        $('#activeImage').trigger('play');
    });

//    $('#activeImage').bind('reelingChange', function () {
//        var frame = $('#activeImage').reel('frame');
//        $("#frameCounter").text("Current frame: " + frame);
//    });
    $('body').on('click','.tredView', function(){

        var imageElem = $(this).attr('href');
        $('#activeImage').attr('src',imageElem);
        console.log($('#activeImage').attr('src'));
        initialRotateImagePath = imageElem;
        $('.popUp').fadeIn();
        activateRotate();
        $('#activeImage').trigger('play');
        return false;
    });

    $('body').on('click','.close', function(){
        $('.popUp').fadeOut();
        $('#activeImage').trigger('stop');


    });


    $('#zoomRotateToggleButton').click(function () {
        if (buttonMode == 'zoom') {
            activateZoom();
        } else if (buttonMode == 'reel') {
            activateRotate();
        }
    });

    $('#thumbs').delegate('img', 'click', function () {

        $('#zoomRotateToggleButton').attr('src', zoomModeButtonImage);
        $('#description').hide();

        if ($(this).hasClass("rotateButton")) {
            $('#activeImage').attr('src', initialRotateImagePath);
            activateRotate();
            $('#reelControlsPanel').fadeIn();

        } else {
            $('#reelControlsPanel').fadeOut();
            activeFunctionOff();
            var normalSrc = $(this).attr('src').replace('thumbs', 'normal');
            var zoomSrc = $(this).attr('src').replace('thumbs', 'zoom');
            $('#activeImage').attr('src', normalSrc);
            $('#activeImage').attr('src-big', zoomSrc);

            initiateZoom();
            zoomIsActivated = true;
        }
    });

    function activeFunctionOff() {
        if (zoomIsActivated)
            zoomOff();
        if (reelIsActivated)
            reelOff();
    }

    function zoomOff() {
        $('#activeImage').axzoomer('destroy');
        $('#activeImage').css(
            {
                'position': 'relative',
                'top': '0',
                'left': '0'
            });
        zoomIsActivated = false;
    }

    function reelOff() {
        $('#activeImage').unreel();
        reelIsActivated = false;
    }

    function activateZoom() {
        var normalSrc = $('#activeImage').attr('src');
        var zoomSrc = normalSrc.replace('img', 'img_zoom');
        activeFunctionOff();
        $('#zoomRotateToggleButton').attr('src', rotateModeButtonImage);
        buttonMode = 'reel';
        $('#activeImage').attr('src', normalSrc);
        $('#activeImage').attr('src-big', zoomSrc);
        initiateZoom();
    }

    function activateRotate() {
        activeFunctionOff();
        $('#zoomRotateToggleButton').attr('src', zoomModeButtonImage);
        buttonMode = 'zoom';
        initiateReel();
    }

    $(function () {
        activateRotate();
        return false;
    });

    $(function () {
        var loadingImage = new Image();
        loadingImage.onload = function () {
            loadingImage.onload = null;
            activateRotate();
        };
        loadingImage.src = zoomInButtonImage;
    });

    $(function () {
        var loadingImage = new Image();
        loadingImage.onload = function () {
            loadingImage.onload = null;
        };
        loadingImage.src = zoomOutButtonImage;
    });

});