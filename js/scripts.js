/* Allow the user to choose toppings and size for the pizza they'd like to order.

Create a pizza object constructor with properties for toppings and size.

Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this. */
document.addEventListener("DOMContentLoaded", function() {
// Business Logic for Pizza
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.currentSize = size;
}

Pizza.prototype.addTopping = function(topping) {
  topping.id = this.currentSize();
  this.toppings[topping.id] = topping;
};

Pizza.prototype.currentSize = function() {
  this.currentSize += 1;
  return this.currentSize;
}


})