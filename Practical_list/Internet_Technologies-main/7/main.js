var arr = [
	{accom: 420, food: 40, phone: 10},
	{accom: 460, food: 20, phone: 20},
	{accom: 230, food: 0, phone: 0},
	{accom: 620, food: 150, phone: 60},
]

var table1 = document.getElementById("table1");
for (var i = 1; i <= arr.length; i++) {
	var row = table1.insertRow(i);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);

	cell1.innerHTML = i;
	cell2.innerHTML = JSON.stringify(arr[i-1]);
}

function getFromArray() {
	var index = document.getElementById('index').value;
	var prop = document.getElementById('prop1').value;
	document.getElementById('result1').textContent = "Result is : " + arr[index-1][prop];
}



var obj = {
	room1: [420, 40, 10],
	room2: [460, 20, 20],
	room3: [230, 0, 0],
	room4: [620, 150, 60],
}

var table2 = document.getElementById("table2");
var obj_size = 0;
for (key in obj) {
	if (obj.hasOwnProperty(key)) obj_size++;
}

for (var i = 1; i <= obj_size; i++) {
	var row = table2.insertRow(i);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);

	cell1.innerHTML = Object.keys(obj)[i-1];
	cell2.innerHTML = obj[Object.keys(obj)[i-1]];
}

function getFromObject() {
	var prop2 = document.getElementById('prop2').value;
	var item = document.getElementById('item').value;
	document.getElementById('result2').textContent = "Result is : " + obj[prop2][item];
}