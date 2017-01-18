<?php

    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }
?>

<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=320, initial-scale=1, maximum-scale=1, user-scalable=0">
    <link  href="css/redpinstyle.css" rel="stylesheet" type="text/css"/>
    <link href="css/redpin_trips.css" rel="stylesheet" type="text/css"/>
    <link href="css/redpin_menu.css" rel="stylesheet" type="text/css"/>
    </head>

    <body>
        
        
        <div class="halfGradient">
             <div class="topBar"><img class="topbarIcon" src="images/icons/trips.png"/>
                 <img id="editBut" class="editBut" src="images/icons/Edit.png"/>
                 <button class="closePinWindow" id="closePinWindow"> X</button>
                                <h2 class="topbarText">Trips</h2>
                </div>
            
            <!--DIV TO SHOW BALI.ONCLICK-->
            <div id="trip1Div">
                <img id="calendarIcon" src="images/icons/calendar.png"/>
                
                <div id="friendDiv">
                    <h2 id="travelerTitle">Buddies: 4</h2>
                    <table id="friendTable">
                        <tr>
                            <td><img class="tripFriendImg" src="https://scontent.xx.fbcdn.net/v/t1.0-9/14064173_10154321807008819_5399803087500075247_n.jpg?oh=f7e016770b0815d2712c208377dc6686&oe=58C81CFE"/></td>
                            <td><img class="tripFriendImg" src="https://scontent.xx.fbcdn.net/v/t1.0-9/13450077_10206520395201238_6598101333814413602_n.jpg?oh=7448a0b74bb0b2f5f352ac9c3bf286df&oe=58C99C31"/></td>
                            <td><img class="tripFriendImg" src="https://scontent.xx.fbcdn.net/v/t1.0-9/11873727_1468086813516794_3870981636185860411_n.jpg?oh=26ae6768a16292d231f88d667cf8a2da&oe=58C8F2E1"/></td>
                            <td><img class="tripFriendImg" src="https://scontent.xx.fbcdn.net/v/t1.0-9/14732312_10211135280722244_6245713850895992311_n.jpg?oh=964853ff70c07174692dc240d9debe50&oe=58B38003"/></td>
                        </tr>
                        <tr>
                            <td>Morgan</td>
                            <td>Christina</td>
                            <td>Ricky</td>
                            <td>Jarell</td>
                        </tr>
                    
                    </table>
                </div>
                <!--<div id="tableHolderHead">
                
                </div>--->
                
                <div class="commentOverlay"></div>
                <div id="tableHolder">
                    <table style="width:100%;">
                    <thead style="width:100%;">
                              <tr class="profilePinsHead">
                                <td class="tripth">WHO</td>
                                <td class="tripth" style="text-align: center;">WHERE</td>
                                <td class="tripth" style="text-align: center;">WHEN</td>
                                  <td class="tripth" style="text-align: center;">COMMENT</td>
                                  </tr>
                              </thead>
                    </table>
                    <table id="tripPinsTable"> 
    
                        </table>
                    </div>
            </div>
            
            
            <div id="tripContainer">
                
                <div class="tripBox" id="trip1"> <!---Will have to be created in JS each time a new trip is made---->

                    <img id="tripImg" src="http://cache-graphicslib.viator.com/graphicslib/thumbs75/3665/SITours/bali-lembongan-island-beach-club-day-trip-in-bali-145367.jpg"/>
                    
                        <h4 id="tripTitle">Bali</h4> <!---Title of Trip--->
                        <p id="tripDate">06/22/2017</p> <!---Date of Trip--->
                        <p id="tripNum">4<img src="images/icons/friends.png" id="tripNumIcon"/></p><!---Number of people in Trip--->
                        <img id="tripArrow" src="images/forwardArrow.png">
                    
                    
                    
                </div>
            
            </div>
            <div id="newTripContainer"> <!---This way we can append new trips as child elements of "tripContainer" and they will append before the "Add a trip" button-->
                <div id="newTrip">
                    <img id="addTripBut" src="images/icons/add.png"/>
                </div>
            </div>


          </div>

<!------MENU------>
						<div class="loadmenu" >
							<table style="width:100%">
								<tr>
                                    <th><a href="profile.php"><img src="images/icons/friends.png" class="menuIcon" id="menuProfile"/></a></th>
                                
                                <th><a href="trips.php"><img src="images/icons/trips-red.png" class="menuIcon" id="menuTrips"/></a></th>
								  
                                <th><a href="map.php"><img src="images/pinBut.png" class="menuPin" id="mapPinButton"/></a></th>
								
                                <th><a href="map.php"><img src="images/icons/map.png" class="menuIcon" id="menuTrips"/></a></th>
                                    
                                <th><a href="index.php"><img src="images/icons/logout.png" class="menuIcon" id="menuLogout" onclick=logoutFunction()/></a></th>
								</tr>
						</table>
						</div>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        
        <script src="js/redpin_trips.js"> </script>
        <script src="js/RedPin_menuJS.js"></script>
        <script>
    
        
        </script>
        
        
    </body>


</html>