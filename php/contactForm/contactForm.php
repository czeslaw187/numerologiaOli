<?php 

include('../../vendor/autoload.php');

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$msg = $_POST['msg'];

if (!$name) {
    $output['message'] = 'wpisz imię';
    echo json_encode($output);
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $output['message'] = 'wpisz poprawny adres email';
    echo json_encode($output);
} elseif (!$msg) {
    $output['message'] = 'wpisz wiadomość';
    echo json_encode($output);
} else {
    $transport = (new Swift_SmtpTransport("smtp.gmail.com", 587, 'tls'))
    ->setAuthMode('login')
    ->setUsername("numerologia.aleksandra@gmail.com")
    ->setPassword("sjnjazzxubkqtszr");
    $mailer = new Swift_Mailer($transport);

    $message = (new Swift_Message())
    ->setSubject($subject)
    ->setFrom($email)
    ->setTo(['numerologia.aleksandra@gmail.com'])
    ->setBody($msg);

    $result = $mailer->send($message);

        if ($result) {
            $output['message'] = 'ok';
        } else {
            $output['message'] = 'error';
        }
        
    echo json_encode($output);
}


?>