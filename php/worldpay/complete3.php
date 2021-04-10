<?php
require_once('../../vendor/worldpay/worldpay-lib-php/init.php');


$worldpay = new Worldpay('T_S_6bc49ba3-cf96-4b61-8f6e-af59d41a2889');

$billing_address = array(
  "address1"=>'',
  "address2"=> '',
  "address3"=> '',
  "postalCode"=> '',
  "city"=> '',
  "state"=> '',
  "countryCode"=> '',
);

$response = $worldpay->createOrder(array(
  'token' => $_POST['token'],
  'amount' => 18000,
  'currencyCode' => 'PLN',
  'name' => $_POST['name'],
  'billingAddress' => $billing_address,
  'orderDescription' => 'Order description',
  'customerOrderCode' => 'Order code'
));
if ($response['paymentStatus'] === 'SUCCESS') {
  $worldpayOrderCode = $response['orderCode'];
  echo 'success <br>';
  echo $worldpayOrderCode;
} else {
  echo 'failure';
}
  
?>

