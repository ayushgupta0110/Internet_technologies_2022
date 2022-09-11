//Create the array
var colors = ['white',
    'black',
    'custom'];

// Update the third item in the array
colors[2] = 'beige ';

// Get the element with an id of col ors
var el = document.getElementByid(' colors');

// Replace with third item from the array
el.textContent = colors[2]; 