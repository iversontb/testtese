<h1>{{config.title}}</h1>

<div onclick='openPopup()' class='comments_send_comment send_comment border_radius box_shadow'>
	Оставить отзыв
</div>

<table class='comments_view' cellpadding=0 cellspacing=0>
{{#data.comments}}
	<tr>
		<td class='comments_avatar'>
			<img class='border_radius box_shadow' src='/images/avatar.png'>
		</td>
		<td class='comments_text'>
			<div class='border_radius box_shadow gradient'>
				{{Имя}}
				<p>{{Текст}}</p>
			</div>
		</td>
	</tr>
{{/data.comments}}
</table>
