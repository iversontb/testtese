<?php
// если мы не знаем реферала
if (!isset($_COOKIE['referer'])) {
     // то запоминаем его
     setcookie('referer', $_SERVER['HTTP_REFERER'], mktime(0, 0, 0, 1, 1, 2020));
}
?>

<!DOCTYPE html>
<!--[if IE 8 ]><html class="ie" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US"><!--<![endif]-->
<head>
	<meta charset="utf-8">
    <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->
	<title>Сайтория | Создание сайтов для среднего и крупного бизнеса</title>
	<meta name="description" content="Создание сайтов для среднего и крупного бизнеса">
	<meta name="keywords" content="создание сайта, сайт, сайт-магазин, интернет-магазин, изготовление сайта, создание интернет-магазина, создание интернет-представительства, создание сайта представительства">
	<meta name="author" content="Mila">

	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<link rel="shortcut icon" href="images/favicon.png">
	<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">
	<link href='http://fonts.googleapis.com/css?family=Philosopher' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300&subset=cyrillic' rel='stylesheet' type='text/css'>
	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<!-- jQuery -->
<!--	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>-->
 
	<!-- Fonts -->
	<link href='http://fonts.googleapis.com/css?family=Roboto:400,300,100' rel='stylesheet' type='text/css'>

	<!-- Stylesheets -->
	<link rel="stylesheet" type="text/css" href="stylesheets/reset.css">
	<link rel="stylesheet" type="text/css" href="stylesheets/grid.css"> 
	<link rel="stylesheet" type="text/css" href="stylesheets/style.css">

	<!--[if lt IE 9]>
		<link rel="stylesheet" type="text/css" href="stylesheets/ie.css" />
	<![endif]-->
	<!--счетчик-->
    <script language="Javascript" type="text/javascript" src="javascript/jquery-1.4.1.js"></script>
	<script language="Javascript" type="text/javascript" src="js/jquery.lwtCountdown-1.0.js"></script>
	<script language="Javascript" type="text/javascript" src="js/misc.js"></script>
	<link rel="Stylesheet" type="text/css" href="stylesheets/main.css"></link>
	<!--счетчик-->
	        <!-- The awesome FlexSlider plugin -->
        <link href="stylesheets/flexslider.css" rel="stylesheet">
        
        <!-- The awesome Nivo-Lightbox plugin -->
        <link href="stylesheets/nivo-lightbox.css" rel="stylesheet">
        <link href="stylesheets/default.css" rel="stylesheet">
</head>

<body>
		<script language="javascript" type="text/javascript">
			jQuery(document).ready(function() {
				 jQuery('#countdown_dashboard').countDown({
					targetDate: {
						'day': 		18,
						'month': 	11,
						'year': 	2014,
						'hour': 	12,
						'min': 		0,
						'sec': 		0
					}
				});
				
				 jQuery('#email_field').focus(email_focus).blur(email_blur);
				 jQuery('#subscribe_form').bind('submit', function() { return false; });
			});
		</script>
		
	<!-- Begin Header -->
	<header class="clearfix">
		<div class="container">

			<!-- Logo -->
			<div id="logo" class="three columns"> 8 (921) 859-20-59</div>
			<img src="images/logo.png" style="float:left; margin-right:15px;"/><h3 class="discript ">
			<span>Студия создания сайтов</span> <br/>для среднего и крупного бизнеса</h3>
		</div>
	</header>
	<!-- End Header -->

	<!-- Begin Hero -->
