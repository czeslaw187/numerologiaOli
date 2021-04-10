<?php

include('./readDocx.php');

$ranNumber = rand(1,44);

$file = json_encode(glob("../images/kartyImg/" . $ranNumber . "*.jpg", GLOB_NOSORT));

$fileTxt = glob("../images/kartyTxt/" . $ranNumber . "*.docx", GLOB_NOSORT);


$doc = new Docx_reader();
$doc->setFile($fileTxt[0]);

if(!$doc->get_errors()) {
    $html = $doc->to_html();
    $plain_text = $doc->to_plain_text();
}

$output['text'] = $html;
$output['path'] = stripslashes($file);

echo json_encode($output);
?>