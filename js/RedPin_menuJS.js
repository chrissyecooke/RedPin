
function hideNavbar() // needed for Android browser pushing up keyboard
{ 
    if (screen.height <= 550) // mobile
    {
        document.getElementById('loadmenu').style.zIndex = "-1";
    }
};

