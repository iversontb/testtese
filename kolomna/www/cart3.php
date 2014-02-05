<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" href="css/button.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/cart1.css" />
    <link rel="stylesheet" href="css/select.css" />
    <link rel="stylesheet" href="css/cart1-cristmas.css" />



    <script src="js/modernizr-2.6.2.min.js"></script>
    <script src="js/jquery-1.9.0.min.js"></script>
    <script src="js/jquery.main.js"></script>
    <script src="js/jquery.select.js"></script>

    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>


    <!--[if lte IE 9]>
    <script src="js/jquery.placeholder.js"></script>
    <link rel="stylesheet" href="css/pie.css" />
    <![endif]-->
    <!--[if lte IE 8]>
    <link rel="stylesheet" href="css/main.ie8.css" />
    <![endif]-->

<script type="text/javascript">
var fb_param = {};
fb_param.pixel_id = '6015957853120';
fb_param.value = '0.00';
fb_param.currency = 'RUB';
(function(){
  var fpw = document.createElement('script');
  fpw.async = true;
  fpw.src = '//connect.facebook.net/en_US/fp.js';
  var ref = document.getElementsByTagName('script')[0];
  ref.parentNode.insertBefore(fpw, ref);
})();
</script>
<noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/offsite_event.php?id=6015957853120&amp;value=0&amp;currency=RUB" /></noscript>

