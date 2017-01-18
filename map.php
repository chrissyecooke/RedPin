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


   <!-- <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/> -->
    <link  href="css/redpinstyle.css" rel="stylesheet" type="text/css"/>
	<link  href="css/redpin_menu.css" rel="stylesheet" type="text/css"/>
	<link href="css/redpin_map.css" rel="stylesheet" type="text/css"/>
  <link href="css/animate.css" rel="stylesheet" type="text/css"/>
	<script>
		var profilePin = null;
		<?php
			if(isset($_GET["lat"])){
				echo "profilePin = {lat:".$_GET["lat"].", lng:".$_GET["lng"]."};";
			}
		?>
	</script>
	</head>



    <body>

		<div id="addpincontainer" class="halfGradient">

            <button id="closePinWindow"> X</button>

			<div> <h5 id="placename"></h5></div>

           <!-- <hr class="addPinBreak"/>-->

            <div id="priorityDiv" class="slide">
                <label id="prioritylabel"> Priority  </label>
                <br />
<svg id="prioritypins" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 190.72 74.65"><defs><style>.cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}.cls-3{fill:url(#linear-gradient-3);}.cls-4{fill:#eb204f;}.cls-5{fill:url(#linear-gradient-4);}.cls-6{fill:#384b9f;}.cls-7{fill:url(#New_Gradient_Swatch);}.cls-8{fill:#f38684;}.cls-9{fill:url(#linear-gradient-5);}.cls-10{fill:url(#New_Gradient_Swatch-2);}.cls-11{fill:#a7878c;}</style><linearGradient id="linear-gradient" x1="169.56" y1="44.3" x2="169.56" y2="23.45" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3b2771"/><stop offset="0.54" stop-color="#363475"/><stop offset="1" stop-color="#5f459b"/></linearGradient><linearGradient id="linear-gradient-2" x1="159.14" y1="44.03" x2="159.14" y2="18.98" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#26296a"/><stop offset="0.51" stop-color="#22376f"/><stop offset="1" stop-color="#384f95"/></linearGradient><linearGradient id="linear-gradient-3" x1="165.59" y1="55.65" x2="165.59" y2="28.29" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#82245e"/><stop offset="0.5" stop-color="#eb204f"/><stop offset="1" stop-color="#ee4d56"/></linearGradient><linearGradient id="linear-gradient-4" x1="99.35" y1="44.43" x2="99.35" y2="23.67" xlink:href="#linear-gradient"/><linearGradient id="New_Gradient_Swatch" x1="95.4" y1="55.73" x2="95.4" y2="28.49" xlink:href="#linear-gradient-3"/><linearGradient id="linear-gradient-5" x1="29.14" y1="44.25" x2="29.14" y2="23.36" xlink:href="#linear-gradient"/><linearGradient id="New_Gradient_Swatch-2" x1="25.16" y1="55.61" x2="25.16" y2="28.21" xlink:href="#linear-gradient-3"/></defs><title>prioritypins</title><g id="highPriority"><polygon class="cls-1" points="180.39 30.78 174.03 23.45 158.74 44.03 172.7 44.3 180.39 30.78"/><polygon class="cls-2" points="150.65 27.95 160.14 18.98 169.44 29.64 158.74 44.03 148.84 28.16 150.65 27.95"/><polyline class="cls-3" points="174.03 41.35 165.59 28.29 157.15 41.35 165.59 55.65 174.03 41.35"/><path class="cls-4" d="M144.46,38.87A17.66,17.66,0,0,1,143.11,36c-.94-2.53-2.64-7.54-2.64-10.8a25.12,25.12,0,1,1,47.19,12L165.6,74.65ZM165.6,55.65l13.65-23.13A15.47,15.47,0,0,0,166.8,9.83c-.4,0-.81,0-1.21,0a15.48,15.48,0,0,0-15.46,15.46,30.69,30.69,0,0,0,2,7.43,8,8,0,0,0,.61,1.28Z"/></g><g id="mediumPriority"><polygon class="cls-5" points="110.13 30.96 103.8 23.67 88.57 44.16 102.48 44.43 110.13 30.96"/><polygon class="cls-6" points="80.52 28.15 89.97 19.22 99.23 29.83 88.57 44.16 78.71 28.36 80.52 28.15"/><polyline class="cls-7" points="103.8 41.49 95.4 28.49 86.99 41.49 95.4 55.73 103.8 41.49"/><path class="cls-8" d="M74.36,39A17.58,17.58,0,0,1,73,36.21c-.94-2.52-2.63-7.51-2.63-10.75a25,25,0,1,1,47,12l-22,37.22Zm21,16.71L109,32.7A15.4,15.4,0,0,0,96.6,10.11c-.4,0-.8,0-1.2,0A15.41,15.41,0,0,0,80,25.46a30.56,30.56,0,0,0,2,7.39,8,8,0,0,0,.61,1.27Z"/></g><g id="lowPriority"><polygon class="cls-9" points="39.98 30.7 33.62 23.36 18.29 43.98 32.28 44.25 39.98 30.7"/><polygon class="cls-6" points="10.19 27.86 19.7 18.88 29.01 29.56 18.29 43.98 8.38 28.08 10.19 27.86"/><polyline class="cls-10" points="33.62 41.29 25.16 28.21 16.71 41.29 25.16 55.61 33.62 41.29"/><path class="cls-11" d="M4,38.81A17.69,17.69,0,0,1,2.64,36C1.7,33.45,0,28.42,0,25.17a25.17,25.17,0,1,1,47.27,12L25.17,74.65ZM25.16,55.61,38.84,32.45A15.49,15.49,0,0,0,26.37,9.72c-.4,0-.81,0-1.21,0A15.5,15.5,0,0,0,9.68,25.16a30.75,30.75,0,0,0,2,7.44,8,8,0,0,0,.61,1.28Z"/></g></svg>
<div>
  <ul>
