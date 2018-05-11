// ------------------------- JAVASCRIPT -------------------------
// BOUTON START
function startCountdown() {

var heures = parseInt(document.forms["switchTime"].elements["heures"].value);
var minutes = parseInt(document.forms["switchTime"].elements["minutes"].value);
var secondes = parseInt(document.forms["switchTime"].elements["secondes"].value);

  	
    if(isNaN(heures)){ heures = 00;}
    if(isNaN(minutes)){ minutes = 00;}
    if(isNaN(secondes)){ secondes = 00;} 

var decompte = ((heures*3600)+(minutes*60)+(secondes)*1);



var x = setInterval(function(timer) { 

decompte --;
 	
    var h = Math.floor((decompte % (1 * 60 * 60 * 24)) / (1 * 60 * 60));
    var m = Math.floor((decompte % (1 * 60 * 60)) / (1 * 60));
    var s = Math.floor((decompte % (1 * 60)) / 1);
    
    // Afficher le timer
    document.getElementById("demo").innerHTML =  h + "h " + m + "m "  + s + "s ";


var audio = document.getElementById("end_timer");
audio.loop = false;
        audio.load()

reset.onclick=function(){clearInterval(x);}

if (decompte < 0) {
    
        document.getElementById("demo").innerHTML = "TIME'S UP !";
        audio.play();
        
    }


},1000);}




// ------------------------------------ COULEUR ------------------------------------- 

document.getElementById("reset").addEventListener("mouseover", mouseOver);
document.getElementById("reset").addEventListener("mouseout", mouseOut);

function mouseOver() {

    document.getElementById("reset").style.color = "red";
    document.getElementById("reset").style.border = "3px red solid";

}

function mouseOut() {
    document.getElementById("reset").style.color = "black";
    document.getElementById("reset").style.border = "1px black solid";

}


function changeColor (){  

document.getElementById("start").style.color = "green";
    document.getElementById("start").style.border = "3px green solid";

}

function stopColor() {

	document.getElementById("start").style.color = "black";
    document.getElementById("start").style.border = "1px black solid";
}