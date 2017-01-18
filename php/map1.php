<?php

    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }

include 'db.php';


//----------if the session id is set, use this users id and name for the database input following
if(isset($_SESSION['id'])){
     $userid = $_SESSION['id'] ;
    $userName = $_SESSION['username'];
 }



//------------------------GRABBING ALL MARKER INFO FOR CURRENT USER FROM DB------
//------------IF WE ARE VIEWING
if($_POST['type'] == "view"){
        $q = "SELECT * FROM marker WHERE userid='$userid'";
        $result = $db->query($q);
	
        if($result){
            $arr = $result->fetchAll(PDO::FETCH_ASSOC);
            //var_dump($arr);
            echo json_encode($arr);
        }else {
			$message = "Could not grab from Database";
			echo "<script type='text/javascript'>alert('$message');</script>";
		};
    
    
    
    
} else {
    



//-----------OR ELSE INPUTTING
//----------------------GRABBING MARKER INFO FROM ADD PIN FUNCTION-----------------
    $mName = $_POST['markername'];
    $mUserID = $userid;
    $mUserName = $userName;
    $mLat = $_POST['lat'];
    $mLng = $_POST['lng'];
    $mTrip = $_POST['trip'];
    $mTag = $_POST['tag'];
    $mComment = $_POST['comment'];
	$mDate = $_POST['date'];
    $mPriority = $_POST['priority'];

//--------------------------------PUTTING MARKER INFO INTO DATABASE-----------------
    if(isset($_SESSION['id'])){
        $q = "INSERT INTO marker (markername, userid, username, lat, lng, trip, tag, comment, date, priority) VALUES ('$mName','$mUserID','$mUserName','$mLat','$mLng','$mTrip', '$mTag','$mComment','$mDate','$mPriority')";
        $db->query($q);
        header("Location:../map.php");
    }
        else{ 
			$message = "Could not send to Database";
			echo "<script type='text/javascript'>alert('$message');</script>";
            };

};



    
   
        
    

    
?>