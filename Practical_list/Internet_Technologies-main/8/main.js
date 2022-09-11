function matchNumbers() {
	var userInput = parseInt(document.getElementById("UserInput").value);
	var randomNumber = Math.floor(Math.random() * 10);

	if (randomNumber === userInput) {
		document.getElementById("result1").innerHTML =
			"<span style='color:green; font-size:20px'>The random number generated is equal to user input: " +
			userInput +
			"</span>";
	} else {
		document.getElementById("result1").innerHTML =
			"<span style='color:red; font-size:20px'>The random number generated (" +
			randomNumber +
			") is not equal to user input!" +
			"</span>";
	}
}

function switchCase() {
	var inp = Number(document.getElementById("SwitchCaseInput").value);
	var out;

	switch (inp) {
		case 11:
			out = "Eleven";
			break;
		case 12:
			out = "Twelve";
			break;
		case 13:
			out = "Thirteen";
			break;
		case 14:
			out = "Fourteen";
			break;
		case 15:
			out = "Fifteen";
			break;
		default:
			out = "No value matched!";
	}

	document.getElementById("result2").innerHTML = "<span style='color:#fe6f7d; font-size:20px'>" + out + "</span>";
}
