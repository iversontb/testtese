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
    <script src="js/script.js"></script>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
    <!--[if lte IE 9]>
    <script src="js/jquery.placeholder.js"></script>
    <link rel="stylesheet" href="css/pie.css" />
    <![endif]-->
    <!--[if lte IE 8]>
    <link rel="stylesheet" href="css/main.ie8.css" />
    <![endif]-->
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
	<?//echo '<pre>';print_r($_POST);echo '</pre>';?>
    <!-- content-wrap -->
    <div class="content-wrap">
        <!-- insideBlock -->
        <div class="insideBlock">
            <!-- cartForm -->
            <form class="cartForm" action="/cart3.php" method="post">				
				<?
				$i = 0;
				$order = array();
				$type1 = 0;
				$type2 = 0;
				$add1 = 0;
				$add2 = 0;
				foreach($_POST['params'] as $ticket){
					if($ticket['name']==1) $type1 = $type1 + 1;
					if($ticket['name']==2) $type2 = $type2 + 1;					
					if($ticket['bed']) $add1 = $add1 + 1;
					if($ticket['bed-children']) $add2 = $add2 + 1;					
					$i++;
				}				
				?>
				<input type="hidden" value="<?=$type1?>" name="type1">
				<input type="hidden" value="<?=$type2?>" name="type2">
				<input type="hidden" value="<?=$add1?>" name="add1">
				<input type="hidden" value="<?=$add2?>" name="add2">
				<input type="hidden" value="<?=$_POST['total']?>" name="total">
				<input type="hidden" value="<?=$i?>" name="quantity">
                <p class="topicType4">Ок! Мы счастливы,
                    что вы решили попробовать нашу программу</p>
                <!-- stepBlock -->
                <div class="stepBlock">
                    <img src="img/step2.png" width="964" height="37" alt="">
                    <span class="step1 active">Выбор номера</span>
                    <span class="step2 active">Ваши контакты</span>
                    <span class="step3">Готово</span>
                </div>
                <!-- /stepBlock -->

                <!-- userInfo -->
                <div class="userInfo">

                    <p class="topicType5">на кого оформить заказ?</p>

                    <div class="lineConteiner">
                        <div class="block">
                            <label for="lastName">Фамилия</label>
                            <input name="lastname" id="lastName" type="text">
                        </div>
                        <div class="block">
                            <label for="name" class="shortWidth">Имя</label>
                            <input name="name" id="name" type="text">
                        </div>
                    </div>

                    <div class="lineConteiner">
                        <div class="block">
                            <label for="phone">Телефон</label>
                            <input name="phone" id="phone" type="text">
                        </div>
                        <span class="phoneType">Телефон нужен для подтверждения бронирования. Номер не будет использоваться для рассылки рекламы или спама.</span>
                    </div>

                    <div class="lineConteiner">
                        <div class="block">
                            <label for="email">E-mail</label>
                            <input name="email" id="email" class="longInput" type="text">
                            <span class="proof"></span>
                        </div>
                    </div>

                    <div class="lineConteiner">
                        <div class="block">
                            <label for="reemail" class="lineHeight">Подтвердите
                                E-mail</label>
                            <input name="reemail" id="reemail" class="longInput" type="text">
							<span class="proof"></span>
                        </div>
                    </div>
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
                                <time>15 февраля 2014</time>
                            </li>
                            <li class="rowBlock">
                                <span>Количество номеров</span>
                                <div class="ticketPrice">
                                    <span><?=$i?></span>
                                   
                                </div>
                            </li>

 
                            <li  class="rowBlock">
                                <span>Итого к оплате</span>
                                <p class="calculPrice"><span><?=$_POST['total']?></span> Р</p>
                            </li>
                        </ul>
                    </div>
                    <!-- /bill -->                    
                    <input type="button" class="big_button big_red_button" value="продолжить">
					<input type="submit" name="submit" class="step2-form-submit">
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