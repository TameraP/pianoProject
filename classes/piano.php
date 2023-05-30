<?php


class Piano {

    protected $key; 
    protected $color;
    protected $note;
    protected $imagePath;
    protected $soundPath;
    //public $key;

    public function __construct($key) {
        $this->key = $key;
    }

    public function GetColor($key) {

    }

    public function BlackKeys($key) {
        return $this->key;
    }

    public function WhiteKeys($key) {
        return $this->key;
    }

    public function GetImagePath($key) {

    }

    public function GetSoundPath($key) {

    }
    
    public function Play() {

    }

    public function Note($key) {
        return $this->key;
    }
}

?>