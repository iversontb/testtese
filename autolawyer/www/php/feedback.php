<?php
$name = $_GET['name'];
$message = $_GET['phone'];
header('Content-type: text/html; charset=utf-8');
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= " From: igorkavalerov@mail.ru\r\n";
if (mail("igorkavalerov@mail.ru", "New client", $name."\r\n".$message, $headers)) {
    echo "Сообщение доставлено,</br> наш консультант свяжется с вами как можно быстрее";
} else {
    header("HTTP/1.1 401 При отправке письма произошла ошибка, попробуйте позже, или свяжитесь с нами другим удобным вам способом");
    echo "";
}

exit;
?>