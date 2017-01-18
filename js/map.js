//map.html page :
var pinMarker = "js/high.png";

var srchInput = document.getElementById("searchTextField");
var closeBut = document.getElementById("closePinDiv");

var mapPinBut = document.getElementById("mapPinButton");
var addPin = document.getElementById("addPin");
var addPinBut = document.getElementById("addPinBut");
var closePinBut = document.getElementById("closePinBut");
var closePinWindow = document.getElementById("closePinWindow");
var addTag = document.getElementById("addTag");
var newTag = document.getElementById("newTag");
var menuLogout = document.getElementById("menuLogout");

//adding comment variables
var addPinContainer = document.getElementById("addpincontainer");
var placename = document.getElementById("placename");
var addToMapBut = document.getElementById("addtoMap");
var commentDiv = document.getElementById("commentDiv");
var lowLi = document.getElementById("lowPriority");
var mediumLi = document.getElementById("mediumPriority");
var highLi = document.getElementById("highPriority");
var tripDiv = document.getElementById("tripDiv");
var tagDiv = document.getElementById("tagDiv");
var commentLabel = document.getElementById("commentlabel");
var tripLabel = document.getElementById("triplabel");
var tagLabel = document.getElementById("taglabel");
var pinComment = document.getElementById("comment");
var tripList = document.getElementById("tripList");
var tagList = document.getElementById("tagList");
var trips = ["Bali", "France", "England"];
var tags = ["Hotel", "Beach", "Cafe"];


//tried to make ajax call outside of function to see if we are able to grab the array created in map1.php
//tried inside initialize function which creates map
//dont think we are getting the array created in map1.php which should be json_encoded into resp

//-----------------------------------alert on logout
  /*menuLogout.onclick = function(){
    alert("Are you sure want to logout");
    console.log("Hello");
  };*/


   $(document).ready(function(){
       //alert ("pop");

	   var allMarkerArray = [];

       $.ajax(
            {
                url:"php/map1.php",
                type:"post",
                data:{
                    type:"view"
                },
                dataType:"json",
                success:function(resp){
                  //  alert ("working");
                   console.log(resp);

                   for(var i=0;i<resp.length;i++){
					   allMarkerArray[i] = resp[i];
					   console.log(allMarkerArray);
                        var obj = {
                            markername: resp[i].markername,
                            userID: resp[i].userid,
                            userName: resp[i].username,
                            lat: resp[i].lat,
                            lng: resp[i].lng,
                            trip: resp[i].trip,
                            tag: resp[i].tag,
                            comment: resp[i].comment,
							date: resp[i].date,
                            priority: resp[i].priority
                        };

					    console.log(map, resp[i].lat, resp[i].lng);
                       console.log(obj.priority);


//-----------------------PRINT OUT MARKERS FOR USERID-----------------

                       var icon = {
                           url:"",
                           size: new google.maps.Size(100,100),
                           origin: new google.maps.Point(0,0),
                           anchor: new google.maps.Point(0,0),
                           scaledSize: new google.maps.Size(30,40)
                       };

                       switch(obj.priority) {
                           case "low":
                               icon.url = "images/icons/low-priority-marker.png"
                               break;
                           case "medium":
                               icon.url = "images/icons/medium-priority-marker.png"
                               break;
                           case "high":
                               icon.url = "images/icons/high-priority-marker.png"
                               break
                       };


                       var pinMarker = new google.maps.Marker({
                           map:map,
                           icon:icon,
                           position:{lat:parseFloat(resp[i].lat), lng:parseFloat(resp[i].lng)},
                            //icon:resp[i].priority + ".png"
						  });

    //-----------------------------------assign info to infoWindow
		var contentString = "<h3><b>" +resp[i].markername + "</b></h3><p>"+ resp[i].comment+"</p>"+"<p>Tag : "+resp[i].tag+"</p><p>Trip :"+resp[i].trip+"</p><p> Pinned by :"+resp[i].username+"</p>";

			var infoWindow = new google.maps.InfoWindow({
					content: contentString
				});

                       pinMarker.myinfo = infoWindow;

			pinMarker.addListener('click', function() {
				map.setZoom(16);
				map.setCenter(this.getPosition());
				this.myinfo.open(map, this);
        });


                        allMarkerArray.push(obj);

                    if(i == resp.length-1){
						if(profilePin != null){
							map.setCenter(profilePin);
							map.setZoom(12);
						} else {
                        map.setCenter(pinMarker.getPosition());
                        map.setZoom(5);
						}
                    }

                    }
                },
                error:function(error){

                }
            }
            );
                               });



var inputArray = [];

var markerArray = [];

var map = null;

