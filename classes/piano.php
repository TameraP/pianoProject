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
            $resultPath['image'] = "/assets/images/black/";
            $resultPath['sound'] = "/assets/sounds/black/";
        }
        else {
            $resultPath['image'] = "/assets/images/white/";
            $resultPath['sound'] = "/assets/sounds/white/";
        }

        return $resultPath;
    }

    public function GetNote($key) {
        return $key->note;
    }
}

?>