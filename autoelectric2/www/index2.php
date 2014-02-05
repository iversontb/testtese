<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>

    <title>АвтоЭлектрик</title>

    <link rel="stylesheet" href="css/main.css"/>

    <script type="text/javascript" src="js/modernizr-2.6.2.min.js"></script>
    <script type="text/javascript" src="js/jquery-1.8.3.js"></script>
    <script type="text/javascript" src="js/jquery.mousewheel.min.js"></script>
    <script type="text/javascript" src="js/jcarousellite.js"></script>
    <script type="text/javascript" src="js/gallery.js"></script>
    <script src="js/validate.min.js" type="text/javascript"></script>

    <script type="text/javascript">
        $(document).ready(function(){
            $('a[href*=#]').bind("click", function(e){
                var anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(anchor.attr('href')).offset().top
                }, 1000);
                e.preventDefault();
            });
            return false;
        });
    </script>
    <script type="text/javascript" src="js/jquery.main.js"></script>

    <!--[if lte IE 9]>
    <script src="js/jquery.placeholder.js"></script>
    <link rel="stylesheet" href="css/pie.css"/>
    <![endif]-->
    <!--[if lte IE 8]>
    <link rel="stylesheet" href="css/main-ie8.css"/>
    <![endif]-->
    <!--[if lte IE 7]>
    <link rel="stylesheet" href="css/main-ie7.css"/>
    <script src="js/jquery.ie7.js"></script>
    <![endif]-->
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-43037707-1', 'cars-odometr.ru');
        ga('send', 'pageview');

    </script>
</head>
<body>
<!-- popup -->
<div class="callBaclSale" style="display:none;">
    <div class="closeFone"></div>
    <form action="#" id="4Form" class="discount">
        <? if(!$_COOKIE["callSale"]){?>
        <h3>Узнать стоимость</h3>
        <fieldset><input class="name" type="text" placeholder="Ваше имя">
            </fieldset>
        <fieldset><input type="text" name="phone" placeholder="Телефон">
            <span></span>
            </fieldset>
        <fieldset ><input class="car" type="text" placeholder="Марка автомобиля">
            </fieldset>
        <input type="submit" class="button2" id="hSale3" value="Узнать стоимость">
        <?}else{?>
        <div class="thanks"><p>Спасибо за заявку!</p></div>
        <div class="date">
            <p class="textStyle"> Наши специалисты свяжутся с вами в ближайшее время</p>
            <a href="#" class="closeBut2">close</a>
        </div>
        <?}?>
    </form>
</div>
<!-- /popup -->
<!-- popup -->
<div class="callback" style="display:none;">
    <div class="closeFone"></div>
    <form action="#" id="3Form" class="discount">
        <h3>Заказать обратный звонок</h3>
        <p>Мы свяжемся с вами в ближайшее время</p>
        <fieldset><input class="name" type="text" placeholder="Ваше имя"></fieldset>
            <fieldset><input type="text" name="phone" placeholder="Телефон">
                <span></span>
            </fieldset>
            <input type="submit" class="button" id="CallZakaz" value="Заказать" title="Заказать">
    </form>
</div>
<!-- /popup -->
<!-- popup -->
<div class="popup" style="display:none;">
    <div class="closeFone"></div>
    <form action="#" id="secondForm" class="discount">
        <? if(!$_COOKIE["sale"]){?>
        <h3>Скидка на скрутку</h3>
        <fieldset><input class="name" type="text" placeholder="Ваше имя">
            </fieldset>
        <fieldset><input type="text" name="phone" placeholder="Телефон">
            <span></span></fieldset>
        <fieldset ><input class="car" type="text" placeholder="Марка автомобиля" required>
            </fieldset>
        <input type="submit" class="button" id="hSale2" value="Получить скидку" title="Получить скидку">
        <?}else{?>
            <div class="thanks"><p>Спасибо за обращение!</p></div>
            <div class="cod"><p>Код вашего купона:</p><span><?=$_COOKIE["sale"]?></span></div>
            <div class="date"><p>Вы сможете воспользоваться им до <?=$_COOKIE["date"]?>.</p>
                <a href="#" class="closeBut">close</a></div>
        <?}?>
    </form>
