var current = 2;

function generateRandomColor() {
	var letters = "0123456789ABCDEF";
	var randomColor = "#";

	for (var j = 0; j < 6; j++) {
		randomColor += letters[Math.floor(Math.random() * 16)];
	}
	return randomColor;
}

function printTables() {
	var table = "";

	table +=
		"<div style='color: " + generateRandomColor() + "; font-size:" + (20 + current) + "px'>" + " Table of " + current +" : &nbsp;&nbsp;&nbsp;";

	for (var i = 1; i <= 10; i++) {
		table = table + "<span>" + current * i + " &nbsp;|&nbsp; " + "</span>";
	}

	table += "</div>";
	current++;

	if (current === 11) {
		clearInterval(inter);
	}
	document.getElementById("result1").innerHTML += table;
}

var inter;

function start() {
	inter = setInterval(printTables, 1500);
}

