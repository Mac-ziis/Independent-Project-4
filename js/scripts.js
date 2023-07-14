document.addEventListener("DOMContentLoaded", function () {
  // Business Logic
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
  };

  // UI Logic
  function updateCost() {

    const selectedToppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(input => input.value);

    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    const pizza = new Pizza(selectedToppings, selectedSize);
    const cost = pizza.calculateCost();
    const costDisplay = document.getElementById('cost');
    costDisplay.textContent = "Cost: $" + cost;
  }

  function updateReceipt(pizza) {
    const orderDetails = document.getElementById('order-details');
    const totalCost = document.getElementById('total-cost');
    const toppingsText = pizza.toppings.length > 0 ? `Toppings: ${pizza.toppings.join(', ')}<br>` : '';
    const sizeText = `Size: ${pizza.size}<br>`;
    orderDetails.innerHTML = `${toppingsText}${sizeText}`;

    const cost = pizza.calculateCost();
    totalCost.innerHTML = `Total Cost: $${cost}`;
  }

  function showReceipt() {
    const receipt = document.getElementById('receipt');
    receipt.classList.remove('hidden');
  }

  const checkboxes = document.querySelectorAll('input[name="topping"]');
  checkboxes.forEach(checkbox => checkbox.addEventListener('change', () => {
    updateCost();
  }));

  const radios = document.querySelectorAll('input[name="size"]');
  radios.forEach(radio => radio.addEventListener('change', () => {
    updateCost();
  }));

  function placeOrder() {

    const selectedToppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(input => input.value);
    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    const pizza = new Pizza(selectedToppings, selectedSize);

    updateReceipt(pizza);
    showReceipt();
  }

  const placeOrderButton = document.getElementById('place-order-btn');
  placeOrderButton.addEventListener('click', placeOrder);

});