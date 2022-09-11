function calcGPA() {
	var name = document.getElementById("Name").value;
	var course = document.getElementById("Course").value;

	var sem1 = parseFloat(document.getElementById("sem1").value);
	var sem2 = parseFloat(document.getElementById("sem2").value);
	var sem3 = parseFloat(document.getElementById("sem3").value);
	var sem4 = parseFloat(document.getElementById("sem4").value);

	var gpa = average(sem1, sem2, sem3, sem4);

	document.getElementById("result").innerHTML =
		"Hello " + name + ". You are enrolled in the course " + course + ". Your average CGPA is: " + gpa;
}

function average(sem1, sem2, sem3, sem4) {
	var avg = (sem1 + sem2 + sem3 + sem4) / 4;
	return avg;
}
