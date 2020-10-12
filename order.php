<?php
 $method = $_SERVER['REQUEST_METHOD'];
 

// trim() - убираем все лишние пробелы и переносы строк
// strip_tags() — удаляет HTML и PHP тэги из строки
// htmlspecialchars() - Преобразует специальные символы в HTML сущности (например из'<'  преобразуется в '&lt;' )

if ($method === 'POST') {
    $name = isset($_POST['name']) ? $_POST['name'] : null;
    $phone = isset($_POST['phone']) ? $_POST['phone'] : null;
    $flowId = isset($_POST['fl']) ? $_POST['fl'] : null;
    if ($name !== null && $phone !== null && $flowId !== null) {
        $name = trim(strip_tags($name));
        $phone = trim(strip_tags($phone));
        $flowId = trim(strip_tags($flowId));

        $parameters = array(
            'flow_id' => $flowId,
            'phone' => $phone,
            'name' => $name
        );

        $url = 'https://api.autotovarka.ru/orders/';
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => http_build_query($parameters),
            CURLOPT_HTTPHEADER => array(
                "Content-Type: application/x-www-form-urlencoded"
            ),
        ));

        curl_exec($curl);
        curl_close($curl);
    }
}

header('Location:  thanks.html');
exit;
?>