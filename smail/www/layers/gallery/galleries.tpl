<h3 class='link'><a href='/Галерея/'>СО СМАЙЛОМ ПРАЗДНИК КАЖДЫЙ ДЕНЬ</a></h3>

{{#config.all_albums}}
<div class='line_gallery'>
	<img class='line_gallery_l' src='/images/buttons/g_l2.png'>
	<img class='line_gallery_r' src='/images/buttons/g_r2.png'>

	<div class='this_line_gallery'>
		<ul>
			{{#photos}}
			<li><a title='{{name}}' href='/Галерея/{{dir}}/{{name}}/'><img alt='{{name}}' src='{{showdir}}{{realdir}}/{{realname}}.{{ext}}?w=90&h=90&c=1'></a></li>
			{{/photos}}
		</ul>
	</div>
</div>
{{/config.all_albums}}


<script>
$(function() {
	$('.line_gallery').each(function(i, e) {
		var btnPrev = $($(".line_gallery .line_gallery_l")[i]);
		var btnNext = $($(".line_gallery .line_gallery_r")[i]);
		$($(".line_gallery .this_line_gallery")[i]).jCarouselLite({
			mouseWheel: true,
			btnPrev: btnPrev,
			btnNext: btnNext
		});
	});
});
</script>
