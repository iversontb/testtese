
<?
$to = 'nedzzu@gmail.com'; // адрес для отправки форм

if($_POST['token'] == '1') {
	#Переменные
	$name = @ trim ($_POST['name']);
	$tele = @ trim ($_POST['phone']);
	$text = @ trim ($_POST['txtArea']);
	#Доп.проверка заполненности полей
	if (! $name or ! $tele) {$send = 2;} 
	else
	{
	#Вид письма который придет на email
	$send = '';
	
	if( mail ($to,
		  "Сообщение с сайта сайтория.рф [форма 1](отправитель: $name)", 
		  " Имя клиента:$name \n Телефон для звонка: $tele \n Суть проекта: $text \n Referer: {$_COOKIE['referer']}",
		  "Content-type:text/plain; charset=utf-8")
		  ){
			$send = 1;
			}
	}
}
elseif($_POST['token'] == '2')
{
	#Переменные
	$name2 = @ trim ($_POST['name2']);
	$tele2 = @ trim ($_POST['txtArea2']);

	#Доп.проверка заполненности полей
	if (! $name2 or ! $tele2) {$send2 = 2;} 
	else
	{
	#Вид письма который придет на email
	$send2 = '';
	
	if( mail ($to,
		  "Заказ звонка с сайта сайтория.рф [форма 2](отправитель: $name2)", 
		  " Имя клиента:$name2 \n Телефон для звонка: $tele2 \n Referer: {$_COOKIE['referer']}",
		  "Content-type:text/plain; charset=utf-8")
		  ){
			$send2 = 1;
			}
	}
}
#Перенаправление после отправки   
// header ("Location: /");
?>