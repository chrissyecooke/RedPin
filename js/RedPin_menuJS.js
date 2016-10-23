$(document).ready(function(){
    var menuBut = $("#menuBut");
    var menu = $("#menu");
    
    var click = 0;
    $("#menuBut").on("click", function(event){
        
        click ++;
       switch(click){
           case 1: $("#menu").show();
           break;
               
           case 2: //close menu
            click = 0;
               $("#menu").hide();
               break;
       }
    });
    
    
});


