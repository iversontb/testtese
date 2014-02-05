
<img class='box_shadow' onclick="javascript: $('#slideshow .slides').cycle('prev');" id='slideshow_l' src='/images/buttons/g_l.png'>
<img class='box_shadow' onclick="javascript: $('#slideshow .slides').cycle('next');" id='slideshow_r' src='/images/buttons/g_r.png'>

<a href='/Информация/Аниматоры/' class='slides'>
    {{#data}}
		 <img title='{{name}}' alt='{{name}}' class='border_radius' src='/data/Слайды/{{realname}}.{{ext}}?w=340&h=340&c=1'>
    {{/data}}
</a>

<script>
$(function() {
    $('#slideshow .slides').cycle({
        fx: 'fade'
    });
});
</script>
