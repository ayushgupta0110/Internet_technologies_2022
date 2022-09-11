function futureChoice() {
	if (Boolean(document.getElementById("HigherEducation").checked)) {
		document.getElementById("result").innerHTML = "Going for Higher Education!";
	} else if (Boolean(document.getElementById("Placement").checked)) {
		document.getElementById("result").innerHTML = "Going for Placements!";
	}
}
