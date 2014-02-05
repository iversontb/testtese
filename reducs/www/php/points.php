<?php
$city = $_GET['city'];

$json_data = '{
    "points": [
        {
            "lang": 37.648424,
            "lat": 55.748684,
            "title": "Формула здоровья",
            "phone": "8 (495) 979-65-97",
            "mail": "23@apteka.ru",
            "address": "г. Москва, ул. Б.Семеновская, 26, стр. 2",
            "link": "#"
        },
        {
            "lang": 37.64628,
            "lat": 55.743637,
            "title": "Формула здоровья2",
            "phone": "8 (495) 979-65-97",
            "mail": "23@apteka.ru",
            "address": "г. Москва, ул. Б.Семеновская, 26, стр. 2",
            "link": "#"
        },
        {
            "lang": 37.62064,
            "lat": 55.73887,
            "title": "Формула здоровья3",
            "phone": "8 (495) 979-65-97",
            "mail": "23@apteka.ru",
            "address": "г. Москва, ул. Б.Семеновская, 26, стр. 2",
            "link": "#"
        }
    ]
}';


$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

echo $json_data;
exit;
?>