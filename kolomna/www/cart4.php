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
</head>
<body>
<!-- site -->
<div class="site">
    <!-- header -->
    <header class="header headBlack">

        <!-- insideHead -->
        <div class="insideHead">

            <!-- logo -->
            <a href="#" title="На главную" class="logo">simplePass</a>
            <!-- /logo -->

            <!-- mainMenu -->
            <nav class="mainMenu">
                <a href="#">Зачем ехать?</a>
                <a href="#" class="active">Единый билет</a>
                <a href="#">События</a>
                <a href="#">Приключения</a>
                <a href="#">Как добраться?</a>
            </nav>
            <!-- /mainMenu -->



            <a href="javascript:void()" class="cart">3</a>

        </div>
        <!-- /insideHead -->

    </header>
    <!-- /header -->

    <!-- site__content -->
    <div class="site__content">
		<?echo '<pre>';print_r($_POST);echo '</pre>';?>
        <!-- content-wrap -->
        <div class="content-wrap">

            <!-- insideBlock -->
            <div class="insideBlock">


                <!-- cartForm -->
                <form class="cartForm" action="#" method="post">

                    <p class="topicType4">Ок! Мы счастливы,
                        что вы решили провести Рождество в Коломне! </p>

                    <!-- stepBlock -->
                    <div class="stepBlock">
                        <img src="img/step3.png" width="964" height="58" alt="">
                    </div>
                    <!-- /stepBlock -->

                    <!-- payType -->
                    <div class="payType">

                        <p class="topicType5">выберите способ оплаты</p>

                        <!-- payList -->
                        <ul class="payList">
                            <li><a href="#"><img src="img/visa.jpg" width="142" height="74" alt=""></a> </li>
                            <li><a href="#"><img src="img/yandex.jpg" width="142" height="74" alt=""></a> </li>
                            <li><a href="#"><img src="img/web-money.jpg" width="142" height="74" alt=""></a> </li>
                            <li><a href="#"><img src="img/qiwi.jpg" width="142" height="74" alt=""></a> </li>
                            <li><a href="#"><img src="img/assist.jpg" width="142" height="74" alt=""></a> </li>
                        </ul>
                        <!-- /payList -->

                        <p class="worning">После оплаты на указанный e-mail вам будет отправлен ваучер с уникальным штрихкодом, который вам необходимо распечатать и показать на стойке регистрации отеля.</p>



                    </div>
                    <!-- /payType -->

                    <!-- yourOrder -->
                    <div class="yourOrder">
                        <p class="topicType5">ваш заказ</p>

                        <!-- bill -->
                        <div class="bill">
                            <ul>
                                <li class="rowBlock">
                                    <span>Дата прибытия</span>
                                    <time>6 - 7 января</time>
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

                        <a href="#" class="back">Назад</a>

                        <input type="submit" class="big_button big_red_button" value="оплатить">


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
        <p class="copy">&copy; 2013 I Love Kolomna.ru. Все права защищены</p>

        <address class="footerAddres">
            <dl>
                <dt>Служба поддержки клиентов:</dt>
                <dd>+7 (916) 481-89-67</dd>
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
                <li><a href="#">Цифры</a> </li>
                <li><a href="#">Карта</a> </li>
                <li><a href="#">Программа</a> </li>
                <li><a href="#">Проживание </a> </li>
                <li><a href="#">Как добраться?</a> </li>
            </ul>
            <ul>
                <li><a href="#">Правила и условия</a> </li>
                <li><a href="#">Купить</a> </li>
            </ul>

        </div>

    </div>
</footer>
<!-- /footer -->

</body>
</html>