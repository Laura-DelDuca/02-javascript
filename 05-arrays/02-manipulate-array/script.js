var fruits = [
  "pomme",
  "poire",
  "fraise",
  "tomate",
  "orange",
  "mandarine",
  "durian",
  "pêche",
  "raisin",
  "cerise"
];

// console.log(fruits);

document.getElementById("run").addEventListener("click", function() {
  fruits.shift();
  fruits.pop();
  fruits.unshift("banane");
  fruits.push("kiwi");
  // console.log(fruits);
  alert(fruits);
});