<section id="section1" class="hero container">
	<div class="zagolovok">
		<h1>Создание сайтов для среднего и крупного бизнеса<h1>
		<h2>При заказе сайта, <br/><strong>20 000 руб.</strong> на продвижение в подарок!</h2>
	</div>
	<!-- Begin Subscribe -->
	<section class="subscribe container">
		<h3>Закажите расчет бюджета сайта</br><span style="font-size:0.9em"> и мы включим в него ваш подарок </span></h3>
		<div id="container">
	<!-- Countdown dashboard start -->
			<div style="margin: 0 auto 7px;text-align: center;">До конца акции:</div>
		<div id="countdown_dashboard">
			<div class="dash days_dash">
				<span class="dash_title">дней</span>
				<div class="digit">0</div>
				<div class="digit">0</div>
			</div>

			<div class="dash hours_dash">
				<span class="dash_title">часов</span>
				<div class="digit">0</div>
				<div class="digit">0</div>
			</div>

			<div class="dash minutes_dash">
				<span class="dash_title">минут</span>
				<div class="digit">0</div>
				<div class="digit">0</div>
			</div>

			<div class="dash seconds_dash">
				<span class="dash_title">секунд</span>
				<div class="digit">0</div>
				<div class="digit">0</div>
			</div>
		</div>
		</div>
        <?php include_once 'form.php'; 
		if($send == 1) echo '<p class="thank">Заявка отправлена!</p>';
		if($send == 2) echo '<p class="foo">Необходимо заполнить все поля</p>';
		?>
		<form action="/index.php" method="post" class="clearfix">
        <input type="hidden" name="token" value="1" />
			<input type="text" id="email" name="name" placeholder="Ваше имя" />	
			<input type="text" id="email" name="phone" placeholder="Ваш телефон" />			
			<input type="text" id="email" name="txtArea" placeholder="Суть вашего проекта или текущий сайт" />				
			<input type="submit" onclick="yaCounter13778395.reachGoal('send1'); return true;" value="Отправить" name="subscribe" class="submit">		
    	</form>	
	</section>
	<!-- End Subscribe -->		
</section>
	<!-- End Hero -->
<!-- Begin Icons -->
<div id="bg">
	<section id="section2" class="overview container">
		<br class="clear">
		<!-- Content Boxes -->
		<div style="width: 150px;margin: 15px 10px" class="content-box one-third column icon">
			<img src="images/icons/calend.png" alt="Создаем сайты больше 3-х лет" title="Создаем сайты больше 3-х лет">
			<h3>Создаем сайты больше 3-х лет</h3>
		</div>
		<div style="width: 150px;margin: 15px 10px;" class="content-box one-third column icon">
			<img src="images/icons/project.png" alt="Мы завершили 196 проектов" title="Мы завершили 196 проектов">
			<h3>Мы завершили 196 проектов</h3>
		</div>
		<div style="width: 230px;margin: 15px 10px;" class="content-box one-third column icon">
			<img src="images/icons/reccomend.png" alt="Каждый 3-ий клиент пришел по рекомендации" title="Каждый 3-ий клиент пришел по рекомендации" >
			<h3>Каждый 3-ий клиент пришел по рекомендации</h3>
		</div>
		<div style="width: 165px;margin: 15px 10px" class="content-box one-third column icon">
			<img src="images/icons/report.png" alt="Отчет клиенту о работе каждый день" title="Отчет клиенту о работе каждый день">
			<h3>Отчет клиенту о работе каждый день</h3>
		</div>
		<div style="width: 160px;margin: 15px 10px" class="content-box one-third column icon">
			<img src="images/icons/guarant.png" alt="Пожизненная гарантия на сайт" title="Пожизненная гарантия на сайт">
			<h3>Пожизненная гарантия на сайт</h3>
		</div>
		<!-- Content boxes -->
	</section>
</div>
	<!-- End Icons -->	
<div class="plitka">	
	<section id="section2" class="overview container">
		<br class="clear">
		<h2 class="sixteen columns">Мы с удовольствием разработаем для вас:</h2>
		<!-- Content Boxes -->
		<div class="content-box one-third column">
			<img src="images/icons/lp.png" alt="Посадочные страницы (landing page)" title="Посадочные страницы (landing page)">
			<h3>Посадочные страницы</h3>
		</div>
		<div class="content-box one-third column">
			<img src="images/icons/vz.png" alt="Изготовление сайта-визитки" title="Изготовление сайта-визитки">
			<h3>Сайты-визитки</h3>
		</div>
		<div class="content-box one-third column">
			<img src="images/icons/pr.png" alt="Изготовление промо-сайта" title="Изготовление промо-сайта">
			<h3>Промо-сайты</h3>
		</div>
		<div class="content-box one-third column">
			<img src="images/icons/im.png" alt="Создание интернет-магазина" title="Создание интернет-магазина">
			<h3>Интернет-магазины</h3>
		</div>
		<div class="content-box one-third column">
			<img src="images/icons/kp.png" alt="Разработка корпоративных порталов" title="Разработка корпоративных порталов">
			<h3>Корпоративные порталы</h3>
		</div>					
	</section>
		<section id="section2" class="overview container else">
		<br class="clear">
		<h2 class="sixteen columns">Дополнительные услуги:</h2>
		<!-- Content Boxes -->
		<div style="width: 220px;" class="content-box one-third column">
			<img src="images/icons/marketing.png" alt="Маркетинг" title="Маркетинг">
			<h3>Маркетинг</h3>
		</div>
		<div style="width: 220px;" class="content-box one-third column">
			<img src="images/icons/naming.png" alt="Нейминг" title="Нейминг">
			<h3>Нейминг</h3>
		</div>
		<div style="width: 220px;" class="content-box one-third column">
			<img src="images/icons/logos.png" alt="Логотипы" title="Логотипы">
			<h3>Логотипы</h3>
		</div>
		<div style="width: 220px;" class="content-box one-third column">
			<img src="images/icons/poligrafi.png" alt="Полиграфия" title="Полиграфия">
			<h3>Полиграфия</h3>
		</div>		
	</section>
