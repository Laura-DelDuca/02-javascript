(function() {
  var table = document.createElement("table");
  var tr, td, val;
  for (var i = 1; i <= 10; i++) {
    tr = document.createElement("tr");
    for (var j = 1; j <= 10; j++) {
      val = i * j;
      td = document.createElement("td");
      td.innerHTML = val;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.getElementById("target").appendChild(table);
})();
