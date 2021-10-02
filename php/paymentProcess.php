<?php
    ini_set('display_errors', 'On');
    error_reporting(E_ALL);
    
    $url = "https://stage-api.wepay.com/payments";

    $ch = curl_init();
    $unique = $_POST['timestamp'];
    $price = $_POST['price'];
    $paymentTok = $_POST['paymentToken'];
    $postal = $_POST['postalCode'];
    $email = $_POST['email'];
    $name = $_POST['name'];

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HEADER, array(
        'App-Id: 701267',
        'App-Token: stage_MTY3NjBfYzZlNWI1ZDAtODVmNC00MDU3LWE3MzYtZTNkMjZkMDVmNTFj',
        'Api-Version: 3.0',
        'Content-Type: text/json',
        'Unique-Key: ' . $unique
    ));
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array(
        'amount'=>$price,
        'currency'=>'GBP',
        'account_id'=>'6661b0de-d7da-40c5-ba31-f90a14b0cdae',
        'payment_method'=>array(
            'token'=>array(
                'id'=>$paymentTok
            ),
            'credit_card'=>array(
                'card_holder'=>array(
                    'address'=>array(
                        'country'=>'UK',
                        'postal_code'=>$postal
                    ),
                    'email'=>$email,
                    'holder_name'=>$name
                )
            )
        )
    )));

    $result = curl_exec($ch);
    curl_close($ch);
    echo $result;

?>