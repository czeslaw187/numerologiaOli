<?php

include('./readDocx.php');

if (isset($_POST['id']) && $_POST['id'] == 'post') {
    $file = glob("../images/posty/*.docx", GLOB_NOSORT);
    $output = [];    
    $doc = new Docx_reader();
    for ($i = 0; $i < count($file); $i++) {
        $doc->setFile($file[$i]);
        if(!$doc->get_errors()) {
            $html = $doc->to_html();
            $plain_text = $doc->to_plain_text();            
        }        
        $getPostName = explode('/', $file[$i]);
        $getPostName = explode('.', $getPostName[3]);
        $getPostName = $getPostName[0];

        $output['text'][] = array(
            'name' => $getPostName,
            'content' => $html,
        );       
    }
    
    echo json_encode($output);
} else {
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
}

?>