function Red() {
	document.getElementById("text").style.color = "Red";
}
function Green() {
	document.getElementById("text").style.color = "Green";
}
function Blue() {
	document.getElementById("text").style.color = "Blue";
}

function Font10() {
	document.getElementById("text").style.fontSize = "10px";
}
function Font20(sz) {
	document.getElementById("text").style.fontSize = sz;
}
function Font30() {
	document.getElementById("text").style.fontSize = "30px";
}

document.getElementById("f1").onclick = function () {
	document.getElementById("text").style.fontFamily = "Garamond";
};

function Verdana() {
	document.getElementById("text").style.fontFamily = "Verdana";
}

function MonotypeCorsiva() {
	document.getElementById("text").style.fontFamily = "Monotype Corsiva";
}

document.getElementById("f2").onclick = Verdana;
document.getElementById("f3").onclick = MonotypeCorsiva;

document.getElementById("text").onmouseover = function () {
	document.getElementById("text").style.color = "Black";
};

var el1 = document.getElementById("s1");
el1.addEventListener("click", Font10, false);

var el2 = document.getElementById("s2");
el2.addEventListener(
	"click",
	function () {
		Font20("20px");
	},
	false
);

var el3 = document.getElementById("s3");
el3.addEventListener("click", Font30, false);
