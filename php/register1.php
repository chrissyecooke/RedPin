<?php

    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }

include 'db.php';

//check if facebook login, check for fb id grab the user id etc for the session. Otherwise run this insert 
   

    $uName = $_POST['uName'];
    $uEmail = $_POST['uEmail'];
    $uUser = $_POST['uUser'];
    $uPass = $_POST['uPass'];
    $rePass = $_POST['rePass'];
    $fbId= $_POST['fbId'];
    $fbPic = $_POST['fbPic'];
	//$uBio = $_POST['bio'];

if($fbId != ""){
	
    $q = "SELECT * FROM users WHERE facebookid = '$fbId'";
    $result = $db->query($q);
    $rows = $result->fetch(PDO::FETCH_ASSOC);
    
    if($rows != false){
        $_SESSION['loggedin'] = true;
        $_SESSION['id'] = $rows['id'];
        $_SESSION['username'] = $rows['username'];
        $_SESSION['name'] = $rows['name'];
       	$_SESSION['bio'] = $rows['bio'];
		$_SESSION['pic'] = $rows['fbPic'];
		//echo json_encode($rows);
        
		header("location: ../profile.php");
        exit;
    } else {
        
         //var_dump($_POST);
    if($uPass == $rePass){
        $q = "INSERT INTO users (facebookid,name,email,username,password,repassword,fbPic) VALUES ('$fbId','$uName','$uEmail','$uUser','$uPass','$rePass','$fbPic')";
        $db->query($q);
       // echo ($fbPic);
        
        if ($fbId != ""){
        header("Location: ../profile.php");
        } else {
        header("Location: ../login.php"); 
        }
    }
        else { 
            $message = "Passwords do not match";
            echo "<script type='text/javascript'>alert('$message');</script>";
            };
        exit;  
    };
	
}; 




    //var_dump($_POST);
    if($uPass == $rePass){
        $q = "INSERT INTO users (facebookid,name,email,username,password,repassword) VALUES ('$fbId','$uName','$uEmail','$uUser','$uPass','$rePass')";
        $db->query($q);
        header("Location: ../login.php");
    }
        else { 
            $message = "Passwords do not match";
            echo "<script type='text/javascript'>alert('$message');</script>";
            };
?>