<?php

include('./readDocx.php');

class ReadDoxFile {

    public $filePath;
    public $position;

    public function __construct($filePath, $position) {
        $this->filePath = $filePath;
        $this->position = $position;
    }

    public function getFileContent() {
        $file = glob($this->filePath);
        $output = [];    
        $doc = new Docx_reader();
        for ($i = 0; $i < count($file); $i++) {
            $doc->setFile($file[$i]);
            if(!$doc->get_errors()) {
                $html = $doc->to_html();
                $plain_text = $doc->to_plain_text();            
            }        
            $getPostName = explode('/', $file[$i]);
            $getPostName = explode('.', $getPostName[$this->position]);
            $getPostName = $getPostName[0];

            $output['text'][] = array(
                'name' => $getPostName,
                'content' => $html,
            );       
        }

        return $output;
    }

    public function getOtherWay() {
        $file = glob($this->filePath);
        $output = [];
        for ($i = 0; $i < count($file); $i++) {            
            $getPostName = explode('/', $file[$i]);
            $getPostName = explode('.', $getPostName[$this->position]);
            $getPostName = $getPostName[0];
            $output['text'][] = array(
                'name' => $getPostName,
                'content' => $file[$i]
            );
        }
        return $output;
    }
};

if (isset($_POST['id']) && $_POST['id'] == 'post') {
    $extractor = new ReadDoxFile("../images/postyNumerologia/*.docx", 3);

    $output = $extractor->getFileContent();
    
    echo json_encode($output);
} elseif (isset($_POST['id']) && $_POST['id'] == 'posty2') {
    $extractor = new ReadDoxFile("../images/posty/zdrowie/*.docx", 4);
    $output['zdrowieZak'] = $extractor->getOtherWayt();
    $extractor = new ReadDoxFile("../images/posty/rozwoj/*.docx", 4);
    $output['rozwojZak'] = $extractor->getOtherWay();
    $extractor = new ReadDoxFile("../images/posty/kamienie/*.docx", 4);
    $output['kamienieZak'] = $extractor->getOtherWay();
    $extractor = new ReadDoxFile("../images/posty/anioly/*.docx", 4);
    $output['aniolyZak'] = $extractor->getOtherWay();
    
    echo json_encode($output);
} elseif (isset($_POST['id']) && $_POST['id'] == 'omnie') {
    $extractor = new ReadDoxFile("../images/Kim jestem.docx", 2);
    $output = $extractor->getFileContent();
    
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

/*
$extractor = new ReadDoxFile("../images/posty/kamienie/*.docx", 4);
    $output['kamienieZak'] = $extractor->getOtherWay();
    echo $output;
*/
?>