<?php

    $category = $_GET["category"];

    $json_data = '<h2 class="material__topic">Шиниллы</h2>

            <!-- material__block -->
            <a href="#" title="pic13" data-price="750" class="material__block active">
                <img src="pic/pic13.jpg" height="122" width="112" alt="">
            </a>
            <!-- /material__block -->

            <!-- material__block -->
            <a href="#" title="pic14" data-price="1000" class="material__block active">
                <img src="pic/pic14.jpg" height="122" width="112" alt="">
            </a>
            <!-- /material__block -->

            <!-- material__block -->
            <a href="#" title="pic13" data-price="750" class="material__block active">
                <img src="pic/pic13.jpg" height="122" width="112" alt="">
            </a>
            <!-- /material__block -->

            <!-- material__block -->
            <a href="#" title="pic14" data-price="1000" class="material__block active">
                <img src="pic/pic14.jpg" height="122" width="112" alt="">
            </a>
            <!-- /material__block -->

            <!-- material__block -->
            <a href="#" title="pic13" data-price="750" class="material__block active">
                <img src="pic/pic13.jpg" height="122" width="112" alt="">
            </a>
            <!-- /material__block -->

            <!-- material__block -->
            <a href="#" title="pic14" data-price="1000" class="material__block active">
                <img src="pic/pic14.jpg" height="122" width="112" alt="">
            </a>
            <!-- /material__block -->

            <!-- material__block -->
            <a href="#" title="pic13" data-price="750" class="material__block active">
                <img src="pic/pic13.jpg" height="122" width="112" alt="">
            </a>
            <!-- /material__block -->

            <!-- material__block -->
            <a href="#" title="pic14" data-price="1000" class="material__block active">
                <img src="pic/pic14.jpg" height="122" width="112" alt="">
            </a>
            <!-- /material__block -->

            <!-- material__block -->
            <a href="#" title="pic13" data-price="750" class="material__block active">
                <img src="pic/pic13.jpg" height="122" width="112" alt="">
            </a>
            <!-- /material__block -->

            <!-- material__block -->
            <a href="#" title="pic14" data-price="1000" class="material__block active">
                <img src="pic/pic14.jpg" height="122" width="112" alt="">
            </a>
            <!-- /material__block -->

            <!-- material__block -->
            <a href="#" title="pic13" data-price="750" class="material__block active">
                <img src="pic/pic13.jpg" height="122" width="112" alt="">
            </a>
            <!-- /material__block -->

            <!-- material__block -->
            <a href="#" title="pic14" data-price="1000" class="material__block active">
                <img src="pic/pic14.jpg" height="122" width="112" alt="">
            </a>
            <!-- /material__block -->';



    $json_data = str_replace("\r\n",'',$json_data);
    $json_data = str_replace("\n",'',$json_data);

    echo $json_data;
    exit;
?>

