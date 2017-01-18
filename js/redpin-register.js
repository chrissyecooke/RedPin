//document.requestFullscreen();

var nameInput = document.getElementById("regName");
var emailInput = document.getElementById("regEmail");
var userInput = document.getElementById("regUser");
var passInput = document.getElementById("regPass");
var reEnterInput = document.getElementById("regReEnter");
var x = reEnterInput.value;

var registerBut = document.getElementById("registerBut");

var inputs = document.getElementsByTagName("input");

//---------------------------------LOGIN PAGE VARIABLES--------------------------------------//
var loginBut = document.getElementById("loginBut");
//var loginUser = document.getElementById("loginUser").value;
//var loginPass = document.getElementById("loginUser").value;


registerBut.onclick = function(){

    if(passInput.value != reEnterInput.value){
        alert("You're passwords do not match! Please Re-enter");
        passInput.value = "";
        reEnterInput.value = "";
    }else{

        var register = {
        name: nameInput.value,
        email: emailInput.value,
        username: userInput.value,
        password: passInput.value,
        passwordConfirm: reEnterInput.value
            };  //user registration object

        console.log(register);
    };
};


/**loginBut.onclick = function(){
    if(loginUser.str.length < 6 && loginPass.str.length < 6){
        alert("oops! looks like your username or password is missing some characters!");
    }else{
        return;
    };
}; **/