</div>	
	<!-- Begin Static -->
	<section id="section3" class="static container">
		<img class="sidephone-small" src="images/devices.png" alt="Адаптивная верстка" title="Адаптивная верстка">
		<img class="sidephone-big" src="images/note.png" alt="Адаптивная верстка" title="Адаптивная верстка">

		<!-- Content -->
		<div class="sixteen columns offset-by-eight stekltext">
			<h2>Адаптивная верстка</h2>
			<p>Ваш сайт выглядит одинаково хорошо<br /> на любых электронных устройствах.<br /> Современное решение для вашего бизнеса. <br/><br/>
		</div>
	</section>
	<!-- End Static -->



	<!-- Begin Static -->
	<section id="section4" class="static container">
		<img class="static-phone " src="images/usability.jpg" alt="Программирование пользователей" title="Программирование пользователей">

		<!-- Content -->
		<div class="eight columns">
			<h2>Программирование пользователей</h2>
			<p>Разработка сайта строится таким образом, чтобы попавший на него пользователь, не только понял, что нашел то, что искал, 
			но и с наибольшей вероятностью, заказал, позвонил или купил!</p>
		</div>
	</section>
<!-- Parallax section: List of trusted clients -->
<div id="bg2">
	<section id="section2" class="overview container">
	<h2  style="color:#fff;">Мы работали для:</h2>
		<br class="clear">
		<!-- Content Boxes -->
		<div style="width: 150px;margin: 15px 10px" class="content-box one-third column icon">
			<img src="images/clients/client-1.png" alt="DHL" title="DHL">
		</div>
		<div style="width: 150px;margin: 15px 10px;" class="content-box one-third column icon">
			<img src="images/clients/client-2.png" alt="Emirates holidays" title="Emirates holidays">
		</div>
		<div style="width: 230px;margin: 15px 10px;" class="content-box one-third column icon">
			<img src="images/clients/client-3.png" alt="Звезды путешествий" title="Звезды путешествий" >
		</div>
		<div style="width: 165px;margin: 15px 10px" class="content-box one-third column icon">
			<img src="images/clients/client-4.png" alt="BMW" title="BMW">
		</div>
		<div style="width: 160px;margin: 15px 10px" class="content-box one-third column icon">
			<img src="images/clients/client-5.png" alt="Минкомсвязь России" title="Минкомсвязь России">
		</div>
		<!-- Content boxes -->
	</section>
</div>
   <!-- Portfolio section -->
        <section id="portfolio" class="light no-bottom-padding">
            <div class="container compact">
                <h1>Наши успешные проекты</h1>
                <p class="align-center">Все сайты сюда, к можалению, не поместились, но если вы хотите, чтобы ваш проект занял тут свое место - дайте знать!</p>
            </div>
            <div class="portfolio flexslider">
                <ul class="slides">
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-1.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-1.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-2.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-2.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-3.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-3.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-4.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-4.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-5.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-5.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-6.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-6.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-7.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-7.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-8.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-8.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-1.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-1.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-2.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-2.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-3.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-3.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-4.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-4.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-5.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-5.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-6.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-6.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-7.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-7.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-8.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-8.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-1.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-1.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-2.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-2.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-3.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-3.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-4.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-4.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-5.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-5.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-6.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-6.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-7.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-7.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-8.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-8.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-1.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-1.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-2.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-2.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-3.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-3.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-4.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-4.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-5.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-5.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-6.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-6.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-7.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-7.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-8.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-8.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-1.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-1.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-2.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-2.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-3.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-3.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-4.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-4.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-5.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-5.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-6.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-6.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <img src="images/folio/portfolio-7.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-7.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/folio/portfolio-8.png" alt="" />
                            <div class="overlay">
                                <span class="title">Biznex website</span>
                                <span class="subtitle">Logo / <em>web design</em> / development</span>
                                <span class="likes"><img src="./img/likes.png" alt="" />56 likes</span>
                                <a href="./assets/portfolio-8.png" data-lightbox-gallery="portfolio" class="zoom"><img src="./img/spacer.gif" alt="" /></a>
                                <a href="#" class="link"><img src="./img/spacer.gif" alt="" /></a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
		<section class="phone">	
	<center style="padding:20px 0px;">Звоните:
	<h1 style="margin-top:20px;color: #ff6d34;">8 (921) 859-20-59</h1></center>
	</section>
