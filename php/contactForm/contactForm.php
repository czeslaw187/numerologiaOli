<?php 

include('../../vendor/autoload.php');

class sendMail {

    public $name;
    public $sender;
    public $receiver;
    public $subject;
    public $msg;

    function __construct($name, $sender, $subject, $msg, $receiver='') {
        $this->name = $name;
        $this->sender = $sender;
        $this->receiver = $receiver;
        $this->subject = $subject;
        $this->msg = $msg;
    }

    function sendIt() {
        if (!$this->name) {
            $output['message'] = 'wpisz imię';
            echo json_encode($output);
        } elseif (!filter_var($this->sender, FILTER_VALIDATE_EMAIL)) {
            $output['message'] = 'wpisz poprawny adres email';
            echo json_encode($output);
        } elseif (!$this->msg) {
            $output['message'] = 'wpisz wiadomość';
            echo json_encode($output);
        } else {
            $transport = (new Swift_SmtpTransport("smtp.gmail.com", 587, 'tls'))
            ->setAuthMode('login')
            ->setUsername('numerologia.aleksandra@gmail.com')
            ->setPassword("deldqoiofqyensjh");
            $mailer = new Swift_Mailer($transport);
    
            $message = (new Swift_Message())
            ->setContentType("text/html")
            ->setSubject($this->subject)
            ->setFrom($this->sender)
            ->setTo(['numerologia.aleksandra@gmail.com', $this->receiver])
            ->setBody(
                '<h3>' . $this->msg . '</h3><br>'.
                '<h3>' . $this->sender . '</h3>'.
                '<h3>' . $this->name . '</h3>'
            );
    
            $result = $mailer->send($message);
    
                if ($result) {
                    $output['message'] = 'ok';
                } else {
                    $output['message'] = 'error';
                }
                
            echo json_encode($output);
        }
    }
    function sendItTwo() {
        if (!$this->name) {
            $output['message'] = 'wpisz imię';
            echo json_encode($output);
        } elseif (!filter_var($this->sender, FILTER_VALIDATE_EMAIL)) {
            $output['message'] = 'wpisz poprawny adres email';
            echo json_encode($output);
        } elseif (!$this->msg) {
            $output['message'] = 'wpisz wiadomość';
            echo json_encode($output);
        } else {
            $transport = (new Swift_SmtpTransport("smtp.gmail.com", 587, 'tls'))
            ->setAuthMode('login')
            ->setUsername('numerologia.aleksandra@gmail.com')
            ->setPassword("deldqoiofqyensjh");
            $mailer = new Swift_Mailer($transport);
    
            $message = (new Swift_Message())
            ->setContentType("text/html")
            ->setSubject($this->subject)
            ->setFrom($this->sender)
            ->setTo([$this->receiver])
            ->setBody($this->msg);
    
            $result = $mailer->send($message);
    
                if ($result) {
                    $output['message'] = 'ok';
                } else {
                    $output['message'] = 'error';
                }
                
            echo json_encode($output);
        }
    }
};

if (isset($_POST['orderID']) && $_POST['orderID'] == 'transaction1') {
    $newMsg = new sendMail($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['msg'], $_POST['email']);
    $newMsg->sendIt();
}  else {
    $newMsg = new sendMail($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['msg'], 'numerologia.aleksandra@gmail.com');
    $newMsg->sendItTwo();
}



?>