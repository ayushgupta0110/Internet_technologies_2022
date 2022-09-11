function callFor() {
	var msg = "";

	for (var i = 0; i <= 10; i++) {
		msg += i + "&nbsp;&nbsp;&nbsp;";
	}

	document.getElementById("result1").innerHTML = "<span style='color:green; font-size:20px'>" + msg + "</span>";
}

function callWhile() {
	var msg2 = "";
	var j = 11;

	while (j <= 20) {
		msg2 += j + "\n";
		j++;
	}

	document.getElementById("result2").innerHTML = "<span style='color:green; font-size:20px'>" + msg2 + "</span>";
}

function callDoWhile() {
	var msg3 = "";
	var k = 21;

	do {
		msg3 += k + "&nbsp;&nbsp;&nbsp;";
		k++;
	} while (k <= 30);

	document.getElementById("result3").innerHTML = "<span style='color:green; font-size:20px'>" + msg3 + "</span>";
}
