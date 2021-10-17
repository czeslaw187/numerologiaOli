<?php 

define('br','<br />');
class Docx_reader {

    private $fileData = false;
    private $errors = array();
    private $styles = array();

    public function __construct() {
        
    }

    private function load($file) {
        if (file_exists($file)) {
            $zip = new ZipArchive();
            $openedZip = $zip->open($file);
            if ($openedZip === true) {
                //attempt to load styles:
                if (($styleIndex = $zip->locateName('word/styles.xml')) !== false) {
                    $stylesXml = $zip->getFromIndex($styleIndex);
                    $xml = simplexml_load_string($stylesXml);
                    $namespaces = $xml->getNamespaces(true);

                    $children = $xml->children($namespaces['w']);

                    foreach ($children->style as $s) {
                        $attr = $s->attributes('w', true);
                        if (isset($attr['styleId'])) {
                            $tags = array();
                            $attrs = array();
                            foreach (get_object_vars($s->rPr) as $tag => $style) {
                                $att = $style->attributes('w', true);
                                switch ($tag) {
                                    case "b":
                                        $tags[] = 'strong';
                                        break;
                                    case "i":
                                        $tags[] = 'em';
                                        break;
                                    case "color":
                                        //echo (String) $att['val'];
                                        $attrs[] = 'color:#' . $att['val'];
                                        break;
                                    case "sz":
                                        $attrs[] = 'font-size:' . $att['val'] . 'px';
                                        break;
                                }
                            }
                            $styles[(String)$attr['styleId']] = array('tags' => $tags, 'attrs' => $attrs);
                        }
                    }
                    $this->styles = $styles;
                }

                if (($index = $zip->locateName('word/document.xml')) !== false) {
                    // If found, read it to the string
                    $data = $zip->getFromIndex($index);
                    // Close archive file
                    $zip->close();
                    return $data;
                }
                $zip->close();
            } else {
                switch($openedZip) {
                    case ZipArchive::ER_EXISTS:
                        $this->errors[] = 'File exists.';
                        break;
                    case ZipArchive::ER_INCONS:
                        $this->errors[] = 'Inconsistent zip file.';
                        break;
                    case ZipArchive::ER_MEMORY:
                        $this->errors[] = 'Malloc failure.';
                        break;
                    case ZipArchive::ER_NOENT:
                        $this->errors[] = 'No such file.';
                        break;
                    case ZipArchive::ER_NOZIP:
                        $this->errors[] = 'File is not a zip archive.';
                        break;
                    case ZipArchive::ER_OPEN:
                        $this->errors[] = 'Could not open file.';
                        break;
                    case ZipArchive::ER_READ:
                        $this->errors[] = 'Read error.';
                        break;
                    case ZipArchive::ER_SEEK:
                        $this->errors[] = 'Seek error.';
                        break;
                }
            }
        } else {
            $this->errors[] = 'File does not exist.';
        }
    }

    public function setFile($path) {
        $this->fileData = $this->load($path);
    }

    public function to_plain_text() {
        if ($this->fileData) {
            return strip_tags($this->fileData);
        } else {
            return false;
        }
    }

