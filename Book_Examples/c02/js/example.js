
// Create variables for the welcome message 
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order: ';

// Concatenate the three variables above to creat e t he welcome message
var welcome = greeting + name + message;

// Create variables to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element that has an id of greeti ng
var el = document.getElementByid('greeting');

// Replace the content of that element with the personal ized welcome message
el.textContent = welcome;

// Get the el ement that has an id of userSign then update its contents
var elSign = document.getElementByld('userSign')
elSign.textContent = sign;

// Get the element that has an id of ti l es then update its contents
var elTiles = document.getElementByid('tiles');
elTiles.textContent = tiles;

// Get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementByid('subTotal ');
elSubTotal.textContent = ' $' + subTotal;

// Get the element that has an id of shipping then update its contents
var elSubTotal = document.getElementByid('shipping');
elSubTotal.textContent = '$' + shipping;

// Get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementByid('grandTotal ');
elGrandTotal.textContent = '$ ' + grandTotal; 