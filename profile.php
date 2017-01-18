<?php

    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }  

    if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] != 'true') {
        header("Location: login.php");
    };

?>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=320, initial-scale=1, maximum-scale=1, user-scalable=0">

        <link  href="css/redpinstyle.css" rel="stylesheet" type="text/css"/>
		<link  href="css/redpin_menu.css" rel="stylesheet" type="text/css"/>
        <link href="css/redpin-notification-style.css" rel="stylesheet" type="text/css"/>
	</head>

    <body>
        
       
        <div class="halfGradient">
            <audio></audio>
            <svg id="welcomeNotification" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 554 353"><defs><style>.cls-1{isolation:isolate;}.cls-2{opacity:0.64;mix-blend-mode:multiply;}.cls-3{fill:url(#linear-gradient);}.cls-4{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:4px;}.cls-5{font-size:36px;fill:#013072;}.cls-14,.cls-5{font-family:Comfortaa;}.cls-6{letter-spacing:-1px;}.cls-7{font-size:26px;}.cls-10,.cls-11,.cls-12,.cls-14,.cls-8,.cls-9{fill:#fff;}.cls-9{opacity:0.74;}.cls-10{opacity:0.85;}.cls-11{opacity:0.76;}.cls-12{opacity:0.78;}.cls-13{fill:url(#linear-gradient-2);}.cls-14{font-size:27px;}</style><linearGradient id="linear-gradient" x1="277.42" y1="330.93" x2="277.42" y2="12.94" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity="0.7"/><stop offset="0.5" stop-color="#fff" stop-opacity="0.9"/><stop offset="1" stop-color="#fff" stop-opacity="0.7"/></linearGradient><linearGradient id="linear-gradient-2" x1="179.88" y1="147.76" x2="374.97" y2="342.85" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ed194e"/><stop offset="1" stop-color="#013072"/></linearGradient></defs><title>RedPinNotifications</title><g class="cls-1"><g id="Layer_1" data-name="Layer 1"><image class="cls-2" width="554" height="353" xlink:href="data:image/png;base64,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"/><rect class="cls-3" x="17.85" y="12.94" width="519.15" height="317.98" rx="24.36" ry="24.36"/><rect class="cls-4" x="17.85" y="12.94" width="519.15" height="317.98" rx="24.36" ry="24.36"/><text class="cls-5" transform="translate(150.47 100.14)"><tspan class="cls-6">W</tspan><tspan x="32.41" y="0">elcome back</tspan><tspan class="cls-7"><tspan x="31.73" y="34">we missed you!</tspan></tspan></text><polygon class="cls-8" points="63.44 328.7 197.83 328.7 140.87 231.69 63.44 328.7"/><polygon class="cls-9" points="36.74 328.7 92.81 180.51 122.58 254.6 63.44 328.7 36.74 328.7"/><polygon class="cls-10" points="189 180.51 149 330.93 267 330.93 189 180.51"/><path class="cls-8" d="M618,243.31l-38,85.62h38S634,323,634,299Z" transform="translate(-97 2)"/><polygon class="cls-8" points="420 328.7 442.41 280.19 499 328.7 420 328.7"/><polygon class="cls-11" points="357 328.7 420 201 470.71 304.44 449 330.93 357 328.7"/><polygon class="cls-12" points="368 328.96 335 255.72 290 332 368 328.96"/><polygon class="cls-8" points="238 328.7 273 293 314 330.93 238 328.7"/><rect id="welcomeBut" class="cls-13" x="96.64" y="210.76" width="361.57" height="69.09" rx="34.54" ry="34.54"/><text class="cls-14" transform="translate(168.65 254.02)">I missed you <tspan x="168.75" y="0">t</tspan><tspan x="178.52" y="0">oo!</tspan></text></g></g></svg>

            <div class="topBar" id="menuicon">
              
                <img class="topbarIcon" src="images/icons/friends.png"/>
                <img class="editBut" id="editBut" src="images/icons/Edit.png"/>
                <button id="closePinWindow"> X</button>
                <h2 class="topbarText">Profile</h2>
               </div>
			
               <div id="profileeditDiv"></div>
			
               <div id="profileBody">
          <div id="coverprofile"><img src="images/profile-image.png" style="width:360px;">
              <div id="profilename"></div>
              <p id="profilebio"></p>
              <table id="profileIcons">
                <thead>
                    <tr>
                        <td style="left:0; position: fixed; margin: 2% 0% 0% 10%; font-size: 12px;"><img src="images/icons/friends02.png" style="width: 30px;"/><br/>0 Friends</td>
                        <td style="right:0; position: fixed;margin: 2% 11% 0% 0%; font-size: 12px;"><img src="images/icons/trips.png" style="width: 25px;"/><br/>1 Trips</td>
                    </tr>
                  </thead>
              </table>
                <div id="profilePicDiv">
                    </div>
          </div>
				   
          <div id="profiledesc">
            
           
            <!--
            <button class="profilebuts">Trips</button>
            <a href="map.php"><button class="profilebuts">Pins</button></a>
-->
                 
          
			  
<!----------------------GRABBIG PIN INFO FROM DATABASE------------------------>
              <div  id="profilepins">

              <table id="profilePinsTable"> 
				  <thead style="width:100%;">
                      <tr class="profilePinsHead">
                        <td class="pinTableTitles"><img id="pinTitlesImg" src="images/icons/pins.png" />LOCATION</td>
                        <td class="pinTableTitles" style="text-align: center;">TAG</td>
                        <td class="pinTableTitles" style="text-align: center;">DATE</td>
                          </tr>
                      </thead>
                 
                      </table>
                    
                  </div>
            </div>
          </div>

        </div>
		
		
<!-------------------------------MENU---------------------------------->
						<div class="loadmenu" >
							<table style="width:100%">
                                <tr>
                                    <th><a href="profile.php"><img src="images/icons/friends-red.png"   class="menuIcon" id="menuProfile"/></a></th>

                                <th><a href="trips.php"><img src="images/icons/trips.png" class="menuIcon" id="menuTrips"/></a></th>

                                <th><a href="map.php"><img src="images/pinBut.png" class="menuPin" id="mapPinButton"/></a></th>

                                <th><a href="map.php"><img src="images/icons/map.png" class="menuIcon" id="menuTrips"/></a></th>

                                <th><a href="php/logout.php"><img src="images/icons/logout.png" class="menuIcon" id="menuTrips"/></a></th>
								</tr>
						</table>
						</div>
    </body>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  
   <script src="js/redpin_profile.js"></script>
            <script src="js/redpin-notification-js.js"></script>
    <script src="js/RedPin_menuJS.js"></script>

</html>