<!-- Parallax section: Design features -->
<!-- End Static -->
<div id="bg">	
	<section class="phone">
    <center> <h2 class="sixteen columns" style="color:#fff;">Почему нам доверяют?</h2>	</center>
		<div class="five" id="another">
		<h4 style="color:#999;">Как работают другие:</h4>		<h4 style="color:#c8066f">Как работаем мы:</h4>
		<div style="clear:both;"></div>
			<div class="string">
				<p><span class="number" style="padding:11px 17px;">1</span><span class="bad"> Сделали и забыли.</span> Любые даже самые мелкие доработки	и дополнения выполняются месяцами.</p>
				<p><span class="number1" style="padding:11px 17px;">1</span><span>Пожизненная гарантия.</span> Наш сайт будет работать вечно. Срок реакции на дополнения - от нескольких часов.</p>
			</div>
			<div class="string">
				<p><span class="number">2</span><span class="bad">Нет обратной связи.</span> Вы никогда не знаете, на какой стадии сейчас работа. </p>
				<p><span class="number1">2</span><span>Отчет каждый день.</span> Раз в день мы пришлем вам письмо и расскажем, что нового в работе над вашим сайтом.</p>			
			</div>
			<div class="string">
				<p><span class="number">3</span><span class="bad">Непредсказуемый результат.</span> После сдачи брифа, остается только догадываться, как дизайнер "увидит" ваш сайт.</p>
				<p><span class="number1">3</span><span>Прототипирование дизайна.</span> В прототипе видно расположение и назначение элементов, так же вы получите несколько образцов стилистики будущего сайта.</p>				
			</div>
			<div class="string">
				<p><span class="number">4</span><span class="bad">Формальный подход.</span> Клиента спрашивают лишь о его желаниях, не заботясь о потребностях. Что бы ни случилось, ответ один: вы сами так захотели!</p>	
				<p><span class="number1">4</span><span>Мы будем спорить!</span> Как сказал Стив Джобс, "Нет смысла нанимать толковых людей, а затем указывать, что им делать." Мы вникнем в задачу настолько глубоко, что предложим вам только рациональные решения.</p>				
			</div>
			<div class="string" style="border:none;">
				<p><span class="number">5</span><span class="bad">Трудность использования.</span> Вам создали сайт, но пользоваться им вы, ни ваши сотрудники не умеют.</p>	
				<p><span class="number1">5</span><span>Видео-инструкция.</span> Или в текстовом виде, по вашему желанию. Все этапы создания	страниц и выполнения любых задач в административной панели.</p>				
			</div>				
		</div>
	</section>
</div>
	<div style="clear:both;"></div>
	<section class="phone">	
<section class="subscribe container" id="form2">
		<h3 style="margin-bottom:10px;">Закажите обратный звонок</br><span style="font-size:0.9em"> и получите подарок </span></h3>
        <?php
		
		if($send2 == 1) echo '<p class="thank">Заявка отправлена!</p>';
		if($send2 == 2) echo '<p class="foo">Необходимо заполнить все поля</p>';
		?>
		<form action="/index.php#form2" method="post" class="clearfix">
        <input type="hidden" name="token" value="2" />
			<input type="text" id="email" name="name2" placeholder="Ваше имя" />	
			<input type="text" id="email" name="txtArea2" placeholder="Ваш телефон" />				
			<input type="submit" onclick="yaCounter13778395.reachGoal('send2'); return true;" value="Отправить" name="subscribe" class="submit">		
			
		</form>			

	</section>
	<div style="clear:both"></div>
	</section>
	<!-- Begin Detail -->
	<!--section id="section5" class="detail container">
		<h2 class="sixteen columns">Ваш новый, красивый, удобный диван ждет вас!.</h2>
		<div class="save_percent"></div>
		<br class="clear">
