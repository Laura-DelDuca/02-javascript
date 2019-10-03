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
  var arrayLength = fruits.length;
  for (var i = 0; i < arrayLength; i++) {
    console.log(fruits[i]);
  }
});
