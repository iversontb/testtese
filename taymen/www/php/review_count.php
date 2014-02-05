<?php
$type = $_GET['type'];

    $json_data = '{
        "answer": "ok"
    }';




$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

echo $json_data;
exit;
?>