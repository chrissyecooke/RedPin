<?php

    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }
?>

<!DOCTYPE html>
<html>
<head>
   <meta name="viewport" content="width=320, initial-scale=1, maximum-scale=1, user-scalable=0">
    <link  href="css/redpinstyle.css" rel="stylesheet" type="text/css"/>

    </head>
    
    <body>
        
        <div class="fullGradient">
            
            <img class="logo" src="images/redpin_logo.png">
            
<!---------------------------------------FORM CONTAINER---------------------------------------------->

            <div id="inputContainer">
                
             
              <form action="php/login1.php" method="POST">
                <input id="loginUser"  class="registerInputs" name="lUser" type="text" placeholder="Username" min="6" max="20"/>
                <input id="loginPass" class="registerInputs" name="lPass" type="password" oninput="enter()" placeholder="Password" min="6" max="20"/>
                  <button id="loginBut" type="submit">Your Adventure Awaits!</button>
                  </form>
                
<!------------------------------------FB LOGIN & REGISTER BUTTS---------------------------------------------->
           
                <a href="404error.html"><p id="pwHelp">Forgot the magic password?</p></a>
                <a href="index.php"><button id="registerBut" style="font-size: 12px;margin-top: 20%;" >Don't have an account?</button></a>
                
                
                
                <form action="php/register1.php" method="POST"
                  name="registrationForm" id="registerForm">
                <input id="regName" class="registerInputs" name="uName" type="hidden" placeholder="  First & Last Name" min="6" class="loginConfirm"required />
                <input id="regEmail" class="registerInputs" name="uEmail" type="hidden" placeholder="  Email" min="6" class="loginConfirm"required/>
                <input id="regUser" class="registerInputs" name="uUser" type="hidden" placeholder="  Username" mi="6" class="loginConfirm"required/>
                <input id="regPass" class="registerInputs" name="uPass" type="hidden" placeholder="  Password" min="4" class="loginConfirm" required/>
                <input id="regReEnter" class="registerInputs" name="rePass" type="hidden" placeholder="  Re-Enter Password" oninput="validateForm()"  min="4" class="loginConfirm" required />
                <input type="hidden" id="fbId" name="fbId"/>
                <input type="hidden" id="fbPic" name="fbPic"/>

        <button id="fbRegister">Login with Facebook</button>
                    
                
            
            </form>
                
                
                
            </div>

        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="js/redpinFB.js"></script>
        
        <!--<script src="js/redpin-register.js"></script>-->
        <script>
            
            
            var loginBut = document.getElementById("loginBut");
            
        function enter(){
            var loginName = document.getElementById("loginUser").value;
            var loginPass = document.getElementById("loginPass").value;
            
             if(loginName.length >5 && loginPass.length >2){
                    
                    loginBut.style.transition = "1s";
                    loginBut.style.color = "#ed194e";
                    loginBut.style.backgroundColor = "#fff";
                }else{
                
                    loginBut.style.transition = "1s";
                    loginBut.style.color = "#fff";
                    loginBut.style.backgroundColor = "transparent";
                
                };
                   };
        </script>

    </body>
</html>
