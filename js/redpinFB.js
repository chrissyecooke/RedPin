var fbRegister = document.getElementById("fbRegister")


window.userInfo = {
    userid: "",
    name:"",
    agerange: "",
    gender: "",
    picture: ""
}

//array=[];

window.fbAsyncInit = function() { //you can't change the name of their function
    FB.init({ //They're Facebook object - now you can use it
      appId      : '1284826011542018', //changing this to the Redpin App ID
      xfbml      : true, //always have this "TRUE"
      version    : 'v2.8'
    });

    console.log(FB); //Check to make sure it's there


    fbRegister.onclick = function(){
      FB.login(function(resp){ //response to login - what do you want to do with it
        console.log(resp);
        if(resp.status == "connected"){
            console.log(resp.authResponse.userID);

            FB.api('/me?fields=id,name,picture,gender,age_range', function(data){
                console.log(data); //Pushing data into an object to store
                window.userInfo.userid = data.id;
                window.userInfo.name = data.name;
                window.userInfo.agerange = data.age_range.min;
                window.userInfo.gender = data.gender;
                window.userInfo.picture = data.picture.data.url;
                console.log(window.userInfo);
                
            });
                }else{
                    alert("An error occurred. Please try again.");
                    };

                });
              }

            };

  (function(d, s, id){ //FACEBOOK'S SCRIPT
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js"; //they're putting a Facebook object in your window
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
