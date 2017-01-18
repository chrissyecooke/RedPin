var trip1 = document.getElementById("trip1");
var editBut = document.getElementById("editBut");
var trip1Div = document.getElementById("trip1Div");
var tripContainer = document.getElementById("tripContainer");
var newTripContainer = document.getElementById("newTripContainer");
var tripPinsTable = document.getElementById("tripPinsTable");
var tableHolder = document.getElementById("tableHolder");



//-----------------------OPEN BALI TRIP
trip1.onclick = function(){
    console.log("clickedme");
    editBut.style.display = "none";
    closePinWindow.style.display = "block";
    tripContainer.style.display = "none";
    newTripContainer.style.display = "none";
    
    trip1Div.style.display = "block";
    tableHolder.style.display="block";
    
    var tripTitle = document.createElement("h1");
    tripTitle.className = "tripName";
    
    var tripDate = document.createElement("h2");
    tripDate.innerHTML = "04/16/2017";
    tripDate.className="innerTripDate";
    
    var tripTable = document.createElement("table");
    tripTable.style.fontFamily="Comfortaa";
    tripTable.style.fontWeight = "300";
    tripTable.className = "innerTripTable";
    
    
    var thRow = document.createElement("tr");
    thRow.className="profilePinsHead";
    
    trip1Div.appendChild(tripTitle);
    trip1Div.appendChild(tripDate);
    //trip1Div.appendChild(innerDiv);   
    
    
               $.ajax(
            {
                url:"php/trip1.php",
                type:"post",
                data:{
                    type:"view"
                },
                dataType:"json",
                success:function(resp){
                    console.log(resp);
                    if(resp.status!=null){
                        if(resp.status==0){
                            alert (resp.message);
                        }
                    } else 
                    {
                   	console.log(resp.markers.length);
                        
                        
                    for (var i = resp.markers.length-1; i >= 0;i--){
                        tripTitle.innerHTML = resp.markers[i].trip;
						var tableRow = document.createElement("tr");
                        var tableImgData = document.createElement("td");
                        var tripImg = document.createElement("img");
                        tableRow.mind = i;
                        
                        var tableData1 = document.createElement("td");
                        tableData1.innerHTML = resp.markers[i].username;
                        tableData1.className = "trippintable";
                        tableRow.appendChild(tableData1);
                       
                        var tableData2 = document.createElement("td");
                        tableData2.innerHTML = resp.markers[i].markername;
                        tableData2.className = "trippintable";
                        tableRow.appendChild(tableData2);
                       
                        var tableData3 = document.createElement("td");
                        tableData3.innerHTML = resp.markers[i].date;
                        tableData3.className = "trippintable";
                        tableRow.appendChild(tableData3);
                       
                        var tableData5 = document.createElement("td");
                        tableData5.innerHTML = resp.markers[i].comment;
                        tableData5.className = "trippintable";
                        tableRow.appendChild(tableData5);
                        tripPinsTable.appendChild(tableRow);

                        /**var commentIcon = document.createElement("img");
                        commentIcon.src = "images/icons/comment.png";
                        commentIcon.style.width= "25px";
                        
                        var commentWords = document.createElement("div");
                        commentWords.innerHTML = resp.markers[i].comment;
                        commentWords.style.display="none";
                        
                        tableData5.appendChild(commentIcon);
                        tableData5.className = "trippintable";
                        tableRow.appendChild(tableData5);
                        tripPinsTable.appendChild(tableRow);
                        
                        var commentOverlay = document.getElementById("commentOverlay");
                        var stuff = commentWords.innerHTML;
                        
                        commentIcon.addEventListener("click",function(words){
                            commentOverlay.innerHTML = this.stuff;
                            commentOverlay.style.display="inline";
                            
                        });
                        **/
						
						tableRow.addEventListener("click",function(e){
                          
                            e.preventDefault();
                            console.log(this.innerHTML);
							location.href =  'map.php?lat='+resp.markers[this.mind].lat+'&lng='+resp.markers[this.mind].lng;
                        });
						
                        //MAYBE HAVE USERNAME,PLACE,DATE,TAG,PRIORITY IN TR
                        //THEN HAVE COMMENT IN A DIV OR LONG TD UNDERNEATH
                        //TO CHANGE THE INFO PUSHED OUT JUST CHANGE THE RESP.MARKERS[I].COMMENT OR WHATEVER TO TAG ETC
                       
                    };
                    }
                },
                error:function(error){

                }
            }
          );
};



//-----------------------CLOSE BALI TRIP
closePinWindow.onclick = function() {
    closePinWindow.style.display = "none";
    editBut.style.display = "block";
      tripContainer.style.display = "block";
    newTripContainer.style.display = "block";
    trip1Div.style.display = "none";
}