Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Test: "It should calculate the cost of small pizza with no toppings"
Code: const toppings1 = [];
      const size1 = "small";
      const pizza1 = new Pizza(toppings1, size1);
      pizza1.calculateCost();
Expected Output: 8.99;

Test: "It should calculate the cost of a medium pizza with 3 toppings"
Code: const toppings2 = ["cheese", "pepperoni", "artichoke"];
      const size2 = "medium";
      const pizza2 = new Pizza(toppings2, size2);
      pizza2.calculateCost();
Expected Output: 13.96;

Test: "It should return the cost of a large pizza with 1 topping"
Code: const toppings3 = ["anchovy"];
      const size3 = "large";
      const pizza3 = new Pizza(toppings3, size3);
      pizza3.calculateCost();
Expected Output: 13.98;