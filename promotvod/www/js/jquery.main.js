


$(function(){

    $(".our_products a").click(function(){
        $(".img_place img").css('display','none');

        var curItem = $(".our_products a"),
            i,
            allProducts = $(".img_place img");
        for(i=0; i<allProducts.length;i++){
            console.log(allProducts.eq(i));
            if(curItem == allProducts.eq(i)){
                $('.img_place img').css('display','block');
           }
        }
        return false;

    })
} );