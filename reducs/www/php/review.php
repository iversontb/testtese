<?php
$loadedCount = $_GET['loadedCount'];

$json_data = '{
    "html": "<section>
                    <div class=\"star\"><div style=\"width: 80%\"></div></div>
                    <p>Пью 6 капсул в день уже 1.5 мес. результат - 8 см в талии, ушли противные бока и животик начинает
                        сходить!из квадрата жира , который я не могли ничем сбить, ни диеты ни фитнес, начинает
                        появляться талия, этому я очень рада, но вот вопрос: почему я не теряю в весе. как была 59 так и
                        осталось, хотя даже знакомые замечают что я постройнела?Может потому что это мой вес?
                        спасибо.</p>
                    <div class=\"review__name\">Ольга Сергеевна Иванова</div>
                    <time datetime=\"2013-01-12\">12 января 2013 г.</time>
                </section>
                <section>
                    <div class=\"star\"><div style=\"width: 80%\"></div></div>
                    <p>Пью 6 капсул в день уже 1.5 мес. результат - 8 см в талии, ушли противные бока и животик начинает
                        сходить!из квадрата жира , который я не могли ничем сбить, ни диеты ни фитнес, начинает
                        появляться талия, этому я очень рада, но вот вопрос: почему я не теряю в весе. как была 59 так и
                        осталось, хотя даже знакомые замечают что я постройнела?Может потому что это мой вес?
                        спасибо.</p>
                    <div class=\"review__name\">Ольга Сергеевна Иванова</div>
                    <time datetime=\"2013-01-12\">12 января 2013 г.</time>
                </section>",
    "has_elems": 0
}';


$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

echo $json_data;
exit;
?>