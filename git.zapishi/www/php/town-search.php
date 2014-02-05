<?php

    $searchText = $_POST["searchText"];

    if (strlen($searchText) == 1){
        $json_data = '<li>Москва</li>
            <li>Питер</li>
            <li>Гурзуф</li>
            <li>Киев</li>';
    }
    else if(strlen($searchText) == 2){
        $json_data = '<li>Москва</li>
            <li>Питер</li>
            <li>Гурзуф</li>';
    }
    else if(strlen($searchText) == 3){
        $json_data = '<li>Москва</li>
            <li>Питер</li>';
    }
    else {
        $json_data = '';
    }


    $json_data = str_replace("\r\n",'',$json_data);
    $json_data = str_replace("\n",'',$json_data);

    echo $json_data;
    exit;
?>

