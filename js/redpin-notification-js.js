var welcome = document.getElementById("welcomeNotification");
var welcomeBut = document.getElementById("welcomeBut");
var trip = document.getElementById("tripNotification");
var pin = document.getElementById("pinNotification");

window.onload=function(){
if(window.location.href == "http://localhost:8888/RedPin_MorganHueston_V42/profile.php"){
    welcome.style.transition="all 2s";
    welcome.style.visibility = "visible";
};
};

welcomeBut.onclick = function(){
  welcome.style.visibility ="hidden";  
};

