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