<?php
$type = $_GET['type'];

    $json_data = '{
        "answer": "ok",
        "id": 1
    }';




$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

echo $json_data;
exit;
?>