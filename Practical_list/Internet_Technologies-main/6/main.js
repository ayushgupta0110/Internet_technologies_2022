// var employee = {
// 	name: "Elon Musk",
// 	birthYear: 1971,
// 	email: "dogefather@tesla.com",
// 	department: "Executive Operations",
// 	salary: 4000000,
// 	age: function () {
// 		var dt = new Date();
// 		var year = dt.getFullYear();
// 		return year - this.birthYear;
// 	},
// };

// var employee = new Object();
// employee.name = "Elon Musk";
// employee.birthYear = 1971;
// employee.email = "dogefather@tesla.com";
// employee.department = "Executive Operations";
// employee.salary = 4000000;
// employee.age = function () {
// 	var dt = new Date();
// 	var year = dt.getFullYear();
// 	return year - this.birthYear;
// };

function emp(name, birthYear, email, department, salary) {
	this.name = name;
	this.birthYear = birthYear;
	this.email = email;
	this.department = department;
	this.salary = salary;
	this.age = function () {
		var dt = new Date();
		var year = dt.getFullYear();
		return year - this.birthYear;
	};
}

// var employee = new emp("Elon Musk", 1971, "dogefather@tesla.com", "Marketing", 4000000);
// var employee = new emp("Onkar Singh", 1985, "os@itandtoc.com", "Computer Science", 2000000);

// document.getElementById("name").innerHTML = employee.name;
// document.getElementById("birthYear").innerHTML = employee.birthYear;
// age.innerHTML = employee.age();
// email.innerHTML = employee.email;
// department.innerHTML = employee.department;

var employee1 = new emp("Elon Musk", 1971, "dogefather@tesla.com", "Marketing", 4000000);
var employee2 = new emp("Onkar Singh", 1985, "os@itandtoc.com", "Computer Science", 2000000);

obj1.innerHTML =
	"<td>" +
	employee1.name +
	"</td>" +
	"<td>" +
	employee1.birthYear +
	"</td>" +
	"<td>" +
	employee1.age() +
	"</td>" +
	"<td>" +
	employee1.email +
	"</td>" +
	"<td>" +
	employee1.department +
	"</td>";

obj2.innerHTML =
	"<td>" +
	employee2.name +
	"</td>" +
	"<td>" +
	employee2.birthYear +
	"</td>" +
	"<td>" +
	employee2.age() +
	"</td>" +
	"<td>" +
	employee2.email +
	"</td>" +
	"<td>" +
	employee2.department +
	"</td>";
