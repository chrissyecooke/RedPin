var skip1 = document.getElementById("skip1");
var skip2 = document.getElementById("skip2");
var butt1 = document.getElementById("butt1");
var butt2 = document.getElementById("butt2");
var butt3 = document.getElementById("butt3");
var page1 = document.getElementById("page1");
var boardpin1 = document.getElementById("boardpin1");
var boardpin2 = document.getElementById("boardpin2");
var boardpin3 = document.getElementById("boardpin3");
var onBoardDiv = document.getElementById("newonboardscreen");

boardpin1.onclick = function () {
    console.log("hey");
};
setTimeout(function(){

  loadpage.style.display = "none";

}, 3000);

setTimeout(function(){

  boardpin1.classList.add("animatepin");

}, 3000);

skip1.onclick = function () {
    page1.style.display = "none";
    page2.style.display = "none";
};

skip2.onclick = function () {
    page2.style.display = "none";
};


butt1.onclick = function () {
   page1.style.display = "none";
   boardpin2.classList.add("animatepin");
   words2.classList.add("animatewords");
};
butt2.onclick = function () {
    page2.style.display = "none";
    boardpin3.classList.add("animatepin");
    words3.classList.add("animatewords");
};
butt3.onclick = function () {
    page3.style.display = "none";
    onBoardDiv.style.display = "none";
};
