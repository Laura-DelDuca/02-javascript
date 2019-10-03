(function() {
  var fruits = [
    "cerise",
    "durian",
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "fraise",
    "durian",
    "pêche",
    "cerise",
    "raisin",
    "cerise"
  ];

  document.getElementById("run").addEventListener("click", function() {
    let result = fruits.sort().reduce((accumulator, current) => {
      const length = accumulator.length;
      if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
      }
      return accumulator;
    }, []);
    console.log(result);
  });
})();
