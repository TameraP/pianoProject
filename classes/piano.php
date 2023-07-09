<?php


class Piano {

    protected $key = []; 
    protected $note;
    protected $resultPath = [];

    public function __construct($key = []) {
        $this->key = $key;
    }

    public function GetKey($key) {
        return $this->key;
    }

    public function GetColor($key) {
        if($key->type == "black") {
            $resultPath['image'] = "/2021-2023Projects/pianoProject/assets/images/black/";
            $resultPath['sound'] = "/2021-2023Projects/pianoProject/assets/sounds/black/";
        }
        else {
            $resultPath['image'] = "/2021-2023Projects/pianoProject/assets/images/white/";
            $resultPath['sound'] = "/2021-2023Projects/pianoProject/assets/sounds/white/";
        }

        return $resultPath;
    }

    public function GetNote($key) {
        return $key->note;
    }
}

?>