</div>
<!-- /popup -->
<!-- site -->
<div class="site">

    <!-- header -->
    <header class="header">

         <!-- gallery -->
        <button class="prev"></button>
        <div class="gallery">
            <ul>
                <li><a href="#"><img src="img/slide_img3.png" alt=""/><p><span>Хотите более выгодно продать </span></p><p><span>автомобиль?</span></p></a></li>
                <li><a href="#"><img src="img/slide_img1.png" alt=""/><p><span>Приобрели новый двигатель</span></p><p><span> и необходимо синхронизировать данные?</span></p></a></li>
                <li><a href="#"><img src="img/slide_img2.png" alt=""/><p><span>Установленны колеса </span></p><p><span>нестандартного диаметра?</span></p></a></li>
                <li><a href="#"><img src="img/slide_img3.png" alt=""/><p><span>Хотите более выгодно продать </span></p><p><span>автомобиль?</span></p></a></li>
                <li><a href="#"><img src="img/slide_img4.png" height="100%"  alt=""/><p><span>Поменяли приборную панель и </span></p><p><span>необходима корректировка показаний?</span></p></a></li>
            </ul>
        </div>
        <button class="next"></button>
        <!-- /gallery -->

        <h1 class="logo"><img src="img/logo.png" width="263" height="23" alt="Автодиагностика"></h1>
        <address><a href="#map" >Выезд по Москве и Московской области</a></address>
        <address class="tel">8 (495) 505-51-75</address>
        <a href="#" class="callme">заказать обратный звонок</a>
        <span>Корректировка одометра
            <span>от 1000 рублей!</span>
        </span>

        <form action="#" id="firstForm" class="discount">
            <? if(!$_COOKIE["sale"]){?>
                <h3>Скидка на скрутку</h3>
                <fieldset><input class="name" type="text" placeholder="Ваше имя">
                </fieldset>
                <fieldset><input type="text" name="phone" placeholder="Телефон">
                    <span></span></fieldset>
                <fieldset ><input class="car" type="text" placeholder="Марка автомобиля" required>
                </fieldset>
                <input type="submit" class="button" id="hSale" value="Получить скидку" title="Получить скидку">
            <?}else{?>
                <div class="thanks"><p>Спасибо за обращение!</p></div>
                <div class="cod"><p>Код вашего купона:</p><span><?=$_COOKIE["sale"]?></span></div>
                <div class="date"><p>Вы сможете воспользоваться им до <?=$_COOKIE["date"]?>.</p>
                    <a href="#" class="closeBut">close</a>
                </div>

            <?}?>
        </form>
    </header>
    <!-- /header -->

    <!-- content -->
    <div class="content">
        <div class="wraper2">
            <h1 class="first">Почему корректировку выгодно заказать у нас?</h1>
            <ul>
                <li class="setting"><p>Нашу работу не обнаружат, настройку проводят квалицифированные специалисты</p></li>
                <li class="correction"><p>Корректировка безопасна для автомобиля и проводится на профессиональном
                    оборудовании</p></li>
                <li class="car"><p>Успешно работаем с автомобилями любых марок</p></li>
                <li class="map"><p>Выезд в любой район Москвы и ближнего подмосковья</p></li>
                <li class="legality"><p>Коррекция одометра легальная и законная процедура.</p></li>
            </ul>

            <!-- sale -->
            <div class="sale">
                <a href="#" class="bSale">Получить скидку</a>
            </div>
            <!-- /sale -->
        </div>
        <div class="wraper2">
            <h1>Для чего нужна корректировка одометра?</h1>

            <!-- info -->
            <div class="info">
                <div>
                    <div>
                        <div class="plan">
                            <h4>Планируете продать автомобиль?</h4>

                            <p>Информация о пройденных километрах многое скажет об износе двигателя и других деталей. Совсем
                                необязательно умалчивать о том, что продавец скрутил пробег, но и необязательно это
                                афишировать. </p>
                        </div>
                        <div class="buy">
                            <h4>Купили колеса нестандартного размера?</h4>

                            <p>И тут корректировка спидометра только поможет согласовать сведения о пробеге с
                                реальностью.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /info -->

            <!-- info-next -->
            <div class="info-next">
                <div>
                    <div>
                        <div class='halting'>
                            <h4>Сбой в работе электроники или питания?</h4>

                            <p>Если устанавливается новый блок управления или приборная панель с другой машины, то
                                желательно скрутить показания спидометра, чтобы приборная доска показывала верные цифры.</p>
                        </div>
                        <div class="get">
                            <h4>Приобрели новый двигатель?</h4>

                            <p>В этом случае просто необходимо скрутить пробег автомобиля, чтобы синхронизировать
                                отображаемые данные с фактическим состоянием дел, иначе получится, что по показаниям прибора
                                двигатель проработал гораздо дольше, чем на самом деле.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /info-next -->
        </div>

        <!-- comment -->
        <div class="comment">
            <div class="wraper2">
            <p>Самостоятельно проводить эту операцию не рекомендуется, так как данные о проходе авто дублируются в
                нескольких блоках и нужно знать все нюансы. </p>
                </div>
        </div>
        <!-- /comment -->
        <div class="wraper2">
        <!-- make -->
        <div class="make">
            <h1>Как это делается</h1>
            <p><span>Автоэлектрик</span> - это квалифицированные мастера с богатым опытом работы с различными электронными системами современных авто.</p>
            <p>Профессиональное оборудование позволяет корректировать одометр без вмешательства в приборную панель и блоки памяти автомобиля, через диагностический разъем <span>OBDII.</span></p>
            <p>Наши мастера знают все особенности различных марок авто и профессионально выполняют свою работу.</p>

            <!-- sale -->
            <div class="sale">
                <a href="#" class="bSale">Получить скидку</a>
            </div>
            <!-- /sale -->

        </div>
        <!-- /make -->
        </div>
        <div class="security">

            <!-- slideDownList -->
            <ul class="slideDownList">

                <li class="redList">
                    <div class="redListAfter"></div>
                    <div class="redListBefore"></div>
                    <div class="insideBlock">
                        <h3 class="safty">Безопасность</h3>
                        <p>Не навредит ли скрутка спидометра работе электронных систем автомобиля?</p>
                        <div class="slideText">
                            <p>Если ее делают специалисты – нет, никоим образом не скажется на функционировании приборов машины, вы сможете и дальше ездить комфортно и безопасно.</p>
                            <p>Скрутка может навредить только в том случае, если ее проводят непрофессионалы и люди, которые этим раньше не занимались.</p>
                        </div>
                    </div>
                </li>
                <li class="slideBut blueList">
                    <div class="redListAfter"></div>
                    <div class="redListBefore"></div>
                    <div class="insideBlock">
                        <h3 class="criminal">Законность</h3>
                        <p>Легальна ли корректировка спидометра, не является ли она каким-либо видом фальсификации или нарушением закона?</p>
                        <div class="slideText">
                            <p>Нет. Законом это ни как не регламентируется. Каждый водитель вправе делать со своей машиной то, что он захочет.</p>
                        </div>
                    </div>
                </li>
                <li class="slideBut yellowList">
                    <div class="redListAfter"></div>
                    <div class="redListBefore"></div>
                    <div class="insideBlock">

                        <h3 class="warranty">гарантии</h3>
                        <p>Мы гарантируем качество оказанных услуг:  у нас работают опытные специалисты, которые отвечают за успешный результат.</p>
                        <div class="slideText">
                            <p>Компания Автоэлектрик работает в сфере автомобильной электроники с 2002 года. За это время мы обслужили более 5 тысяч автомобилей. Наши мастера имеют огромный работы практическими со всеми марками автомобилей и умеют устранять любые неисправности, связанные с электрикой автомобиля. В своей работе мы придерживаемся следующих принципов - оперативность, качество, надежность. Т.е. наши мастера готовы максимально быстро выполнить вашу заявку, качественно устранить все неисправности вашего автомобиля, и при этом мы даем гарантию на все виды выполненных нами работ в течение месяца со дня выполнения заказа. В компании Автоэлектрик работают профессионалы своего дела. </p>
                        </div>

                    </div>
                </li>

            </ul>
            <!-- /slideDownList -->

        </div>
        <!-- /security -->
        <div class="wraper2">
         <!-- price -->
        <div class="price">
            <h1>Цены</h1>
            <p>Ниже приведены ориентировочные цены на услуги по скрутке / намотке пробега. Окончательная стоимость зависит от модели Вашего автомобиля / мотоцикла и года выпуска.
                Позвоните нам прямо сейчас 8 (495) 669-65-35 или закажите <a href="#" class="callme">обратный звонок бесплатно</a>, чтобы узнать точную стоимость корректировки пробега для вашего автомобиля.</p>
            <table>
                <tr>
                    <th>Отечественные автомобили (ВАЗ, ГАЗ, УАЗ, Нива)</th>
                    <td>от 1 000 р.</td>
                </tr>
                <tr>
                    <th>Японские автомобили (Toyota, Honda, Subaru, Suzuki, Nissan, Mazda, Mitsubishi)</th>
                    <td>от 1 500 р.</td>
                </tr>
                <tr>
                    <th>Немецкие автомобили (Ford, Volkswagen, Opel и др.)</th>
                    <td>от 1 500 р.</td>
                </tr>
                <tr>
                    <th>Другие марки автомобилей и мотоциклы</th>
                    <td class="last">по договоренности</td>
                </tr>
            </table>
            <div class="wraper">

                <div class="sale">
                    <a href="#" class="bSale">Получить скидку</a>
                </div>


                <!-- sale2 -->
                <div class="sale2">
                    <a href="#" class="bSale2">Узнать стоимость</a>
                </div>
                <!-- /sale2 -->

            </div>
        </div>
        <!-- /price -->
        </div>
    </div>
    <!-- /content -->

