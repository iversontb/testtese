<?php
$name = $_GET['name'];
$mail = $_GET['mail'];
$message = $_GET['message'];
header('Content-type: text/html; charset=utf-8');

if (mail("office@webares.com.ua", "New client", $name."\r\n".$message,
    "From: ".$mail."\r\n")) {
    echo "Сообщение доставлено,</br> наш консультант свяжется с вами как можно быстрее";
} else {
    header("HTTP/1.1 401 При отправке письма произошла ошибка, попробуйте позже, или свяжитесь с нами другим удобным вам способом");
    echo "";
}

exit;
?>