$(document).ready(function(){

var profileName = document.getElementById("profilename");
var editBut = document.getElementById("editBut");
var profileBody = document.getElementById("profileBody");
var profileeditDiv = document.getElementById("profileeditDiv");
var topBar = document.getElementsByClassName("topBar");
var profPinsTable = document.getElementById("profilePinsTable");
var profilebio = document.getElementById("profilebio");
var profilepic = document.getElementById("profilePicDiv");
    
           $.ajax(
            {
                url:"php/profile1.php",
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
                    profileName.innerHTML = resp.name;
                    profilebio.innerHTML = resp.bio;
                    if(resp.pic != ""){
                        profilepic.style.backgroundImage = "url(" + resp.pic + ")";
                        profilepic.style.backgroundSize = "100px";
                        
                        console.log("Prof Pic");
                    } else {
                        console.log("no pic saved to user");
                    };
						console.log(resp.markers.length);
                    for (var i = resp.markers.length-1; i >= 0;i--){
						var tableRow = document.createElement("tr");
                        var tableData1 = document.createElement("td");
                        var tableImg = document.createElement("td");
                        var pinImg = document.createElement("img");
                        
                    
                        tableData1.innerHTML = resp.markers[i].markername;
                        tableData1.className = "propintable";
                        tableData1.style.fontFamily="Comfortaa";
                        tableData1.style.fontWeight = "400";
                        
                       
                        
                        tableRow.appendChild(tableData1);
                        var tableData2 = document.createElement("td");
                        tableData2.innerHTML = resp.markers[i].tag;
                        tableData2.className = "propintable";
                        tableData2.style.textAlign = "center";
                        tableData2.style.width = "25%";
                        tableRow.appendChild(tableData2);
                        var tableData3 = document.createElement("td");
                        tableData3.innerHTML = resp.markers[i].date;
                        tableData3.className = "propintable";
                        tableRow.appendChild(tableData3);
                        profPinsTable.appendChild(tableRow);
                        
                        //-----event listener for each row -> map
						tableRow.mind = i;
                        tableRow.addEventListener("click",function(e){
                          
                            e.preventDefault();
                            console.log(this.innerHTML);
							location.href =  'map.php?lat='+resp.markers[this.mind].lat+'&lng='+resp.markers[this.mind].lng;
                           // console.log(resp.markers[i].lat)
                        });
                    };
                    }
                },
                error:function(error){

                }
            }
          );


  });



  editBut.onclick = function() {
    profileeditDiv.innerHTML = "";
    profileeditDiv.style.display = "block";
    profileBody.style.display = "none";
    editBut.style.display = "none";
    closePinWindow.style.display = "block";
    
    //////BIO EDITING
    var newTextArea = document.createElement("textarea");
    var editBioBut = document.createElement("button");
    editBioBut.innerHTML = "Change Bio";
    editBioBut.id = "editBioBut";
    newTextArea.id = "bioText";
    newTextArea.rows = "4";
    newTextArea.placeholder = "Edit Bio....";
    profileeditDiv.appendChild(newTextArea);
    profileeditDiv.appendChild(editBioBut);
      
      
    newTextArea.onkeyup=function(){
        if(newTextArea.value.length > 0){
            editBioBut.style.transition = "all 1s";
            editBioBut.style.backgroundColor = "#fff";
            editBioBut.style.color= "#ed194e";
        }else{
            editBioBut.style.backgroundColor = "transparent";
            editBioBut.style.color= "#fff";
        };
    };  
      
    //////IMAGE EDITING
    var profileImgDiv = document.createElement("div");
    profileImgDiv.id="profileImgDiv";
    var newImgDiv = document.createElement("div");
    newImgDiv.id="profileImgChange"; //Profile image edit
    var imgInput = document.createElement("input");
    imgInput.id="imgInput";
    imgInput.placeholder="Change profile pic..";
      
    var imgBut = document.createElement("button");
    imgBut.innerHTML="Change Profile Pic";
    imgBut.id="imgBut";
      
    imgInput.onkeyup = function(){
      if(imgInput.value.length > 0){
            imgBut.style.transition = "all 1s";
            imgBut.style.backgroundColor = "#fff";
            imgBut.style.color= "#ed194e";
        }else{
            imgBut.style.backgroundColor = "transparent";
            imgBut.style.color= "#fff";
        };
        
        var imgInputValue = imgInput.value;
        newImgDiv.style.backgroundSize = "75px";
        newImgDiv.style.backgroundImage = "url(" + imgInputValue +")";
    };
      
    imgBut.onclick=function(){
        var profilePicDiv = document.getElementById("profilePicDiv");
        profilePicDiv.style.backgroundImage= "url(" + imgInput.value +")";
        var picUpdate = imgInput.value;
        console.log(imgInput.value);
        
        $.ajax(
        {
            url: "php/userInfo.php",
            type: "post",
            data: {
                pic: picUpdate
            }
        });
    };
    
    profileImgDiv.appendChild(imgInput);
    profileImgDiv.appendChild(newImgDiv);
    profileImgDiv.appendChild(imgBut);
    profileeditDiv.appendChild(profileImgDiv);
    
    
    
      
     //add bio update to database 
    editBioBut.onclick = function(){
        var bioUpdate = newTextArea.value;
        //console.log(bioUpdate);
        $.ajax(
            {
                url: "php/userInfo.php",
                type: "post",
                data: {
                    bio: bioUpdate
                },
                success: function(){
                    profilebio.innerHTML = bioUpdate;
                }
            });
    //profileeditDiv.style.display = "none";
    //profileBody.style.display = "block";
    //closePinWindow.style.display = "none";
    //editBut.style.display = "block";
        }
        
  
  };

  closePinWindow.onclick = function(){
    profileeditDiv.style.display = "none";
    profileBody.style.display = "block";
    closePinWindow.style.display = "none";
    editBut.style.display = "block";
  };
