const newObj = `{"name":"Ayush","isStudent":"true","Percentage":"90","Address":{"city":"Delhi","Qualification":"Graduation"},"shopItem":["food","clothes","sunflower"]}`;
obj = JSON.parse(newObj);

console.log(obj.name);


const object = {name:"John",age:"20",city:"Delhi"};
const myObj = JSON.stringify(object);
console.log(myObj);

const data  = require("./employee.json");

console.log(data.employee[2].name);
