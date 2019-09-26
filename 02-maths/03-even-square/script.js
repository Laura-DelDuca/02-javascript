(function() {
  document.getElementById("run").addEventListener("click", function() {
    var result = "";

    for (var i = 1; i < 21; i++) {
      if (i % 2 == 0) {
        // The modulo operation finds the remainder after division of one number by another
        // Ici, avec modulo 2, on s'assure de ne garder que les nombres pairs dans la boucle entre 1 et 21
        result += "Le carré de " + i + " est : " + Math.pow(i, 2) + "\n";
        // Math.pow() envoie un nombre à une certaine puissance.
      }
    }

    alert(result);
  });
})();
