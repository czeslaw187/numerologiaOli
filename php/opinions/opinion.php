<?php

$conn = new mysqli("localhost", "root", "", "numerologia", 3306);
$output;
if ($conn->connect_error) {
    $output['error'] = $conn->connect_error;
    $output['message'] = 'Cannot connect with database';
    exit;
}

$query = "SELECT * FROM opinions";

$result = $conn->query($query);

$data = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        array_push($data, $row);
    }
    $output = $data;
} else {
    $output['message'] = 'No results for your query';
}

$result->free();
$conn->close();

echo json_encode($output);

?>