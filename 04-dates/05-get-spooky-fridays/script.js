(function() {
  document.getElementById("run").addEventListener("click", function() {
    var date = new Date();
    var month;
    var mois = new Array(
      "Janvier",
      "Fevrier",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Aout",
      "Septembre",
      "Octobre",
      "Novembre",
      "Decembre"
    );
    var friday13 = "";
    var year = document.getElementById("year").value;

    for (month = 0; month < 12; month++) {
      date = new Date(year, month, 13, 8, 0, 0);
      if (date.getDay() === 5) {
        friday13 += mois[month] + " ";
      }
    }

    alert(friday13);
  });
})();
