<?php
require_once 'piano.php';

//grab the json data and decode it as a json object
$json = file_get_contents('php://input');
$data = json_decode($json);

$pianoNote = new Piano($data);
$getKey = $pianoNote->GetKey($pianoNote);
$keyPath = $pianoNote->GetColor($getKey);
$getNote = $pianoNote->GetNote($getKey);

$keyPath['image'].= $getNote.".png";
$keyPath['sound'].= $getNote.".mp3";

//encode the code and return it as json
$returnData = json_encode($keyPath);
// file_put_contents('../js/components/ReturnedKey.js', $returnData);
echo $returnData;
exit();








?>