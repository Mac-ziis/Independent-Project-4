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


// UI Logic

function updateCost() {
  const selectedToppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(input => input.value);
  const selectedSize = document.querySelector('input[name="size"]:checked').value;
  const pizza = new Pizza(selectedToppings, selectedSize);
  const cost = pizza.calculateCost();
  const costDisplay = document.getElementById('cost');
  costDisplay.textContent = "cost: $" + cost;
}

const checkboxes = document.querySelectorAll('input[name="topping"]');
checkboxes.forEach(checkbox => checkbox.addEventListener('change', updateCost));

const radios = document.querySelectorAll('input[name="size"]');
radios.forEach(radio => radio.addEventListener('change', updateCost));
});