<img src="images/zoom/placeholder.png"  alt="Лучшие диваны в Спб" title="Лучшие диваны в Спб" />
		<!-- Loupe -->
		<!--div class="loupe-gallery">
			<div class="loupe-container">
				<figure class="loupe-figure">
					<div class="loupe" data-initplacement="-40,-100" data-boundingbox="-30,-20,410,180" data-scale-ratio="2" data-src="images/zoom/detail-big.png" data-displacementmap="images/zoom/loupedisplacementmap.png">
					 	<img class="loupe-image" src="images/zoom/loupe.png" width="245" height="257" alt="" />
					 	<div class="tooltip click">Кликните и тяните</div>
					 	<div class="tooltip touch">Кликните и тяните</div>
					</div>
					<div id="gallery-loupe">
						<img class="gallery-content content loupeView" src="images/zoom/detail-small.png" width="559" height="316"  alt="" />
					</div>
				</figure>
				<img class="loupe-still" src="images/zoom/placeholder.png" width="900" alt="" />
			</div>
		</div-->
	<!--/section-->
	<!-- End Detail -->
	<!--section class="phone" style="border:none">	
	<center style="padding:20px 0px;">Звоните:
	<h1 style="margin-top:20px;color: #ff6d34;">8 (812) 642-46-20</h1></center>
	</section>
	<!-- Begin Gallery -->
	<!--section id="section6" class="gallery container">
		<h2 class="sixteen columns">The screenshot gallery.</h2>
		<p class="sub-heading twelve columns offset-by-four">This easy shortcode is amazing. If you want to show your app just pop in the screenshots and the magic happens.</p>
		<br class="clear">
		<!-- Slider -->
		<!--ul class="gallery-bxslider clearfix">
			<li>
				<div class="one-third column screenshot">
					<img src="images/gallery/screen1.jpg" alt="">
				</div>
				<div class="one-third column screenshot">
					<img src="images/gallery/screen2.jpg" alt="">
				</div>
				<div class="one-third column screenshot">
					<img src="images/gallery/screen3.jpg" alt="">
				</div>
			</li>
			<li>
				<div class="one-third column screenshot">
					<img src="images/gallery/screen4.jpg" alt="">
				</div>
				<div class="one-third column screenshot">
					<img src="images/gallery/screen5.jpg" alt="">
				</div>
				<div class="one-third column screenshot">
					<img src="images/gallery/screen6.jpg" alt="">
				</div>
			</li>
		</ul>

		<!-- Pager -->
		<!--div id="gallery-pager"></div>
		<div class="small-border"></div>

	</section-->
	<!-- End Gallery -->



	<!-- Begin Footer -->
	<footer>
		<div class="container">
			<ul class="footer-action">
				<!--li><a class="button small" href="#">Download now<i class="go small"></i></a></li-->
				<li><a id="top" class="button small" href="#">Наверх<i class="top"></i></a></li>
			</ul>
			<p class="copyright">© 2013 Сайтория.рф.     </p>
		</div>
		<!-- Yandex.Metrika counter -->
<script type="text/javascript">
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter13778395 = new Ya.Metrika({id:13778395,
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
<noscript><div><img src="//mc.yandex.ru/watch/13778395" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
</footer>
	<!-- End Footer -->
	<!-- Javascript -->
	<script src="javascript/libs/prototype.js" type="text/javascript" charset="utf-8"></script>
	<script src="javascript/libs/scriptaculous.js" type="text/javascript" charset="utf-8"></script>
	<script src="javascript/libs/sizzle.js" type="text/javascript" charset="utf-8"></script>
	<script src="javascript/jquery.easing.js" type="text/javascript" charset="utf-8"></script>
	<script src="javascript/jquery.nicescroll.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="javascript/jquery.scrollto.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="javascript/jquery.localscroll.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="javascript/jquery.bxslider.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="javascript/waypoints.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="javascript/notifications.js" type="text/javascript" charset="utf-8"></script>
	<script src="javascript/jquery.flexslider-min.js"></script>
        <script src="javascript/init.js" type="text/javascript" charset="utf-8"></script>

        <script src="javascript/nivo-lightbox.min.js"></script>

</body>
</html>