var inStock;
var shipping;
inStock = true;
shipping = false;

/* Some other processing might go here and , as 
a result , the script might need to change t hese 
values */
inStock = false;
shipping = true;
var elStock = document.getElementByld('stock');
elStock.className = inStock;
var elShip = document.getElementByld('shipping');
elShip.className = shipping; 