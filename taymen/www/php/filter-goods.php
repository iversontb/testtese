<?php
//входящие данные из фильтра

    $json_data = '<div class="catalog-product bordered">
                            <div>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span class="catalog-product__title">
                                                <span>Спининговые</span>
                                            </span>
                                            <img src="pic/prod4.png" width="161" height="184" alt="">
                                            <span class="catalog-product__count">смотреть все (149) моделей</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="catalog-product__title">
                                                <span>Спининговые</span>
                                            </span>
                                            <img src="pic/prod3.png" width="161" height="184" alt="">
                                            <span class="catalog-product__count">смотреть все (149) моделей</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="catalog-product__title">
                                                <span>Спининговые</span>
                                            </span>
                                            <img src="pic/prod2.png" width="161" height="184" alt="">
                                            <span class="catalog-product__count">смотреть все (149) моделей</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="catalog-product__title">
                                                <span>Спининговые</span>
                                            </span>
                                            <img src="pic/prod1.png" width="161" height="184" alt="">
                                            <span class="catalog-product__count">смотреть все (149) моделей</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="catalog-product__title">
                                                <span>Спининговые</span>
                                            </span>
                                            <img src="pic/prod4.png" width="161" height="184" alt="">
                                            <span class="catalog-product__count">смотреть все (149) моделей</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="catalog-product__title">
                                                <span>Спининговые</span>
                                            </span>
                                            <img src="pic/prod3.png" width="161" height="184" alt="">
                                            <span class="catalog-product__count">смотреть все (149) моделей</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="catalog-product__title">
                                                <span>Спининговые</span>
                                            </span>
                                            <img src="pic/prod2.png" width="161" height="184" alt="">
                                            <span class="catalog-product__count">смотреть все (149) моделей</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="catalog-product__title">
                                                <span>Спининговые</span>
                                            </span>
                                            <img src="pic/prod1.png" width="161" height="184" alt="">
                                            <span class="catalog-product__count">смотреть все (149) моделей</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>';




$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

echo $json_data;
exit;
?>