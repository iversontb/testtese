<?php
$page = $_GET["page"];
 
// in this file as an example shows these possible answers:


// These examples are html templates for replies
if ( $page == '/index' ) {
    $htmlStep = '{"html": "<!-- index-gallery -->
            <div class=\"index-gallery\">
                <div>
                    <div id=\"index-gallery\">
                        <a href=\"portfolio/grafica\">
                            <img src=\"pic/grafica-group.jpg\" alt=\"\" width=\"968\" height=\"339\" />
                        </a>
                    </div>
                </div>
            </div>
            <!-- /index-gallery -->

            <!-- why-we -->
            <div class=\"why-we\">

                <article>
                    <h2>Магия front-end</h2>
                    <div class=\"start-content\">
                        <dl>
                            <dt>Мы сделаем Ваш сайт:</dt>
                            <dd>легким;</dd>
                            <dd>быстрым;</dd>
                            <dd>кроссбраузерным;</dd>
                            <dd>удобным для пользователя.</dd>
                        </dl>
                        <p>Мы можем воплотить в жизнь то, что казалось Вам невозможным.</p>
                    </div>
                    <!--<a href=\"#\" class=\"e-button e-button_why\">Подробнее</a>-->
                </article>

                <article>
                    <h2>Заказчику</h2>
                    <div class=\"start-content\">
                        <dl>
                            <dt>Только для Вас:</dt>
                            <dd>выполним заказ в срок;</dd>
                            <dd>внедрим самые коварные задумки дизайнера;</dd>
                            <dd>попиксельное соответствие дизайну.</dd>
                        </dl>
                        <p>Качество - это наша цель.</p>
                        <p>Мы ценим Ваше доверие и можем его оправдать.</p>
                    </div>
                </article>

                <article>
                    <h2>Программисту</h2>
                    <div class=\"start-content\">
                        <dl>
                            <dt>Вы получите:</dt>
                            <dd>чистый, документированный HTML, CSS, JS;</dd>
                            <dd>документированный AJAX с PHP примерами.</dd>
                            <dd>оптимизированный JSON в ответах сервера;</dd>
                            <dd>связь с нашим представителем, чтобы решить текущие вопросы.</dd>
                        </dl>
                    </div>
                </article>

            </div>
            <!-- why-we -->"}';
} else if ( $page == '/contact' ) {
    $htmlStep = '{"html": "<!-- address -->
            <section class=\"address\">
                <h1>Связаться с нами через:</h1>

                <div>
                    <a href=\"https://www.facebook.com/pages/Web-Ares/572268776168536\" class=\"f\">facebook</a>
                </div>
                <address class=\"e-contact\">
                    <a href=\"mailto:ares@webares.com\" class=\"mail\">ares@webares.com</a>
                    <span class=\"phone\">+38 (096) 218-83-88</span>
                    <a href=\"skype:facebook:office_254\" class=\"skype\">facebook:office_254</a>
                    <span class=\"icq\">88888888</span>
                </address>
                <!--/e-contact-->
            </section>
            <!-- /address -->

            <!-- feedback__form -->
            <section class=\"feedback__form\">
                <h2>Связаться с нами на прямую:</h2>

                <!-- feedback -->
                <form class=\"feedback\" id=\"feedback\" action=\"php/feedback.php\">
                    <input class=\"feedback__name\" name=\"name\" id=\"name\" type=\"text\" placeholder=\"ФИО\">
                    <input class=\"feedback__mail\" id=\"mail\" name=\"mail\" type=\"email\" placeholder=\"Введите свой e-mail\">
                    <textarea class=\"feedback__area\" id=\"message\" name=\"message\" placeholder=\"Пожелание, дополнительная иформация\"></textarea>
                    <input class=\"feedback__send\" type=\"submit\" value=\"Отправить\">
                </form>
                <!-- /feedback -->

            </section>
            <!-- /feedback__form -->

            <!-- our-team -->
            <section class=\"our-team\">
                <h2>Наша команда:</h2>
                <ul>
                    <li>
                        <img src=\"pic/pic5.png\" width=\"78\" height=\"106\" alt=\"\"/>
                        <h3>Петрунин Николай</h3>
                        <dl>
                            <dt>Должность:</dt>
                            <dd>Front-end-programmer</dd>
                            <dt>Стаж:</dt>
                            <dd>3 года</dd>
                        </dl>
                    </li>
                    <li>
                        <img src=\"pic/pic5.png\" width=\"78\" height=\"106\" alt=\"\"/>
                        <h3>Петрунин Евгений</h3>
                        <dl>
                            <dt>Должность:</dt>
                            <dd>Front-end-programmer</dd>
                            <dt>Стаж:</dt>
                            <dd>2 года</dd>
                        </dl>
                    </li>
                </ul>
            </section>
            <!-- /our-team -->"}';
} else if ( $page == '/about-us' ) {
    $htmlStep = '{"html": "<!--window-->
            <div class=\"window\">

                <!-- content -->
                <div class=\"content\">

                    <h1>Web Ares - команда front-end разработчиков, которая воплотит ваши мечты в
                        жизнь.</h1>
                    <p><b>Web Ares</b> - аутсорсинговая компания. Мы специализируемся на верстке и javascript разработке любой сложности</p>

                    <p>Мы работаем для любого клиента, в любой точке мира, с сами разнообразными
                        требованиями и пожеланиями.</p>

                    <p><b>Наша команда</b> - это молодые и энергичные специалисты, которые на
                        протяжении 3 лет, занимаются созданием, наполнением и продвижением сайтов,
                        максимально удовлетворяющие потребностям и запросам наших клиентов.</p>

                    <p>Разработка сайтов для нас это не просто работа - это наше увлечение,
                        благодаря которому у нас есть отличная возможность познать что-то новое
                        либо поделиться нашими бесценными знаниями с клиентами.</p>

                    <p>Мы предоставляем 100% техническую и информационную поддержку для всех наших
                        клиентов.</p>

                    <h3>В числе наших преимуществ:</h3>
                    <ul>
                        <li>штат талантливых, высококвалифицированных front end разработчиков;</li>
                        <li>прозрачность, стабильность в сотрудничестве с клиентом;</li>
                        <li>гарантированная эффективность использования материальных, а также временных ресурсов клиента.</li>
                    </ul>


                </div>
                <!-- /content -->

            </div>
            <!--/window-->"}';
} else if ( $page == '/portfolio' ) {
    $htmlStep = '{"html": "<!-- window -->
            <div class=\"window\">

                <!-- portfolio -->
                <div class=\"portfolio\">

                    <!--b-galery-->
                    <ul>
                        <li>
                            <ul class=\"portfolio__using\">
                                <li><a href=\"#\" class=\"html5\" title=\"HTML5\">HTML5</a></li>
                                <li><a href=\"#\" class=\"ajax\" title=\"ajax\">ajax</a></li>
                            </ul>
                            <a data-pic=\"pic/grafica-group-2.jpg\" href=\"portfolio/grafica\">
                                <img src=\"pic/grafica-group-2.jpg\" width=\"232\" height=\"122\" alt=\"\">
                            </a>
                            <ul class=\"portfolio__programmers\">
                                <li>
                                    <a href=\"/contact.html\">
                                        <img src=\"pic/pic5.png\" width=\"78\" height=\"106\">
                                        <span>Петрунин Николай</span>
                                        <span>front-end разработчик</span>
                                    </a>
                                </li>
                                <li>
                                    <a href=\"/contact.html\">
                                        <img src=\"pic/pic5.png\" width=\"78\" height=\"106\">
                                        <span>Петрунин Евгений</span>
                                        <span>front-end разработчик</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <!--b-galery-->

                    <!-- scroll -->
                    <div class=\"scroll\"></div>
                    <!-- /scroll -->

                </div>
                <!-- /portfolio -->

            </div>
            <!-- /window -->"}';
} else if ( $page == '/news' ) {
    $htmlStep = '{"html": "<!-- window -->
            <div class=\"window\">

                <!-- servises -->
                <article class=\"servises\">

                </article>
                <!-- /servises -->

            </div>
            <!-- /window -->"}';
}

$htmlStep = str_replace("\r\n",'',$htmlStep);
$htmlStep = str_replace("\n",'',$htmlStep);

echo $htmlStep;
exit;
?>