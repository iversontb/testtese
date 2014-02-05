<?php
//GET
$page = $_GET['page'];// индекс страницы


$json_data = '{
    "items": [
        {
            "href": "#",
            "title": "Набор автомобильного газового оборудования",
            "src": "pic/pic4.jpg",
            "price": "<dt>Цена: </dt><dd>7 489.-</dd>",
            "buyhref": "#",
            "buytext": "в корзину",
            "features": [
                {
                    "title": "Характеристика",
                    "text": "Значение"
                },
                {
                    "title": "Характеристика",
                    "text": "Значение"
                },
                {
                    "title": "Характеристика",
                    "text": "Значение"
                },
                {
                    "title": "Характеристика",
                    "text": "Значение"
                },
                {
                    "title": "Характеристика",
                    "text": "Значение"
                }
            ]
        },
        {
            "href": "#",
            "title": "Набор автомобильного газового оборудования",
            "src": "pic/pic4.jpg",
            "price": "<dt>Цена: </dt><dd>7 489.-</dd>",
            "buyhref": "#",
            "features": [
                {
                    "title": "Характеристика",
                    "text": "Значение"
                },
                {
                    "title": "Характеристика",
                    "text": "Значение"
                },
                {
                    "title": "Характеристика",
                    "text": "Значение"
                }
            ]
        },
        {
            "href": "#",
            "title": "Набор автомобильного газового оборудования",
            "src": "pic/pic4.jpg",
            "price": "<dt>Цена: </dt><dd>7 489.-</dd>",
            "buyhref": "#",
            "features": [
                {
                    "title": "Характеристика",
                    "text": "Значение"
                }
            ]
        },
        {
            "href": "#",
            "title": "Набор автомобильного газового оборудования",
            "src": "pic/pic4.jpg",
            "price": "<dt>Цена: </dt><dd>7 489.-</dd>",
            "buyhref": "#",
            "features": [
                {
                    "title": "Характеристика",
                    "text": "Значение"
                },
                {
                    "title": "Характеристика",
                    "text": "Значение"
                }
            ]
        },
        {
            "href": "#",
            "title": "Набор автомобильного газового оборудования",
            "src": "pic/pic4.jpg",
            "price": "<dt>Цена: </dt><dd>7 489.-</dd>",
            "buyhref": "#",
            "features": [
                {
                    "title": "Характеристика",
                    "text": "Значение"
                },
                {
                    "title": "Характеристика",
                    "text": "Значение"
                },
                {
                    "title": "Характеристика",
                    "text": "Значение"
                }
            ]
        },
        {
            "href": "#",
            "title": "Набор автомобильного газового оборудования",
            "src": "pic/pic4.jpg",
            "price": "<dt>Цена: </dt><dd>7 489.-</dd>",
            "buyhref": "#",
            "features": [
                {
                    "title": "Характеристика",
                    "text": "Значение"
                }
            ]
        }
    ]
}';




$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

echo $json_data;
exit;
?>

