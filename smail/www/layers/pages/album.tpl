<h1>{{config.title}}</h1>

<div class='album_info'>
	{{{config.album_html}}}
	Шоу <a href='/Шоу/{{config.showname}}/{{config.groupname}}/'>{{config.groupname}}</a>
</div>

<div class='album'>
	<div class='photos'>
		<img class='album_top' src='/images/buttons/g_t2.png'>
		<img class='album_bottom' src='/images/buttons/g_b2.png'>
		<div class='gphotos'>
			<ul>
			{{#config.photos}}
			<li><a title='{{name}}' target='_self' href='/Галерея/{{dir}}/{{name}}/'><img class='border_radius {{#sel}}select{{/sel}}' alt='{{name}}' src='/data/Шоу/{{config.showname}}/{{config.groupname}}/{{realdir}}/{{realname}}.{{ext}}?w=110&h=80&c=1'></a></li>
			{{/config.photos}}
			</ul>
		</div>
	</div>
	<div class='big_photo'>
		<a href='/data/Шоу/{{config.showname}}/{{config.groupname}}/{{config.photo.realdir}}/{{config.photo.realname}}.{{config.photo.ext}}?w=1024&h=768' title='{{config.photo.name}}' target='_blank'><img class='border_radius' alt='{{config.photo.name}}' src='/data/Шоу/{{config.showname}}/{{config.groupname}}/{{config.photo.realdir}}/{{config.photo.realname}}.{{config.photo.ext}}?w=458'></a>
	</div>


</div>
<script>
$(function() {
	if (!window.infra) {
		var btnPrev = $('.album .photos .album_top');
		var btnNext = $('.album .photos .album_bottom');
		$('.album .photos .gphotos').jCarouselLite({
			start: {{config.photo.num}}-1,
			vertical: true,
			mouseWheel: true,
			btnPrev: btnPrev,
			btnNext: btnNext
		});
	}
});
</script>
