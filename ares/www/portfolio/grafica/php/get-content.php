<?php

$id = $_GET['id'];


$json_data = '
    <div class="large-layout">
        <dl>
            <dt>Выставка:</dt>
            <dd>"Нефть и Газ-20013"</dd>
            <dt>Компания:</dt>
            <dd>"Тат-нефть"</dd>
        </dl>



        <!-- gallery-wrap -->
        <div class="gallery-wrap">
            <button class="prev"></button>
            <button class="next"></button>

            <div class="gallery-inner">
                <ul>
                    <li>
                        <a href="pic/1-1.jpg">
                            <img src="pic/1.jpg" height="70" width="107" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="pic/2-1.jpg">
                            <img src="pic/2.jpg" height="70" width="107" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="pic/3-1.jpg">
                            <img src="pic/3.jpg" height="70" width="107" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="pic/4-1.jpg">
                            <img src="pic/4.jpg" height="70" width="107" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="pic/5-1.jpg">
                            <img src="pic/5.jpg" height="70" width="107" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="pic/6-1.jpg">
                            <img src="pic/6.jpg" height="70" width="107" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- /gallery-wrap -->

        <dl>
            <dt>Выставка:</dt>
            <dd>MIPS-2013 </dd>
            <dt>Место проведения:</dt>
            <dd>ГАО "ВВЦ"</dd>
            <dt>Площадь:</dt>
            <dd>500 кв.м.</dd>
            <dt>Этажность:</dt>
            <dd>1 этаж</dd>
        </dl>
        <div class="about">
            <h2>Описание: </h2>
            <p>Выcтавка — публичная демонстрация достижений в области экономики, науки, техники, культуры, искусства и
             других областях общественной жизни. Понятие может обозначать как само мероприятие, так и место проведения
             этого мероприятия. Различают выставки: местные, национальные, международные и всемирные, а также всеобщие,
             охватывающие все отрасли человеческой деятельности (например, Выставка достижений народного хозяйства СССР
             ВДНХ), и специализированные, посвящённые только одной области деятельности человека.</p>
        </div>
    </div>
';



$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);
    
echo $json_data;
exit;
?>