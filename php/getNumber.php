<?php

include('./readDocx.php');

$ranNumber = $_POST['cyfra'];

$file = glob("../images/liczby/" . $ranNumber . ".docx", GLOB_NOSORT);

$doc = new Docx_reader();
$doc->setFile($file[0]);

if(!$doc->get_errors()) {
    $html = $doc->to_html();
    $plain_text = $doc->to_plain_text();
}

$output['text'] = $html;

echo json_encode($output);
?>