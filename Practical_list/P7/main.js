$(document).ready(function () {
	$.ajax({
		type: "Get",
		url: "pets.json",
		dataType: "json",
		success: function (data) {
			$.each(data, function (key, obj) {
				$("#petsTable").append(
					"<tr><td>" +
						obj.name +
						"</td><td>" +
						obj.age +
						"</td><td>" +
						obj.weight +
						"</td><td>" +
						obj.breed +
						"</td> + <td>" +
						obj.fav +
						"</td></tr>"
				);
			});
		},
		error: function () {
			alert("json not found");
		},
	});

	// var xhr = new XMLHttpRequest();
	// xhr.open("GET", "pets.json");
	// xhr.send();
	// xhr.onload = function () {
	// 	var jsonArr = this.responseText;
	// 	var data = JSON.parse(jsonArr);
	// 	$.each(data, function (key, obj) {
	// 		$("#petsTable").append(
	// 			"<tr><td>" +
	// 				obj.name +
	// 				"</td><td>" +
	// 				obj.age +
	// 				"</td><td>" +
	// 				obj.weight +
	// 				"</td><td>" +
	// 				obj.breed +
	// 				"</td> + <td>" +
	// 				obj.fav +
	// 				"</td></tr>"
	// 		);
	// 	});
	// };
});
