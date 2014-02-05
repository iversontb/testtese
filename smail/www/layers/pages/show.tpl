<h1>{{config.title}}</h1>
<div id='show_description'>
</div>

{{#config.shows_list}}
<div class='shows_list'>
	<a href='#' class='list_left'>
		<img src='/images/buttons/g_l2.png'>
	</a>
	<a href='#' class='list_right'>
		<img src='/images/buttons/g_r2.png'>
	</a>
	<div class='show_items'>
		<div class='show_item border_radius box_shadow'>
			Мир мыльных пузырей
			<br>
			Ночь мыльных пузырей
		</div>
		<div class='show_item select border_radius box_shadow'>
			Мир мыльных пузырей
			<br>
			Ночь мыльных пузырей
		</div>
		<div class='show_item border_radius box_shadow'>
			Мир мыльных пузырей
			<br>
			Ночь мыльных пузырей
		</div>
	</div>
</div>
{{/config.shows_list}}

<div class='shows_blocks'>
	{{#config.subgroups}}
	<div class='show_block border_radius box_shadow'>
		<h2><a href='/Шоу/{{config.title}}/{{Название}}/'>«{{Название}}»</a></h2>
		<img class='show_img border_radius box_shadow' src='/data/Шоу/{{config.title}}/{{Название}}.png?w=262&h=190&c=1'>
		<div class='show_info'>
			<div class='show_type'>
				<b>{{Тип}}</b>
				<br>
				{{Время}}
			</div>
			<span class='price'>{{Цена}}*&nbsp;руб.</span>
			<img align='right' src='/images/buttons/smile.png'>
		</div>
		{{{html}}}
		<center>
			<div class='send_comment border_radius box_shadow'>
				Оставить заявку
			</div>
		</center>

		{{#gallery_count}}
		<h4>Фотоотчёты</h4>
		<ul>
		{{/gallery_count}}

		{{#Альбомы}}
			<li><a href='/Галерея/{{name}}/'>{{name}}</a></li>
		{{/Альбомы}}

		{{#gallery_count}}
		</ul>
		{{/gallery_count}}
	</div>
	{{#two}}
	<div class='clear'></div>
	{{/two}}
	{{/config.subgroups}}
</div>

<script>
/*
$(function() {
	var a;
	var a_elem;
	var b;
	var b_elem;
	$('.show_block').each(function(){
		if (!a) {
			a_elem = $(this);
			a = a_elem.height();
		} else if (a && !b) {
			b_elem = $(this);
			b = b_elem.height();
			if (a>b) {
				b_elem.height(a)
			} else if (b>a) {
				a_elem.height(b)
			}
		} else if (a && b) {
			a_elem = $(this);
			a = a_elem.height();
			b = false;
		}
	});
});
*/
</script>
