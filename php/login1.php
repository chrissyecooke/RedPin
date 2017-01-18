<?php

    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }

include 'db.php';

    $lUser = $_POST['lUser'];
    $lPass = $_POST['lPass']; 

//---------------------CHECK FOR USERNAME & PASSWORD VALUES--------------------------
if ($lUser == "" || $lPass == ""){
    header("location: ../login.php");
    exit;
};


//-----------------------GRAB USER INFO FROM FB--------------------------
    $result = $db->prepare("SELECT * FROM users WHERE username='$lUser' AND password='$lPass'");



    $result->execute();

    $rows = $result->fetch(PDO::FETCH_ASSOC);

//-------------------------IF NO MATCHES--------------------------
if($rows != true){
	header("location: ../login.php");
	exit;
};


//--------------------------IF THERE ARE MATCHES--------------------------
    if(session_status() != false && count($rows) > 0) {
        $_SESSION['loggedin'] = true;
        $_SESSION['id'] = $rows['id'];
        $_SESSION['username'] = $rows['username'];
        $_SESSION['name'] = $rows['name'];
        $_SESSION['bio'] = $rows['bio'];
        $_SESSION['pic'] = $rows['fbPic'];
       header("location: ../profile.php");
        }
    else{
	   header("location: ../login.php");
        };



?>