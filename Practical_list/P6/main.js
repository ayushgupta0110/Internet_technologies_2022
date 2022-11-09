function logObjects(event) {
	event.preventDefault();

	const petInfo = {
		name: $("#name").val(),
		age: $("#age").val(),
		weight: $("#weight").val(),
		breed: $("#breed").val(),
		fav: $("#fav").val(),
	};

	console.log("JavaScript Object-\n", petInfo);
	console.log("JSON Object-\n", JSON.stringify(petInfo));
}
