//window.requestFullscreen();


var fbRegister = document.getElementById("fbRegister");
var profilePage = document.getElementById("profilePage");
var profileName = document.getElementById("profilename");
var profilePic = document.getElementById("profilepic");
var facebookID = document.getElementById("fbId");
var fbPic = document.getElementById("fbPic");
var regName = document.getElementById("regName");
var regUser = document.getElementById("regUser");
var regPass = document.getElementById("regPass");
var regReEnter = document.getElementById("regReEnter");
var regEmail = document.getElementById("regEmail");
var registerForm = document.getElementById("registerForm");


var array = [];

window.fbAsyncInit = function() { //you can't change the name of their function
    FB.init({ //They're Facebook object - now you can use it
      appId      : '1284826011542018', //changing this to the Redpin App ID HOSTED = 1247138945308646, LOCALHOST = 1284826011542018
      xfbml      : true, //always have this "TRUE"
      version    : 'v2.8'
    });

    console.log(FB); //Check to make sure it's there


    fbRegister.onclick = function(e){
        e.preventDefault();
        window.userInfo = {
            userid: "",
            name:"",
            agerange: "",
            gender: "",
            picture: ""
        };
        console.log("Helllllo");
      FB.login(function(resp){ //response to login - what do you want to do with it
        console.log(resp);
        if(resp.status == "connected"){
            console.log(resp.authResponse.userID);

            FB.api('/me?fields=id,name,picture.height(300),gender,age_range', function(data){
                console.log(data); //Pushing data into an object to store
                
                window.userInfo.userid = data.id;
                window.userInfo.name = data.name;
                window.userInfo.agerange = data.age_range.min;
                window.userInfo.gender = data.gender;
                window.userInfo.picture = data.picture.data.url;
                facebookID.value = data.id;
                fbPic.value = data.picture.data.url;
                regName.value = data.name;
                regUser.value = data.name;
                regPass.value = data.name;
                regReEnter.value = data.name;
                regEmail.value = "fbtemp@email.com";
                registerForm.submit();
                console.log(window.userInfo);
                array.push(window.userInfo);

            });
                }else{
                    alert("An error occurred. Please try again.");
                    }

                });
              };

            };

  (function(d, s, id){ //FACEBOOK'S SCRIPT
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js"; //they're putting a Facebook object in your window
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
