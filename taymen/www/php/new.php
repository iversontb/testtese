<?php
$type = $_GET['type'];

    $json_data = '<li>
                                <a href="#">
                                    <h3>Катушка DAIWA Crossfire CF X</h3>
                                    <div>
                                        <img src="pic/prod1.png" width="161" height="184" alt="product">
                                    </div>
                                </a>
                                <dl>
                                    <dt>Артикул:</dt>
                                    <dd>125678-М</dd>
                                </dl>
                                <dl>
                                    <dt>Бренд:</dt>
                                    <dd>DAIWA</dd>
                                </dl>
                                <dl>
                                    <dt>Модель:</dt>
                                    <dd>Crossfire CF X</dd>
                                </dl>
                                <dl>
                                    <dt>Тип:</dt>
                                    <dd>Безинерционная</dd>
                                </dl>
                                <span class="old_price">4200 Р</span>
                                <span class="price">3500 р</span>
                                <div>
                                    <div class="stars_wrap">
                                        <div style="width: 80%;" class="stars"></div>
                                    </div>
                                    <a class="reviews" href="#">Отзывы: 28</a>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <h3>Катушка DAIWA Crossfire CF X</h3>
                                    <div>
                                        <img src="pic/prod1.png" width="161" height="184" alt="product">
                                    </div>
                                </a>
                                <dl>
                                    <dt>Артикул:</dt>
                                    <dd>125678-М</dd>
                                </dl>
                                <dl>
                                    <dt>Бренд:</dt>
                                    <dd>DAIWA</dd>
                                </dl>
                                <dl>
                                    <dt>Модель:</dt>
                                    <dd>Crossfire CF X</dd>
                                </dl>
                                <dl>
                                    <dt>Тип:</dt>
                                    <dd>Безинерционная</dd>
                                </dl>
                                <span class="old_price">4200 Р</span>
                                <span class="price">3500 р</span>
                                <div>
                                    <div class="stars_wrap">
                                        <div style="width: 80%;" class="stars"></div>
                                    </div>
                                    <a class="reviews" href="#">Отзывы: 28</a>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <h3>Катушка DAIWA Crossfire CF X</h3>
                                    <div>
                                        <img src="pic/prod1.png" width="161" height="184" alt="product">
                                    </div>
                                </a>
                                <dl>
                                    <dt>Артикул:</dt>
                                    <dd>125678-М</dd>
                                </dl>
                                <dl>
                                    <dt>Бренд:</dt>
                                    <dd>DAIWA</dd>
                                </dl>
                                <dl>
                                    <dt>Модель:</dt>
                                    <dd>Crossfire CF X</dd>
                                </dl>
                                <dl>
                                    <dt>Тип:</dt>
                                    <dd>Безинерционная</dd>
                                </dl>
                                <span class="old_price">4200 Р</span>
                                <span class="price">3500 р</span>
                                <div>
                                    <div class="stars_wrap">
                                        <div style="width: 80%;" class="stars"></div>
                                    </div>
                                    <a class="reviews" href="#">Отзывы: 28</a>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <h3>Катушка DAIWA Crossfire CF X</h3>
                                    <div>
                                        <img src="pic/prod1.png" width="161" height="184" alt="product">
                                    </div>
                                </a>
                                <dl>
                                    <dt>Артикул:</dt>
                                    <dd>125678-М</dd>
                                </dl>
                                <dl>
                                    <dt>Бренд:</dt>
                                    <dd>DAIWA</dd>
                                </dl>
                                <dl>
                                    <dt>Модель:</dt>
                                    <dd>Crossfire CF X</dd>
                                </dl>
                                <dl>
                                    <dt>Тип:</dt>
                                    <dd>Безинерционная</dd>
                                </dl>
                                <span class="old_price">4200 Р</span>
                                <span class="price">3500 р</span>
                                <div>
                                    <div class="stars_wrap">
                                        <div style="width: 80%;" class="stars"></div>
                                    </div>
                                    <a class="reviews" href="#">Отзывы: 28</a>
                                </div>
                            </li>';




$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

echo $json_data;
exit;
?>