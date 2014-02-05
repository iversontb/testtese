$(function(){
    $('body').on('click','.closeBut', function(){
        $('.popUp').fadeOut();
        return false;
    });
/////AjaxSubmit
    function as_setAction(id){
        $('#'+id).on('submit',"form:first",function(e){
            e.preventDefault();
            jQuery.ajax({
                url: window.location.href,
                type: "post",
                data: $(this).serialize()+"&ajax_submit=#"+id,
                dataType: 'html',
                success: function(response){
                    if(response=='success' || response.length <= 0){
                        $("#"+id).html("РЎРїР°СЃРёР±Рѕ! Р’Р°С€Рµ РїРёСЃСЊРјРѕ РѕС‚РїСЂР°РІР»РµРЅРѕ.");
                    }else{
                        $("#"+id).html(response);
                    }
                }
            });
            return false;
        });
    }
    as_setAction('feedbackForm');
});