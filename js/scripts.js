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

    return cost;
  };

  function calculateTax(cost) {
    const taxRate = 0.18;
    return cost * taxRate;
  }

  // UI Logic
  function updateCost() {
    const selectedToppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(input => input.value);
    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    const pizza = new Pizza(selectedToppings, selectedSize);
    const cost = pizza.calculateCost();
    const costDisplay = document.getElementById('cost');
    costDisplay.textContent = "Cost: $" + cost.toFixed(2);

    return cost;
  }

  function updateReceipt(pizza) {
    const orderDetails = document.getElementById('order-details');
    const totalCost = document.getElementById('total-cost');
    const taxAmount = document.getElementById('tax-amount');
    const totalWithTax = document.getElementById('total-with-tax');

    const toppingsText = pizza.toppings.length > 0 ? `Toppings: ${pizza.toppings.join(', ')}<br>` : '';
    const sizeText = `Size: ${pizza.size}<br>`;
    orderDetails.innerHTML = `${toppingsText}${sizeText}`;

    const cost = pizza.calculateCost();
    const tax = calculateTax(cost);
    const total = cost + tax;

    totalCost.innerHTML = `Total Cost: $${cost.toFixed(2)}`;
    taxAmount.innerHTML = `Tax: $${tax.toFixed(2)}`;
    totalWithTax.innerHTML = `Total with Tax: $${total.toFixed(2)}`;
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