    public function to_html() {
        if ($this->fileData) {
            $xml = simplexml_load_string($this->fileData);
            $namespaces = $xml->getNamespaces(true);

            $children = $xml->children($namespaces['w']);

            $html = '<!doctype html><html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8" /><title></title><style>span.block { display: block; }</style></head><body>';

            foreach ($children->body->p as $p) {
                $style = '';
                
                $startTags = array();
                $startAttrs = array();
                
                if($p->pPr->pStyle) {                    
                    $objectAttrs = $p->pPr->pStyle->attributes('w',true);
                    $objectStyle = (String) $objectAttrs['val'];
                    if(isset($this->styles[$objectStyle])) {
                        $startTags = $this->styles[$objectStyle]['tags'];
                        $startAttrs = $this->styles[$objectStyle]['attrs'];
                    }
                }
                
                if ($p->pPr->spacing) {
                    $att = $p->pPr->spacing->attributes('w', true);
                    if (isset($att['before'])) {
                        $style.='padding-top:' . ($att['before'] / 10) . 'px;';
                    }
                    if (isset($att['after'])) {
                        $style.='padding-bottom:' . ($att['after'] / 10) . 'px;';
                    }
                }

                $html.='<span class="block" style="' . $style . '">';
                $li = false;
                if ($p->pPr->numPr) {
                    $li = true;
                    $html.='<li>';
                }
                
                foreach ($p->r as $part) {
                    //echo $part->t;
                    $tags = $startTags;
                    $attrs = $startAttrs;                                        

                    foreach (get_object_vars($part->pPr) as $k => $v) {
                        if ($k = 'numPr') {
                            $tags[] = 'li';
                        }
                    }

                    foreach (get_object_vars($part->rPr) as $tag => $style) {
                        //print_r($style->attributes());
                        $att = $style->attributes('w', true);
                        switch ($tag) {
                            case "b":
                                $tags[] = 'strong';
                                break;
                            case "i":
                                $tags[] = 'em';
                                break;
                            case "color":
                                //echo (String) $att['val'];
                                $attrs[] = 'color:#' . $att['val'];
                                break;
                            case "sz":
                                $attrs[] = 'font-size:' . $att['val'] . 'px';
                                break;
                        }
                    }
                    $openTags = '';
                    $closeTags = '';
                    foreach ($tags as $tag) {
                        $openTags.='<' . $tag . '>';
                        $closeTags.='</' . $tag . '>';
                    }
                    $html.='<span style="' . implode(';', $attrs) . '">' . $openTags . $part->t . $closeTags . '</span>';
                }
                if ($li) {
                    $html.='</li>';
                }
                $html.="</span>";
            }

            //Trying to weed out non-utf8 stuff from the file:
            $regex = <<<'END'
/
  (
    (?: [\x00-\x7F]                 # single-byte sequences   0xxxxxxx
    |   [\xC0-\xDF][\x80-\xBF]      # double-byte sequences   110xxxxx 10xxxxxx
    |   [\xE0-\xEF][\x80-\xBF]{2}   # triple-byte sequences   1110xxxx 10xxxxxx * 2
    |   [\xF0-\xF7][\x80-\xBF]{3}   # quadruple-byte sequence 11110xxx 10xxxxxx * 3 
    ){1,100}                        # ...one or more times
  )
| .                                 # anything else
/x
END;
            preg_replace($regex, '$1', $html);

            return $html . '</body></html>';
            exit();
        }
    }

    public function get_errors() {
        return $this->errors;
    }

    private function getStyles() {
        
    }

}

/** ----------------------------------------------------------------------------------------------------------------------- */

class WordReader {
    #extract.php
    public function pre( $data=false, $header=false, $tag='h1' ){
        $title = $header ? sprintf('<'.$tag.'>%s</'.$tag.'>',$header) : '';
        printf('%s<pre>%s</pre>',$title,print_r($data,1)); 
    }
    
    public function getparent( $n, $tag ){
        while( $n && $n->nodeType==XML_ELEMENT_NODE && $n->tagName!=$tag ){
            $n=$n->parentNode;
        }
        return $n;
    }


