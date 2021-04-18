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
        $file = glob($this->filePath, GLOB_NOSORT);
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
};

if (isset($_POST['id']) && $_POST['id'] == 'post') {
    $extractor = new ReadDoxFile("../images/postyNumerologia/*.docx", 3);
    $output = $extractor->getFileContent();
    
    echo json_encode($output);
} elseif (isset($_POST['id']) && $_POST['id'] == 'posty2') {
    $extractor = new ReadDoxFile("../images/posty/zdrowie/*.docx", 4);
    $output['zdrowie'] = $extractor->getFileContent();
    $extractor = new ReadDoxFile("../images/posty/rozwoj/*.docx", 4);
    $output['rozwoj'] = $extractor->getFileContent();
    $extractor = new ReadDoxFile("../images/posty/kamienie/*.docx", 4);
    $output['kamienie'] = $extractor->getFileContent();
    $extractor = new ReadDoxFile("../images/posty/anioly/*.docx", 4);
    $output['anioly'] = $extractor->getFileContent();
    
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