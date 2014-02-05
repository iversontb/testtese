$(function(){

    $('.wrap_delivery_info input[type="submit"]').click(function(){
        var input_list = $('.person_info input');
        var error = [];
        var list_focus = [];
        for (var i = 0; i < input_list.length; i++) {
            if (input_list.eq(i).attr('required') == 'required') {
                var focus_item = 0;
                if (input_list.eq(i).val() == '') {
                    focus_item += 1;
                    input_list.eq(i).addClass('error').next().css('display', 'block');
                    error[0] = true;
                    list_focus[focus_item] =input_list.eq(i);
                } else {
                    input_list.eq(i).removeClass('error').next().css('display', 'none');
                }
            }
        }

        if (error[0]) {
            list_focus[1].focus();
            return false;
        }
    });

    $(".phone").mask("+ 7 (999) 999-9999");

});
