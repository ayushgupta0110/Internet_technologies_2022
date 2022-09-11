var subtotal = (13 + 1) * 5; // Subtotal is 70
var shipping = 0.5 * (13 + 1); // Shipping is 7
var total = subtotal + shipping; // Total is 77

var elSub = document.getElementByid('subtotal ');
elSub.textContent = subtotal;

var elShip = document.getElementByid('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementByid('total');
elTotal.textContent = total; 