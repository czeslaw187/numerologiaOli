<?php

include_once('../../config.php');

$name = $_POST['name'];
$opinion = $_POST['opinion'];

if (!$name) {
    $output['message'] = 'wpisz imię';
    echo json_encode($output);
    exit();
} else if (!$message) {
    $output['message'] = 'wpisz wiadomość';
    echo json_encode($output);
    exit();
} else {
    $conn = new mysqli($db_host, $db_username, $db_password, $db_name, $db_port);

    if ($conn->connect_error) {
        $output['message'] = 'Connection error';
        $output['error'] = $conn->connect_error;
        exit;
    }

    $sql = "INSERT INTO opinions (name, opinion) VALUES ('$name', '$opinion')";
    $result = $conn->query($sql);

    if ($result) {
        $output['message'] = 'ok';
        $output['lastId'] = $conn->insert_id;
    } else {
        $output['message'] = 'Query error';
        $output['error'] = mysqli_error($conn);
    }

    $conn->close();
}

echo json_encode($output);
?>