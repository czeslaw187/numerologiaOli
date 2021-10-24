<?php 

include('../../vendor/autoload.php');

class sendMail {

    public $name;
    public $sender;
    public $receiver;
    public $subject;
    public $msg;

    function __construct($name, $sender, $subject, $msg='', $receiver) {
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
            exit;
        } elseif (!filter_var($this->sender, FILTER_VALIDATE_EMAIL)) {
            $output['message'] = 'wpisz poprawny adres email';
            echo json_encode($output);
            exit;
        } elseif (!$this->msg) {
            $output['message'] = 'wpisz wiadomość';
            echo json_encode($output);
            exit;
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
            
            return $result;
        }
    }    
};

$newMsg = new sendMail($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['msg'], $_POST['email']);
// send msg to customer
if (isset($_POST['orderID'])) {
    if ($_POST['orderID'] == 'transaction2') {
        $newMsg->msg = "
            <p>
                Twoje zamówienie zostało przyjęte do realizacji, abym mogła zacząć nad nim pracować proszę o dokonanie wpłaty. 
                Jeśli zamówienie dotyczy pytania do tarota proszę o przesłanie go, oraz informację, na jakie aspekty w rozkładzie zwrócić szczególna uwagę. Są pytania? Proszę pytaj   
                Dokładne informacje dotyczące zamówienia są na stronie głównej w zakładce usługi, są tam dokładne opisy tego jak wygląda dana usługa.
            </p><br>
            <p><strong>Dane do przelewu:</strong></p>
            <p>Aleksandra Wojciechowska</p>
            <p>84 1140 2004 0000 3602 7185 8420</p>
            <p>mBank</p>
            <p>Cena zamówienia podana jest na stronie internetowej </p><br>
            <p><strong>Czas realizacji zlecenia:</strong></p>
            <p>7 dni roboczych.</p>
            <p>Liczonych od momentu otrzymania przeze mnie przelewu i potrzebnych informacji. </p><br>
            <p style=\"color: red\">Zamówienie w postaci filmiku z rozkładem zostanie wysłane na maila</p><br>
            <p style=\"color: navy\">Numerologia i Tarot</p>
            <p style=\"color: navy\">Mgr Psychopedagogiki </p>
            <p style=\"color: navy\">Aleksandra Wojciechowska</p>
        ";
        $result = $newMsg->sendIt();
        if ($result) {
            $output['message'] = 'ok';
        } else {
            $output['message'] = 'error';
            echo json_encode($output);
            exit;
        }
    } else if ($_POST['orderID'] === 'transaction1') {
        $newMsg->msg = "
        <p>Twoje zamówienie zostało przyjęte do realizacji, abym mogła zacząć nad nim pracować potrzebuje kilka koniecznych informacji:</p><br>
        <ul class=\"list-group list-group-flush\">
            <li class=\"list-group-item\">1. Imię i nazwisko</li>
            <li class=\"list-group-item\">2. Drugie imię</li>
            <li class=\"list-group-item\">3. Nazwisko panieńskie jeśli posiadasz.</li>
            <li class=\"list-group-item\">4. Czy byłaś/byłeś adoptowany? Jeśli tak czy znasz swoje dane z przed adopcji?</li>
            <li class=\"list-group-item\">5. Data urodzenia</li>
            <li class=\"list-group-item\">6. Imię z bierzmowania</li>
            <li class=\"list-group-item\">7. Aktywny pseudonim (podajemy tylko jeśli takie posiadamy) </li>
            <li class=\"list-group-item\">8. Jeśli zamówienie dotyczy portretu partnerskiego proszę o podanie też danych partnera/partnerki</li>
        </ul>
        <br>
        <p>Po przesłaniu mi maila zwrotnego z tymi danymi oraz po otrzymaniu przelewu zacznę pracę nad zamówieniem.</p>
        <br>
        <p><strong>Dane do przelewu:</strong></p>
        <p>Aleksandra Wojciechowska</p>
        <p>84 1140 2004 0000 3602 7185 8420</p>
        <p>mBank</p>
        <p>Cena zamówienia podana jest na stronie internetowej </p><br>
        <p><strong>Czas realizacji zlecenia:</strong></p>
        <p>7 dni roboczych.</p>
        <p>Liczonych od momentu otrzymania przeze mnie przelewu i potrzebnych informacji. Gotowy portret zostanie odesłany na maila, zawierać on będzie sporo wiedzy o Tobie</p><br>
        <p style=\"color: navy\">Numerologia i Tarot</p>
        <p style=\"color: navy\">Mgr Psychopedagogiki </p>
        <p style=\"color: navy\">Aleksandra Wojciechowska</p>
        ";
        $result = $newMsg->sendIt();
        if (!$result) {
            $output['message'] = 'error';
            echo json_encode($output);
            exit;
        }
    } else if($_POST['orderID'] == 'transaction3') {
        $newMsg->msg = "
            <p>
                Twoje zamówienie zostało przyjęte do realizacji, abym mogła zacząć nad nim pracować potrzebuje kilku koniecznych informacji, 
                proszę w tym celu przesłać mi swój numer telefonu abyśmy mogli ustalić szczegóły. 
            </p><br>
            <p>Po przesłaniu mi maila zwrotnego z tymi danymi i rozmowie telefonicznej oraz po otrzymaniu przelewu zacznę pracę nad zamówieniem.</p><br>
            <p><strong>Dane do przelewu:</strong></p>
            <p>Aleksandra Wojciechowska</p>
            <p>84 1140 2004 0000 3602 7185 8420</p>
            <p>mBank</p>
            <p>Cena zamówienia podana jest na stronie internetowej </p><br>
            <p><strong>Czas realizacji zlecenia:</strong></p>
            <p>7 dni roboczych.</p>
            <p>Liczonych od momentu otrzymania przeze mnie przelewu i potrzebnych informacji. </p><br>
            <p style=\"color: navy\">Numerologia i Tarot</p>
            <p style=\"color: navy\">Mgr Psychopedagogiki </p>
            <p style=\"color: navy\">Aleksandra Wojciechowska</p>
        ";
        $result = $newMsg->sendIt();
        if (!$result) {
            $output['message'] = 'error';
            echo json_encode($output);
            exit;
        }
    } else if($_POST['orderID'] == 'transaction4') {
        $newMsg->msg = "
        <p>Twoje zamówienie zostało przyjęte do realizacji, abym mogła zacząć nad nim pracować potrzebuje kilka koniecznych informacji:</p><br>
        <ul class=\"list-group list-group-flush\">
            <li class=\"list-group-item\">1. Imię i nazwisko</li>
            <li class=\"list-group-item\">2. Drugie imię</li>
            <li class=\"list-group-item\">3. Nazwisko panieńskie jeśli posiadasz.</li>
            <li class=\"list-group-item\">4. Czy byłaś/byłeś adoptowany? Jeśli tak czy znasz swoje dane z przed adopcji?</li>
            <li class=\"list-group-item\">5. Data urodzenia</li>
            <li class=\"list-group-item\">6. Imię z bierzmowania</li>
            <li class=\"list-group-item\">7. Aktywny pseudonim (podajemy tylko jeśli takie posiadamy) </li>
            <li class=\"list-group-item\">8. Proszę podać swój numer telefonu.</li>
        </ul><br>
        <p>Proszę o informacje jaki termin rozmowy byłby najkorzystniejszy</p><br>
        <p>
            Po przesłaniu mi maila zwrotnego z tymi danymi wyznaczymy datę rozmowy telefonicznej. 
            Dane są mi potrzebne abym miała chwile na obliczenia, które pomogą w rozmowie. Po otrzymaniu przelewu zacznę pracę nad zamówieniem.
        </p><br>
        <p><strong>Dane do przelewu:</strong></p>
            <p>Aleksandra Wojciechowska</p>
            <p>84 1140 2004 0000 3602 7185 8420</p>
            <p>mBank</p>
            <p>Cena zamówienia podana jest na stronie internetowej </p><br>
            <p><strong>Czas realizacji zlecenia:</strong></p>
            <p>7 dni roboczych.</p>
            <p>Liczonych od momentu otrzymania przeze mnie przelewu i potrzebnych informacji. </p><br>
            <p style=\"color: red\">Zamówienie w postaci filmiku z rozkładem zostanie wysłane na maila</p><br>
            <p style=\"color: navy\">Numerologia i Tarot</p>
            <p style=\"color: navy\">Mgr Psychopedagogiki </p>
            <p style=\"color: navy\">Aleksandra Wojciechowska</p>
        ";
        $result = $newMsg->sendIt();
        if (!$result) {
            $output['message'] = 'error';
            echo json_encode($output);
            exit;
        }
    }
}
//send msg to me
$newMsg->receiver = 'numerologia.aleksandra@gmail.com';
$newMsg->msg = $_POST['msg'] . '<h3>' . $newMsg->sender . '</h3>' . '<h3>' . $newMsg->name . '</h3>'; 
$result = $newMsg->sendIt();
if ($result) {
    $output['message'] = 'ok';
} else {
    $output['message'] = 'error';
}
echo json_encode($output);

?>