var nameInput = document.getElementById("regName");
var emailInput = document.getElementById("regEmail");
var userInput = document.getElementById("regUser");
var passInput = document.getElementById("regPass");
var reEnterInput = document.getElementById("regReEnter");

var registerBut = document.getElementById("registerBut");

var inputs = document.getElementsByTagName("input");

while(inputs.value != null){
    
    registerBut.style.transition = "1s";
    registerBut.style.backgroundColor = "#fff";
    registerBut.style.color = "#ed194e";
};

registerBut.onclick = function(){
    
    if(passInput.value != reEnterInput.value){
        alert("You're passwords do not match! Please Re-enter")
        passInput.value = "";
        reEnterInput.value = "";
    }else{

        register = {
        name: nameInput.value,
        email: emailInput.value,
        username: userInput.value,
        password: passInput.value,
        passwordConfirm: reEnterInput.value
            };  //user registration object

        console.log(register);
    }
};