    public function process_word_docx( $filename ){
        $data=[ 'start' => microtime( true ),'names'=>[] ];
        $paths=[];

        $zip=new ZipArchive;


        if( true === $zip->open( $filename ) ) {
            for( $i=0; $i < $zip->numFiles; $i++ ) {
                $obj=(object)$zip->statIndex( $i );

                if( $obj->name=='word/document.xml' ){

                    $xml=$zip->getFromIndex( $i );

                    $data['position']=$obj->index;
                    $data['xml-size']=$obj->size;
                    $data['created']=$obj->mtime;
                    $data['compression-method']=$obj->comp_method;



                    libxml_use_internal_errors( true );
                    $dom=new DOMDocument('1.0','utf-8');
                    $dom->validateOnParse=false;
                    $dom->recover=true;
                    $dom->strictErrorChecking=false;
                    $dom->loadXML( strtolower( $xml ) );
                    libxml_clear_errors();



                    $xp=new DOMXPath( $dom );
                    /* none of these namespace uris exist */
                    $xp->registerNamespace('ve','http://schemas.openxmlformats.org/markup-compatibility/2006');
                    $xp->registerNamespace('r','http://schemas.openxmlformats.org/officeDocument/2006/relationships');
                    $xp->registerNamespace('m','http://schemas.openxmlformats.org/officeDocument/2006/math');
                    $xp->registerNamespace('wp','http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing');
                    $xp->registerNamespace('w','http://schemas.openxmlformats.org/wordprocessingml/2006/main');
                    $xp->registerNamespace('pic','http://schemas.openxmlformats.org/drawingml/2006/picture');
                    $xp->registerNamespace('a','http://schemas.openxmlformats.org/drawingml/2006/main');
                    /* this/these exist */
                    $xp->registerNamespace('wne','http://schemas.microsoft.com/office/word/2006/wordml');


                    /* find tables */
                    $col=$xp->query( '//w:tbl//w:tr' );
                    if( $col->length > 0 ){
                        foreach( $col as $row => $tr ){

                            /* Count the cells on each row */
                            $expr='count( w:tc )';
                            $cellcount=$xp->evaluate( $expr, $tr );

                            if( $cellcount > 0 ){
                                /* find all the table cells for this row */
                                $expr='w:tc';
                                $cells=$xp->query( $expr, $tr );

                                /* Are there any images in this row */
                                $expr='count(//pic:cnvpr)';
                                $qty=$xp->evaluate( $expr, $tr );


                                /* There are images */
                                if( $qty > 0 ){

                                    $expr='w:tc//w:drawing//a:graphic//pic:pic//pic:nvpicpr/pic:cnvpr';
                                    $wpcol=$xp->query( $expr, $tr );

                                    if( $wpcol->length > 0 ){
                                        foreach( $wpcol as $index=> $node ){
                                            /* navigate up the DOM tree until we find the table cell tag */
                                            $oCell = $this->getparent( $node, 'w:tc' );

                                            /* Find the name of the image */
                                            $name = $node->getAttribute('name');
                                            $data['names'][]=$name;

                                            /* get the text in the current row */
                                            $text = ucfirst( $tr->textContent ) ?: ' - EMPTY -';

                                            /* find the cell index for the row */
                                            foreach( $cells as $index => $cell ){
                                                if( $cell === $oCell )break;
                                            }

                                            /* prepare payload */
                                            if( $wpcol->length==1 ){
                                                $data['statistics'][ $row ]=array(
                                                    'text'      =>  $text,
                                                    'name'      =>  $name,
                                                    'column'    =>  $index
                                                );
                                            } else {
                                                /* multiple images on this row - multiple images can be within a single cell */
                                                $data['statistics'][ $row ][ $index ][]=array(
                                                    'text'      =>  $text,
                                                    'name'      =>  $name,
                                                    'column'    =>  $index
                                                );
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }else{
                    if( preg_match( '([^\s]+(\.(?i)(jpg|jpeg|png|gif|bmp))$)', $obj->name ) ) {
                        $paths[ $obj->name ]=base64_encode( $zip->getFromIndex( $i ) );
                    }
                }
            }
        }
        /* finalise statistics */
        $data['count']=$qty;
        $data['end']=microtime( true );
        $data['time']=$data['end'] - $data['start'];
        $data['total-size']=filesize( $filename );
        $data['paths']=$paths;

        /* return payload */
        return $data;
    }

}

?>