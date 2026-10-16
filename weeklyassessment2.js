var menu = [
  { name: "Berry Blast", size: "medium", price: 6.5, fruit: "strawberry", calories: 210 },
  { name: "Mango Sunrise", size: "large", price: 7.25, fruit: "mango", calories: 280 },
  { name: "Green Glow", size: "small", price: 5.75, fruit: "spinach", calories: 160 }
];

function Smoothie(name, size, price, fruit, calories) {
  this.name = name;
  this.size = size;
  this.price = price;
  this.fruit = fruit;
  this.calories = calories;
}

const smoothie = new Smoothie(
  "Mango Sunrise",
  "large",
  7.25,
  "mango",
  280
);

console.log(smoothie);

function displaySmoothie(smoothie) {
  return `${smoothie.name} | ${smoothie.size} | ${smoothie.fruit} | $${smoothie.price} | ${smoothie.calories} cal`;
}
function findMostExpensiveSmoothie(menu) {
  var mostExpensive = menu[0];

  for (var i = 1; i < menu.length; i++) {
    if (menu[i].price > mostExpensive.price) {
      mostExpensive = menu[i];
    }
  }

  return "The highest price is $" +
         mostExpensive.price +
         " for " +
         mostExpensive.name;
}

console.log(findMostExpensiveSmoothie(menu));
