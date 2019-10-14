(function() {
  var table = document.createElement("table");
  var tr;

  for (var i = 0; i < 10; i++) {
    tr = document.createElement("tr");
    tr.appendChild(document.createElement("td"));
    table.appendChild(tr);
  }

  document.getElementById("target").appendChild(table);
})();
