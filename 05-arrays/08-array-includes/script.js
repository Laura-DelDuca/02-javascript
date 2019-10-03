(function() {
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

  var found = fruits.find(function(element) {
    return element === "pomme";
  });

  console.log(found);
})();