</head>
<body>
<!-- site -->
<div class="site">
    <!-- header -->
    <header class="header headBlack">

        <!-- insideHead -->
        <div class="insideHead">

            <!-- logo -->
            <a href="/" title="На главную" class="logo">simplePass</a>
            <!-- /logo -->

            <!-- mainMenu -->
             <nav class="mainMenu">
				<a href="/#numbers">Цифры</a>
				<a href="/#map">карта</a>
				<a href="/#program" class="programBut">Программа</a>
				<a href="/#program" class="leveBut">Проживание</a>
				<a href="/#howget">Как добраться</a>
			</nav>
            <!-- /mainMenu -->
        </div>
        <!-- /insideHead -->
    </header>
    <!-- /header -->

    <!-- site__content -->
    <div class="site__content">		
        <!-- content-wrap -->
        <div class="content-wrap">
            <!-- insideBlock -->
            <div class="insideBlock">
                <!-- cartForm -->
                <form class="cartForm" action="#" method="post">
                    <p class="topicType4">Ок! Мы счастливы,
                        что вы решили провести выходные в Коломне!</p>
                    <!-- stepBlock -->
					<div class="stepBlock">
						<img src="img/step4.png" width="964" height="37" alt="">
						<span class="step1 active">Выбор номера</span>
						<span class="step2 active">Ваши контакты</span>
						<span class="step3 active">Готово</span>
					</div>
                    <!-- /stepBlock -->
                    <!-- userInfo -->
                    <div class="userInfo">
						<?//echo '<pre>';print_r($_POST);echo '</pre>';?>						
						<?						
						$type1Price = 7500*$_POST['type1'];
						$type2Price = 7500*$_POST['type2'];
						$add1Price = 1500*$_POST['add1'];
						
						$mail_to = $_POST['email'];
						//$mail_to2 = 'apavlovf@mail.ru';
						$mail_to2 = 'klepikov.vladimir@gmail.com';
						$mail_to3 = 'maria.v.fomina@gmail.com';
						$mail_to4 = 'smirnov8181@gmail.com';
						$thm = 'Ваучер';
						$msg .= '<table cellpadding="0" cellspacing="0"  align="center" style="border-collapse:collapse; width: 100%; height: 100%; vertical-align: middle; background: #e6e6e6; text-align: center; border: none;">';
						$msg .= '	<tr>';
						$msg .= '		<td>';
						$msg .= '			<table cellpadding="0" cellspacing="0"  align="center" style="color: #333333; font-family: arial; border-collapse:collapse; margin: 0 auto; background: #fff; width: 600px;  border: none;">';
						$msg .= '				<tr>';
						$msg .= '					<td style="width: 30px;"></td>';
						$msg .= '					<td style="width: 540px">';
						$msg .= '						<table cellpadding="0" cellspacing="0"  align="center" style="border-collapse:collapse;  width: 100%; border: none;">';
						$msg .= '							<tr>';
						$msg .= '							   <td colspan="2" style="border-bottom: 1px solid #bfbfbf; height: 87px; vertical-align: middle; text-align: center; ">';
						$msg .= '								   <a href="http://sp.ru.for-test-only.ru"><img src="http://sp.ru.for-test-only.ru/img/logo-mail.png" width="281" height="26" alt=""></a>';
						$msg .= '							   </td>';
						$msg .= '							</tr>';
						$msg .= '							<tr>';
						$msg .= '								<td colspan="2" style="height: 85px; text-align: center; vertical-align: middle; font-size: 24px; font-weight: bold;">Ваучер</td>';
						$msg .= '							</tr>';
						$msg .= '							<tr>';
						$msg .= '								<td colspan="2" style="font-style: italic; font-size: 14px; line-height: 18px;">Туристическая программа для двоих: Музей Пастилы, Музей Арт-коммуналки, Музей Калачная, Экскурсии по Коломенскому Кремлю и Посаду, Паломничество в монастыри, проживанием в отеле 40-й Меридиан Арбат.</td>';
						$msg .= '							</tr>';
						$msg .= '							<tr>';
						$msg .= '								<td  colspan="2" style="height: 30px; border-bottom: 1px solid #bfbfbf;"></td>';
						$msg .= '							</tr>';
						$msg .= '							<tr>';
						$msg .= '								<td  colspan="2" style="height: 30px;"></td>';
						$msg .= '							</tr>';
						$msg .= '							<tr>';
						$msg .= '								<td style="font-size: 14px; line-height: 20px;">';
						$msg .= '									<span style="display: block; font-weight: bold;">Отель «40-й Меридиан Арбат»</span>';
						$msg .= '									<span style="display: block;">Московская обл., Коломна, Водовозный пер., 12</span>';
						$msg .= '									<span style="display: block;">Тел.: 8 (925) 882-85-33, 8 (496) 616-52-40</span>';
						$msg .= '								</td>';
						$msg .= '								<td><a target="_blank" href="http://maps.yandex.ru/?um=hLCYFcMK_F51SxmbjwAK59XcWdFSIgCV&l=map" style="color: #0baed3;">  посмотреть на карте</a> </td>';
						$msg .= '							</tr>';
						$msg .= '							<tr>';
						$msg .= '								<td  colspan="2" style="height: 30px; border-bottom: 1px solid #bfbfbf;"></td>';
						$msg .= '							</tr>';
						$msg .= '							<tr>';
						$msg .= '								<td  colspan="2" style="height: 30px; "></td>';
						$msg .= '							</tr>';
						$msg .= '							<tr>';
						$msg .= '								<td colspan="2" style="font-size: 14px;">';
						$msg .= '									<span style="display: block; line-height: 18px;">Способ оплаты: <b>оплата при заселении</b></span>';
						$msg .= '									<span style="display: block; line-height: 18px;">Эл. почта: <b><a href="#" style="font-weight: bold; color: #000; 		text-decoration: none;">'.$_POST['email'].'</a> </b></span>';
						$msg .= '									<span style="display: block; line-height: 18px;">Телефон: <b>'.$_POST['phone'].'</b></span>';
						$msg .= '									<span style="display: block; line-height: 18px;">Гость:  <b>'.$_POST['lastname'].' '.$_POST['name'].'</b></span>';
						$msg .= '									<span style="display: block; line-height: 18px;">Дата заезда: <b>15 февраля 2014, 14:00 MSK</b></span>';
						$msg .= '									<span style="display: block; line-height: 18px;">Начало экскурсионной программы:  <b>15 февраля 2014, 14:30 MSK</b></span>';
						$msg .= '									<span style="display: block; line-height: 18px;">Дата выезда: <b>16 февраля 2014, 16:00 MSK</b></span>';
						$msg .= '								</td>';
						$msg .= '							</tr>';
						$msg .= '							<tr>';
						$msg .= '								<td  colspan="2" style="height: 30px; border-bottom: 1px solid #bfbfbf;"></td>';
						$msg .= '							</tr>';
						$msg .= '							<tr>';
						$msg .= '								<td  colspan="2" style="height: 83px; "></td>';
						$msg .= '							</tr>';
						$msg .= '							<tr>';
						$msg .= '								<td colspan="2" style="font-size: 14px;">';
						$msg .= '									<table cellpadding="0" cellspacing="0"  align="center" style="border-collapse:collapse;  width: 100%; border: none;">';
						$msg .= '										<tr>';
						$msg .= '											<td style="width: 241px;  font-size: 14px;"><b>Категория номера</b></td>';
						$msg .= '											<td style="width: 80px;  font-size: 14px;"><b>Цена</b></td>';
						$msg .= '											<td style="width: 132px; font-size: 14px;"><b>Кол-во</b></td>';
						$msg .= '											<td style=" font-size: 14px;"><b>Стоимость</b></td>';
						$msg .= '										</tr>';
						$msg .= '										<tr>';
						$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
						$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
						$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
						$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
						$msg .= '										</tr>';
						$msg .= '										<tr>';
						$msg .= '											<td style="height: 15px;"></td>';
						$msg .= '											<td style="height: 15px;"></td>';
						$msg .= '											<td style="height: 15px;"></td>';
						$msg .= '											<td style="height: 15px;"></td>';
						$msg .= '										</tr>';						
						$msg .= '										<tr>';						
						$msg .= '											<td  style="width: 220px;  font-size: 14px; padding-right: 21px;">Стандартный двухместный номер с 1 кроватью</td>';
						$msg .= '											<td  style="width: 80px;  font-size: 14px;">7500</td>';
						$msg .= '											<td  style="width: 132px;  font-size: 14px;">'.$_POST['type1'].'</td>';
						$msg .= '											<td  style=" font-size: 14px;"><b>'.$type1Price.'</b></td>';
						$msg .= '										</tr>';
						$msg .= '										<tr>';
						$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
						$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
						$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
						$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
						$msg .= '										</tr>';
						$msg .= '										<tr>';
						$msg .= '											<td style="height: 15px;"></td>';
						$msg .= '											<td style="height: 15px;"></td>';
						$msg .= '											<td style="height: 15px;"></td>';
						$msg .= '											<td style="height: 15px;"></td>';
						$msg .= '										</tr>';
						
						if($_POST['type2']!=0){
							$msg .= '										</tr>';		
							$msg .= '											<td  style="width: 220px;  font-size: 14px; padding-right: 21px;">Стандартный двухместный номер с 2 кроватями</td>';
							$msg .= '											<td  style="width: 80px;  font-size: 14px;">7500</td>';
							$msg .= '											<td  style="width: 132px;  font-size: 14px;">'.$_POST['type2'].'</td>';
							$msg .= '											<td  style=" font-size: 14px;"><b>'.$type2Price.'</b></td>';
							$msg .= '										</tr>';
							$msg .= '										<tr>';
							$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
							$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
							$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
							$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
							$msg .= '										</tr>';
							$msg .= '										<tr>';
							$msg .= '											<td style="height: 15px;"></td>';
							$msg .= '											<td style="height: 15px;"></td>';
							$msg .= '											<td style="height: 15px;"></td>';
							$msg .= '											<td style="height: 15px;"></td>';
							$msg .= '										</tr>';
						}
						if($_POST['add1']!=0){						
							$msg .= '										<tr>';
							$msg .= '											<td  style="width: 241px;  font-size: 14px;">+ Ребенок от 3 до 12 лет (дополнительная кровать)</td>';
							$msg .= '											<td  style="width: 80px;  font-size: 14px;">1500</td>';
							$msg .= '											<td  style="width: 132px;  font-size: 14px;">'.$_POST['add1'].'</td>';
							$msg .= '											<td  style=" font-size: 14px;"><b>'.$add1Price.'</b></td>';
							$msg .= '										</tr>';
							$msg .= '										<tr>';
							$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
							$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
							$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
							$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
							$msg .= '										</tr>';
							$msg .= '										<tr>';
							$msg .= '											<td style="height: 15px;"></td>';
							$msg .= '											<td style="height: 15px;"></td>';
							$msg .= '											<td style="height: 15px;"></td>';
							$msg .= '											<td style="height: 15px;"></td>';
							$msg .= '										</tr>';
						}
						if($_POST['add2']!=0){						
							$msg .= '										<tr>';
							$msg .= '											<td  style="width: 241px;  font-size: 14px;">дополнительная детская кровать для детей младше трех лет</td>';
							$msg .= '											<td  style="width: 80px;  font-size: 14px;">бесплатно</td>';
							$msg .= '											<td  style="width: 132px;  font-size: 14px;">'.$_POST['add1'].'</td>';
							$msg .= '											<td  style=" font-size: 14px;"><b>бесплатно</b></td>';
							$msg .= '										</tr>';
							$msg .= '										<tr>';
							$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
							$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
							$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
							$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
							$msg .= '										</tr>';
							$msg .= '										<tr>';
							$msg .= '											<td style="height: 15px;"></td>';
							$msg .= '											<td style="height: 15px;"></td>';
							$msg .= '											<td style="height: 15px;"></td>';
							$msg .= '											<td style="height: 15px;"></td>';
							$msg .= '										</tr>';
						}						
						$msg .= '										<tr>';
						$msg .= '											<td style="width: 241px; font-size: 14px;"></td>';
						$msg .= '											<td style="width: 80px;  font-size: 14px;"></td>';
						$msg .= '											<td style="width: 132px;  font-size: 14px;">Итого</td>';
						$msg .= '											<td style=" font-size: 14px;"><b>'.$_POST['total'].'</b></td>';
						$msg .= '										</tr>';
						$msg .= '										<tr>';
						$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
						$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
						$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
						$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
						$msg .= '										</tr>';
						$msg .= '										<tr>';
						$msg .= '											<td style="height: 15px;"></td>';
						$msg .= '											<td style="height: 15px;"></td>';
						$msg .= '											<td style="height: 15px;"></td>';
						$msg .= '											<td style="height: 15px;"></td>';
						$msg .= '										</tr>';
						$msg .= '										<tr>';
						$msg .= '											<td style="width: 241px;  font-size: 14px;"></td>';
						$msg .= '											<td style="width: 80px;  font-size: 14px;"></td>';
						$msg .= '											<td style="width: 132px; font-size: 14px;">К оплате при заселении</td>';
						$msg .= '											<td style=" font-size: 14px;"><b>'.$_POST['total'].'</b></td>';
						$msg .= '										</tr>';
						$msg .= '										<tr>';
						$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
						$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
						$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
						$msg .= '											<td style="height: 15px; border-bottom: 1px dashed #000;"></td>';
						$msg .= '										</tr>';
						$msg .= '										<tr>';
						$msg .= '											<td style="height: 50px;"></td>';
						$msg .= '											<td style="height: 50px;"></td>';
						$msg .= '											<td style="height: 50px;"></td>';
						$msg .= '											<td style="height: 50px;"></td>';
						$msg .= '										</tr>';
						$msg .= '								</table>';
						$msg .= '								</td>';
						$msg .= '							</tr>';
						$msg .= '							<tr>';
						$msg .= '								<td colspan="2" style="font-weight: bold; font-size: 24px; text-align: center">';
						$msg .= '									<span style="display: block;">Мы ждем Вас!</span>';
						$msg .= '									<span style="display: block;">Счастливого путешествия!</span>';
						$msg .= '								</td>';
						$msg .= '							</tr>';
						$msg .= '							<tr>';
						$msg .= '								<td colspan="2" style="height: 74px;"></td>';
						$msg .= '							</tr>';
						$msg .= '						</table>';
						$msg .= '					</td>';
						$msg .= '					<td style="width: 30px;"></td>';
						$msg .= '				</tr>';
						$msg .= '				<tr>';
						$msg .= '					<td style="width: 30px; background: #f2f2f2;"></td>';
						$msg .= '					<td style="background: #f2f2f2; height: 30px;"></td>';
						$msg .= '					<td style="width: 30px; background: #f2f2f2;"></td>';
						$msg .= '				</tr>';
						$msg .= '				<tr>';
						$msg .= '					<td style="width: 30px; background: #f2f2f2;"></td>';
						$msg .= '					<td style="background: #f2f2f2; font-size: 13px; text-align: center;">При возникновении трудностей с проездом или любых других непредвиденных обстоятельствах просим позвонить вашему гиду <b>Владимиру</b> по номеру <b>8 (925) 882-85-33</b></td>';
						$msg .= '					<td style="width: 30px; background: #f2f2f2;"></td>';
						$msg .= '				</tr>';
						$msg .= '				<tr>';
						$msg .= '					<td style="width: 30px; background: #f2f2f2;"></td>';
						$msg .= '					<td style="background: #f2f2f2; height: 30px;"></td>';
						$msg .= '					<td style="width: 30px; background: #f2f2f2;"></td>';
						$msg .= '				</tr>';
						$msg .= '			</table>';
						$msg .= '		</td>';
						$msg .= '	<tr>';
						$msg .= '</table>';
						/*$msg .= 'Ваучер на имя: '.$_POST['name'].' '.$_POST['lastname'].'<br /><br />';
						$msg .= 'Количество номеров: '.$_POST['quantity'].'<br /><br />';
						$msg .= $_POST['order'].'<br /><br />';
						$msg .= 'Сума заказа: '.$_POST['total'];*/
						if($_POST['submit']){
							$headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 
							$headers .= "From: <no-reply@ilovekolomna.ru>\r\n"; 
							$headers .= "Bcc: no-reply@ilovekolomna.ru\r\n"; 

							mail($mail_to, $thm, $msg, $headers); 						
							mail($mail_to2, $thm, $msg, $headers);
							mail($mail_to3, $thm, $msg, $headers);
							mail($mail_to4, $thm, $msg, $headers);
						?>
						<p class="topicType5">ЗАКАЗ ПРИНЯТ</p>
                       
                        <p class="cartText">На ваш и-мейл отправлено письмо с "ваучером", если Вы его вдруг не нашли или оно случайно упало в папку "спам" - свяжитесь с нашим менеджером по тел.: 8(925) 882-85-33. Он может почти всё. </p>
                        <p class="goodTrevel">Удачного путешествия!</p>	
						<?
						}
						?>                       
                    </div>
                    <!-- /userInfo -->
                    <!-- yourOrder -->
                    <div class="yourOrder">
                        <p class="topicType5">ваш заказ</p>
                        <!-- bill -->
                       <div class="bill">
                            <ul>
                                <li class="rowBlock">
                                    <span>Дата прибытия</span>
                                    <time>15 Февраля 2014</time>
                                </li>
                                <li class="rowBlock">
                                <span>Количество единых билетов</span>
                                    <div class="ticketPrice">
                                        <span><?=$_POST['quantity']?></span>                                        
                                    </div>
                                </li>                              
                                <li  class="rowBlock">
                                    <span>Итого к оплате</span>
                                    <p class="calculPrice"><span><?=$_POST['total']?></span> Р</p>
                                </li>
                            </ul>
                        </div>
                        <!-- /bill -->
                    </div>
                    <!-- /yourOrder -->
                </form>
            </div>
            <!-- /insideBlock -->
        </div>
        <!-- /content-wrap -->

    </div>
    <!-- /site__content -->

