<?php

if (session_status() == PHP_SESSION_NONE) {
        session_start();
    } 

include 'db.php';

 if(isset($_SESSION['id'])){
     $userid = $_SESSION['id'] ;
    
 } else {
     $message = "No id in session";
     echo json_encode(array(
        "status"=>0,"message"=>$message));
     exit;
 }


if($_POST['type'] == "view"){
        $u = $_SESSION;
        $q = "SELECT * FROM marker WHERE userid='$userid'";
        $result = $db->query($q);
        if($result){
            $arr = $result->fetchAll();
            //var_dump($arr);
            //echo json_encode($arr);
            $u["markers"] = $arr;
        }
        
    echo json_encode($u);
        
        
        exit;
        
    }
?>