</div>
<!-- /site -->

<!-- footer -->
<footer class="footer">


    <div class="footerTop">
        <div class="wraper2">
            <p>Точную информацию по стоимости услуг Вы можете уточнить у менеджера по телефону
                <span>8 (495) 505-51-75 с 9:00 до 23:00.</span></p>
        </div>
    </div>

    <div class="mapContainer" id="map">
        <hgroup>
            <h2>Наши адреса на карте</h2>
            <h3>Выезд в любой район Москвы и Подмосковья</h3>
        </hgroup>
        <div class="map">

            <div class="pointer type1"><img src="img/label.png" width="15" height="21" alt=""></div>
            <div class="pointer type2"><img src="img/label.png" width="15" height="21" alt=""></div>
            <div class="pointer type3"><img src="img/label.png" width="15" height="21" alt=""></div>
            <div class="pointer type4"><img src="img/label.png" width="15" height="21" alt=""></div>

        </div>
        <div class="mapMenu">
            <ul>
                <li>
                    <a href="http://maps.yandex.ru/-/CVbez48P" target="_blank"  id="0"><span>1</span> Крылатские холмы, д. 33 к. 2 </a> <a href="#" class="yaMap">Я.Карта</a>
                </li>
                <li>
                    <a href="http://maps.yandex.ru/-/CVbezBKJ" target="_blank"  id="1"><span>2</span>  60 летия Октября пр-т, д.11а, стр. 8</a> <a href="#" class="yaMap">Я.Карта</a>
                </li>
                <li>
                    <a href="http://maps.yandex.ru/-/CVbezB8z" target="_blank"  id="2"><span>3</span> Тюменская, д. 6 к. 11 </a> <a href="#" class="yaMap">Я.Карта</a>
                </li>
                <li>
                    <a href="http://maps.yandex.ru/-/CVbezB~g" target="_blank" id="3"><span>4</span> Санникова, д. 9 к. 1 </a> <a href="#" class="yaMap">Я.Карта</a>
                </li>

            </ul>
            <a href="#" class="discountBut">получить скидку</a>
            <a href="#" class="priceBut">узнать стоимость</a>
        </div>
    </div>
</footer>
<!-- /footer -->
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter22009270 = new Ya.Metrika({id:22009270,
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
<noscript><div><img src="//mc.yandex.ru/watch/22009270" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<script type="text/javascript">
    /* <![CDATA[ */
    var google_conversion_id = 1002025072;
    var google_custom_params = window.google_tag_params;
    var google_remarketing_only = true;
    /* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
    <div style="display:inline;">
        <img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1002025072/?value=0&amp;guid=ON&amp;script=0"/>
    </div>
</noscript>
</body>
</html>