</div>
<!-- /site -->

<!-- footer -->
<footer class="footer">
    <div class="footer__layout">

        <a href="#" class="footerLogo"><img src="img/footer-logo3.png" width="122" height="11" alt=""></a>
        <p class="copy">&copy; 2014 I Love Kolomna.ru. Все права защищены</p>

        <address class="footerAddres">
            <dl>
                <dt>Служба поддержки клиентов:</dt>
                <dd>8(925) 882-85-33</dd>
            </dl>
            <dl>
                <dt>Время работы:</dt>
                <dd>7 дней в неделю 7:00 - 20:00</dd>
            </dl>
            <dl>
                <dt>Написать нам:</dt>
                <dd><a href="mailto:mail@ilovekolomna">mail@ilovekolomna</a> </dd>
            </dl>
        </address>

        <ol class="network">
            <li><a class="vk" href="javascript:void()" title="vk">vk</a></li>
            <li><a class="facebook" href="javascript:void()" title="facebook">facebook</a></li>
            <li><a class="ok" href="javascript:void()" title="ok">ok</a></li>
            <li><a class="twitter" href="javascript:void()" title="twitter">twitter</a></li>
            <li><a class="google" href="javascript:void()" title="google">google</a></li>
            <li><a class="mail" href="javascript:void(;" title="mail">mail</a></li>
        </ol>

        <div class="footerMenu">
            <ul>
                <li><a href="/#numbers">Цифры</a> </li>
                <li><a href="/#map">Карта</a> </li>
                <li><a href="/#program">Программа</a> </li>
                <li><a href="/#program">Проживание </a> </li>
                <li><a href="/#howget">Как добраться?</a> </li>
            </ul>
            <ul>
                <li><a href="#">Правила и условия</a> </li>
                <li><a href="#">Купить</a> </li>
            </ul>

        </div>

    </div>
</footer>
<!-- /footer -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46615422-1', 'ilovekolomna.ru');
  ga('send', 'pageview');

</script>
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter23430871 = new Ya.Metrika({id:23430871,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/23430871" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
</body>
</html>