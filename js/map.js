var srchInput = document.getElementById("searchTextField");
var commentInput = document.getElementById("comment");
var closeBut = document.getElementById("closePinDiv");


var inputArray = [];


var map = null;

function initialize() {
     map = new google.maps.Map(
         document.getElementById("pinMap"),
     {
     center:{lat: 49.287,lng: -123.145},
             zoom: 3,
			 mapTypeId: 'roadmap'
             });
   

//open addpin div
$('#mapPinButton').on("tap",function(){
	$('#addPin').css("visibility", "visible");
	//making the addpin div visible
	
});

//create searchBox api function in html srchInput
var searchBox = new google.maps.places.SearchBox(srchInput);
	
	//make search based inital area 
	map.addListener('bounds_changed',function(){
		searchBox.setBounds(map.getBounds());
	});
	
	var markers = [];
	//listen for when usesr selects a predicition and retrieve more deatils for place
	searchBox.addListener('places_changed', function(){
		var places = searchBox.getPlaces();
		
		if(places.length == 0){
			return;
		}
		
		//clear out old markers
		markers.forEach(function(marker){
			marker.setMap(null);
		});
		markers = [];
		
		//for each place get the icon, name and location
		var bounds = new google.maps.LatLngBounds();
		places.forEach(function(place){
			if(!place.geometry){
				console.log("returned place contains no geometry");
				return;
			}
			var icon = {
				url:"images/redpin_logo.png",
				size: new google.maps.Size(80,80),
				origin: new google.maps.Point(0,0),
				anchor: new google.maps.Point(17,34),
				scaledSize: new google.maps.Size(50,50)
			};
			

			if(place.geometry.viewport){
				bounds.union(place.geometry.viewport);
			}else{
				bounds.extend(place.geometry.location);
			}
			
			//inputing values for pin then closing addpin div
			var count = 0;
			
			
$('#addPinBut').on("tap",function(){
	var obj = {
		count: count,
		position:place.geometry.location,
		comment: commentInput.value
	};
	inputArray.push(obj);
	console.log(inputArray);
	
	var infoWindow = new google.maps.InfoWindow (
	{
		content: "Great pin",
	}
	);
	//infoWindow.open(map,Marker);
	
	$('#addPin').css("visibility", "hidden");
	

				//create marker for each place
			markers.push(new google.maps.Marker({
				map:map,
				icon:icon,
				title:place.name,
				position:place.geometry.location,
			}));
	
	count++;
	srchInput.value= "";
	commentInput.value = "";
});
			
		});
		map.fitBounds(bounds);
	
	
	})

	
		 


	$('#closePinBut').on("tap",function(){
		$('#addPin').css("visibility", "hidden");
	})



	}; //closing initialize function