function initialize() {
     map = new google.maps.Map(
         document.getElementById("pinMap"),
     {
     center:{lat: 49.287,lng: -123.145},
             zoom: 4,
			 mapTypeId: 'roadmap',
		 	streetViewControl : false,
		 	zoomControl : false,
		 styles: [{"featureType":"poi","elementType":"all","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"hue":"#000000"},{"saturation":0},{"lightness":-100},{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"transit","elementType":"labels","stylers":[{"hue":"#000000"},{"saturation":0},{"lightness":-100},{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"hue":"#000000"},{"saturation":-100},{"lightness":-100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbbbbb"},{"saturation":-100},{"lightness":26},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#dddddd"},{"saturation":-100},{"lightness":-3},{"visibility":"on"}]}]
             });



  //  console.log(allMarkerArray);


//-----------------------------------open search for pin
    mapPinBut.onclick = setTimeout(function(){
        addPin.style.visibility = "visible";
        //making the addpin div visible

            }, 500);

//-----------------------------------close pin search
    closePinBut.onclick = function(){
		addPin.style.visibility = "hidden";
	       };


//-----------------------------------create searchBox api function in html srchInput
var searchBox = new google.maps.places.SearchBox(srchInput);


//-----------------------------------make search based inital area
	map.addListener('bounds_changed',function(){
		searchBox.setBounds(map.getBounds());
	});




//-----------------------------------listen for when user selects a predicition and retrieve more details for place
	searchBox.addListener('places_changed', function(){

        //feedback on add button when location is searched
        addPinBut.style.transition = "all 2s";
        addPinBut.style.backgroundColor = "#fff";
        addPinBut.style.color = "#ed194e";


        var places = searchBox.getPlaces();
		map.setZoom(8);

		if(places.length === 0){
			return;
		}



//-----------------------------------for each place get the icon, name and location
		var bounds = new google.maps.LatLngBounds();
		places.forEach(function(place){
			if(!place.geometry){
				console.log("returned place contains no geometry");
				return;
			}
			var icon = {
				url:pinMarker,
				size: new google.maps.Size(100,100),
				origin: new google.maps.Point(0,0),
				anchor: new google.maps.Point(0,0),
				scaledSize: new google.maps.Size(50,50)
			};

			var location = place.geometry.location;
			var lat = location.lat();
			var lng = location.lng();
			var markerDate = new Date();

			//put deets in the object
			var obj = {
				user: "",
				trip:"",
				placeName: place.name,
				lat: lat,
				lng: lng,
				comment: "",
				date: markerDate.toDateString(),
				tag: "",
                priority:""
	};

			//create marker for each place
			var marker = new google.maps.Marker({
				map:map,
				icon:icon,
				title:place.name,
				position:place.geometry.location,
			});




			if(place.geometry.viewport){
				bounds.union(place.geometry.viewport);
			}else{
				bounds.extend(place.geometry.location);
			}
			//grab lat long of found place



			//push this object into array
	inputArray.push(obj);
	console.log(inputArray);
	//console.log(markers);
//onclick displays the next item, choose a tripDiv
  pinComment.onclick = function() {
      tripDiv.style.display = "block";
      tripDiv.classList.add("slide");
  };
						//----------------------------------------ADD PIN BUTTON--------------------------------------------------------------
addPinBut.onclick = function(){
        mapPinBut.style.display = "none";

    //---------------------------ADD EVENT LISTENER TO PUSH TRIP PRIORITY "LOW" TO OBJ ->DB ------------------------
		lowLi.addEventListener("click", function(){
			inputArray[inputArray.length-1].priority = "low";
			console.log(inputArray);
      lowPriority.classList.add("clickpins");
      highPriority.classList.remove("clickpins");
      mediumPriority.classList.remove("clickpins");
      commentDiv.style.display = "block";
      commentDiv.classList.add("slide");
		});

    //---------------------------ADD EVENT LISTENER TO PUSH TRIP PRIORITY "MEDIUM" TO OBJ ->DB ------------------------
		mediumLi.addEventListener("click", function(){
			inputArray[inputArray.length-1].priority = "medium";
			console.log(inputArray);
      mediumPriority.classList.add("clickpins");
      lowPriority.classList.remove("clickpins");
      highPriority.classList.remove("clickpins");
      commentDiv.style.display = "block";
      commentDiv.classList.add("slide");
		});


    //---------------------------ADD EVENT LISTENER TO PUSH TRIP PRIORITY "HIGH" TO OBJ ->DB ------------------------
		highLi.addEventListener("click", function(){
			inputArray[inputArray.length-1].priority = "high";
			console.log(inputArray);
      highPriority.classList.add("clickpins");
      mediumPriority.classList.remove("clickpins");
      lowPriority.classList.remove("clickpins");
      commentDiv.style.display = "block";
      commentDiv.classList.add("slide");
		});



  //------------------------------------DISPLAY TRIP ARRAY-----------------------------
	for(var i =0; i<trips.length;i++){
        var total = 0;
		var tripLi = document.createElement("button");
		tripLi.innerHTML = trips[i];
		tripLi.style.width = "auto";
		tripLi.id = "trip"+i;
    tripLi.className = "eTrip";

		tripList.appendChild(tripLi);


  //---------------------------ADD EVENT LISTENER TO PUSH TRIP NAME TO OBJ ->DB ------------------------
		tripLi.addEventListener("click", function(){
			inputArray[inputArray.length-1].trip = this.innerHTML;
			console.log(inputArray);
            tagDiv.style.display = "block";
            tagDiv.classList.add("slide2");
            

            total++;
            console.log(total);
            if(total<2){
                this.style.transition = "all 1s";
                this.style.backgroundColor = "#fff";
                this.style.color= "#ed194e";

            }else{
                this.style.backgroundColor = "transparent";
                this.style.color= "#fff";
                total=0;
            };


		});
	}

  //----------------------------DISPLAY TAG ARRAY-----------------------------
	for(var i=0; i<tags.length;i++){
        var tagTotal = 0;
		var tagLi = document.createElement("button");

		tagLi.innerHTML = tags[i];
		tagLi.style.width = "auto";
		tagLi.id = "tag"+i;
    tagLi.className = "eTag";
		tagList.appendChild(tagLi);

 //---------------------------ADD EVENT LISTENER TO PUSH TAG NAME TO OBJ ->DB -----------------------------
		tagLi.addEventListener("click",function(){
			inputArray[inputArray.length-1].tag = this.innerHTML;
			console.log(inputArray);
      addtoMap.style.display = "block";
            
             tagTotal++;
            console.log(tagTotal);
            if(tagTotal<2){
                this.style.transition = "all 1s";
                this.style.backgroundColor = "#fff";
                this.style.color= "#ed194e";

            }else{
                this.style.backgroundColor = "transparent";
                this.style.color= "#fff";
                tagTotal=0;
            };

		});
	}
    



		//------------------------------ADD NEW TAG-----------------------------
	tagCounter = 3;
addTag.onclick = function(){
    var addTagTotal = 0;
  var tagButt = document.createElement("button");
  tagButt.innerHTML = newTag.value;
  tagButt.className = "eTag";
  tagButt.id = "tag"+tagCounter;
  tagButt.style.width = "auto";
  tagList.appendChild(tagButt);
  tags.push(newTag.value);
  newTag.value = "";
  console.log(tags);

	tagCounter++;

	//---------------------------ADD EVENT LISTENER TO PUSH NEW TAG NAME TO OBJ ->DB -----------------------------
	tagButt.addEventListener("click",function(){
			inputArray[inputArray.length-1].tag = this.innerHTML;
		console.log(inputArray);
    addtoMap.style.display = "block";
        
        
        addTagTotal++;
            console.log(addTagTotal);
            if(addTagTotal<2){
                this.style.transition = "all 1s";
                this.style.backgroundColor = "#fff";
                this.style.color= "#ed194e";

            }else{
                this.style.backgroundColor = "transparent";
                this.style.color= "#fff";
                addTagTotal=0;
            };
		});

};

	//---------------------------show pin info adding div
	addPinContainer.style.display = "inline";


     //---------------------------show place name from Google Search into top
	placename.innerHTML = place.name;


	srchInput.value= "";
    addPinBut.style.backgroundColor = "transparent";
    addPinBut.style.color = "#fff";
	addPin.style.visibility = "hidden";
	map.setZoom(10);

	//close map.html addpinBUt




    addToMapBut.onclick = function() {
mapPinBut.style.display = "block";
//-----------------------------------add comment input into array
		inputArray[inputArray.length-1].comment = pinComment.value;
		console.log(inputArray);



//-----------------------------------create marker for each place
			var prelimPinMarker = new google.maps.Marker({
				map:map,
				icon:icon,
				position:{lat:inputArray[0].lat, lng:inputArray[0].lng}

			});

//-----------------------------------push new marker into markerarray - not necessary, can get rid after database working
	//	markerArray.push(pinMarker);



//-----------------------------------Clearing comment, trip and tag values
		pinComment.value = "";
		tripList.innerHTML = "";
		tagList.innerHTML = "";

//-------------------GRABBING CURRENT MARKER INFO-------------
        $.ajax(
        {
            url: "php/map1.php",
            type: "post",
            data: {
                markername: inputArray[inputArray.length-1].placeName,
                userid: "",
                username: "",
                lat: inputArray[inputArray.length-1].lat,
                lng: inputArray[inputArray.length-1].lng,
                trip: inputArray[inputArray.length-1].trip,
                tag: inputArray[inputArray.length-1].tag,
                comment: inputArray[inputArray.length-1].comment,
				date: inputArray[inputArray.length-1].date,
                priority: inputArray[inputArray.length-1].priority,


                  },

        });

//-----------------------------------removing the addpincontainer
        addPinContainer.style.display = "none";

	};


	};

});
		map.fitBounds(bounds);
		});

//-----------------------------------closing pin window (top right cross)
    closePinWindow.onclick = function(){
      addPinContainer.style.display = "none";
    };



//-----------------------------------closing initialize function
	};
//-----------------------------------Add stroke to the different priority pins
