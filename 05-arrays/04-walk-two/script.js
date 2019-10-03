var fruits = [
  "pomme",
  "poire",
  "fraise",
  "tomate",
  "kiwi",
  "banane",
  "orange",
  "mandarine",
  "durian",
  "pêche",
  "raisin",
  "cerise"
];

document.getElementById("run").addEventListener("click", function() {
  const map = fruits.map(function(fruit) {
    console.log(fruit);
  });
});