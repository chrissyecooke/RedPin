<?php

    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }

include 'db.php';

if(isset($_SESSION['id'])){
     $userid = $_SESSION['id'] ;
    $userName = $_SESSION['username'];
 }

$uBio = $_POST['bio'];
$uPic = $_POST['pic'];

if($uBio != ""){
    $q = "UPDATE users SET bio='$uBio' where id=$userid";
    $db->query($q);
 
    };

if($uPic != ""){
    $q = "UPDATE users SET fbPic='$uPic' where id=$userid";
    $db->query($q);
};


?>