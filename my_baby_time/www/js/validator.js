$(function(){
    $(".phoneValid").keypress (
        function(event)
        {
            var key, keyChar;
            if(!event) var event = window.event;

            if (event.keyCode) key = event.keyCode;
            else if(event.which) key = event.which;


            if(key==null || key==0 || key==8 || key==13 || key==37 || key==39 || key==46 || key==9) return true;
            keyChar=String.fromCharCode(key);


            if(!/[0-9-\+]/.test(keyChar)) return false;

        });




    $(".e_but").click( function(){



        var input_list =  $(".buyForm input[type=text]");
        for (var i = 0; i < input_list.length; i++) {
            if (input_list.eq(i).val() == '') {

                input_list.eq(i).parent().addClass('error');
                console.log($(this));
                return false;
            }
        }

        if(!/^\w+[a-zA-Z0-9_.-]*@{1}\w{1}[a-zA-Z0-9_.-]*\.{1}\w{2,4}$/.test($("#email").val()))
        {
            $("#email").parent().addClass('error');
            return false;
        }

    });


    $("form").submit( function(){


        if(!/^\w+[a-zA-Z0-9_.-]*@{1}\w{1}[a-zA-Z0-9_.-]*\.{1}\w{2,4}$/.test($("#email").val()))
        {
            $("#email").parent().addClass('error');
            return false;
        }

    });

    $('input').focus( function(){
       $(this).parent().removeClass('error');
    });


});