var buttonMooi = document.getElementById('button_mooi');
var buttonMatig = document.getElementById('button_matig');
var buttonSlecht = document.getElementById('button_slecht');
var video = document.getElementById('video');


buttonMooi.addEventListener('click', speelMooi);
buttonMatig.addEventListener('click', speelMatig);
buttonSlecht.addEventListener('click', speelSlecht);

function speelMooi() {
    video.src = "afbeeldingen/SchaapGrasWebsite.mov";
    console.log('run mooi');
}

function speelMatig() {
    video.src = "afbeeldingen/SchaapModder2%20Website.mov";
    console.log('run matig');
}

function speelSlecht() {
    video.src = "afbeeldingen/SchaapBallonWebsite.mov";
    console.log('sup slecht');
}



// Laden 
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 6500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}





// Muis Effect
// Geleerd via website van docent Sanne bij onderwerp spelen met css - pinguïn
var bewegen = false;
var rondjetoevoegen = false;
var klokjebewegen;
var test;

document.addEventListener('mousemove', function (event) {
	// moving = true;
	clearTimeout(klokjebewegen);
	klokjebewegen = setTimeout(movingStopped, 300);
	if(rondjetoevoegen == false) {
		addDot(event);
	}
});

function movingStopped() {
	bewegen = false;
}

function addDot(event) {
	rondjetoevoegen = true;

	let nieuwe = document.createElement("div");
	nieuwe.classList.add("rondje");
    var test2;
	
	nieuwe.style.setProperty("--dotSize", Math.floor( Math.random() * 20 + 20));
	nieuwe.style.setProperty("--dotLeft", event.clientX);
	nieuwe.style.setProperty("--dotTop", event.clientY);
	nieuwe.style.setProperty("--dotAngle", Math.floor( Math.random() * 90 + 4 ));

	nieuwe.addEventListener("animationend", function(event){
		nieuwe.parentNode.removeChild(nieuwe);
	});

	document.body.appendChild(nieuwe);

	setTimeout(function(){
		rondjetoevoegen = false;
	},1);
}





var vierkant = document.getElementById("weg");
var button = document.getElementById("button_mooi");
//var kruisje = document.getElementsByClassName("weg")[0];


button.addEventListener("click", zien);

function zien() {
    vierkant.classList.add("block");
}

//kruisje.addEventListener("click", weg);
//
//function weg() {
//    vierkant.classList.remove("block");
//}



var vierkant = document.getElementById("weg");
var buttonja = document.getElementById("button_matig");
//var kruisje = document.getElementsByClassName("weg")[0];


buttonja.addEventListener("click", zientwee);

function zientwee() {
    vierkant.classList.add("blocktwee");
}
//
//kruisje.addEventListener("click", weg);
//
//function weg() {
//    vierkantja.classList.remove("block");
//}



var vierkant = document.getElementById("weg");
var buttondrie = document.getElementById("button_slecht");
//var kruisje = document.getElementsByClassName("weg")[0];


buttondrie.addEventListener("click", ziendrie);

function ziendrie() {
    vierkant.classList.add("blockdrie");
}

//kruisje.addEventListener("click", weg);
//
//function weg() {
//    vierkantja.classList.remove("block");
//}





