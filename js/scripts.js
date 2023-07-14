/* Allow the user to choose toppings and size for the pizza they'd like to order.

Create a pizza object constructor with properties for toppings and size.

Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this. */
document.addEventListener("DOMContentLoaded", function () {
  // Business Logic for Pizza
  function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
  }

  Pizza.prototype.calculateCost = function () {
    let cost = 0;
    switch (this.size) {
      case "small":
        cost = 8.99;
        break;
      case "medium":
        cost = 10.99;
        break;
      case "large":
        cost = 12.99;
        break;
    }
    const toppingCost = 0.99;
    cost += toppingCost * this.toppings.length;

    return cost.toFixed(2);
  }
});