<li class="textBlock textMeh">Meh</li>
<li class="textBlock textSure">Sure</li>
<li class="textBlock textStoked">Stoked</li>
    </ul>
</div>
</div>
<br />
            <div id="commentDiv">
					 <label id="commentlabel"> Comments  </label>
			<textarea rows="4" id="comment" placeholder="Tell your story!"></textarea>
				 </div>

            <!--<hr class="addPinBreak"/>-->
				<div id="tripDiv">
				<label id="triplabel">Choose a Trip</label>
				<ul id="tripList">

				</ul>
					</div>

				<div id="tagDiv">
				<label id="taglabel"> Select a Tag  </label>
				<ul id="tagList">
            <input id="newTag" placeholder="Add Tags">
            <button id="addTag">+</button>
				</ul>
					 </div>
			<button id="addtoMap" class="butSlide"> Add to Map</button>
				 </div>

        <div class="container">

             <div id="addPin">
							<div id="closePinDiv"><button id="closePinBut"> X</button></div>
					<input type="text" placeholder="Search..." color="black" id="searchTextField"/>


				 <button id="addPinBut"> Add</button>
					</div>


            <div id="pinMap"></div>
            <div class="topBar"><img class="topbarIcon" src="images/icons/trips.png"/>
							<h2 class="topbarText">Maps</h2>
						</div>

						</div>
<!------MENU------>    <ScrollView
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:isScrollContainer="false">


						<div class="loadmenu" >
                           <table style="width:100%">
								<tr>
                                    <th><a href="profile.php"><img src="images/icons/friends.png" class="menuIcon" id="menuProfile"/></a></th>

                                <th><a href="trips.php"><img src="images/icons/trips.png" class="menuIcon" id="menuTrips"/></a></th>

                                <th><a href="map.php"><img src="images/pinBut.png" class="menuPin" id="mapPinButton"/></a></th>

                                <th><a href="map.php"><img src="images/icons/map-red.png" class="menuIcon" id="map"/></a></th>

                                <th><a href="index.php"><img src="images/icons/logout.png" class="menuIcon" id="menuLogout"/></a></th>
								</tr>
						</table>
						</div>
         </ScrollView>


        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDSWFQ27h4h_YJw9ghePQdI8wBSw9_aR-M&libraries=places&callback=initialize" sync defer></script>

		<script type="text/javascript" src="js/map.js"></script>
        <script type="text/javascript" src="js/RedPin_menuJS.js"></script>

    </body>
</html>
<!---http://www.w3schools.com/jquerymobile/jquerymobile_transitions.asp--->
