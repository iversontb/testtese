$(function(){
    $('.wrap_feedback input[type="submit"]').click(function(){
        var mass_error = {};

        if ($('.wrap_feedback select').val() == 'Тип обращения'){
            $('.wrap_feedback .error .type').css('display', 'block');
            mass_error[0] = true;
        } else {
            $('.wrap_feedback .error .type').css('display', 'none');
            mass_error[0] = false;
        }

        if ($('.wrap_feedback input[name="name"]').val() == '') {
            $('.wrap_feedback .error .name').css('display', 'block');
            mass_error[1] = true;
        } else {
            $('.wrap_feedback .error .name').css('display', 'none');
            mass_error[1] = false;
        }

        if ($('.wrap_feedback input[name="mail"]').val() == '') {
            $('.wrap_feedback .error .mail').css('display', 'block');
            mass_error[2] = true;
        } else {
            $('.wrap_feedback .error .mail').css('display', 'none');
            mass_error[2] = false;
        }

        if ($('.wrap_feedback textarea').val() == '') {
            $('.wrap_feedback .error .text').css('display', 'block');
            mass_error[3] = true;
        } else {
            $('.wrap_feedback .error .text').css('display', 'none');
            mass_error[3] = false;
        }
        if (mass_error[0] == true || mass_error[1] == true || mass_error[2] == true || mass_error[3] == true ){
            $('.wrap_feedback .error').css('display', 'block');
            return false;
        } else {
            $('.wrap_feedback .error').css('display', 'none');
        }


    });
});
