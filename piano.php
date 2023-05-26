<?php

class Piano {

    protected $key; 
    //public $key;

    public function __construct($key) {
        $this->key = $key;
    }

    public function BlackKeys($key) {
        return $this->key;
    }

    public function WhiteKeys($note) {

    }

    public function MiddleKeys($note) {

    }

    public function Play() {

    }
}

$test1 = new Piano('A');
var_dump($test1);

?>