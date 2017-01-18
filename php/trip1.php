<?php

if (session_status() == PHP_SESSION_NONE) {
        session_start();
};

include 'db.php';


$UserID = $_SESSION['id'];

if($_POST['type'] == "view"){
        $u = $_SESSION;
        $q = "SELECT * FROM marker WHERE trip='bali' AND userid='$UserID'";
        $result = $db->query($q);
    
        if($result){
            $arr = $result->fetchAll();
            //var_dump($arr);
            //echo json_encode($arr);
            $u["markers"] = $arr;
        };
        
    echo json_encode($u);
        
        
        exit;
        
    }
?>