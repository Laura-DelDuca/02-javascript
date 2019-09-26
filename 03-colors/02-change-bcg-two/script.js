(function() {
  document.getElementById("run").addEventListener("click", function() {
    var pageColor = document.getElementById("color").value;
    document.documentElement.style.backgroundColor = pageColor;
  });
})();
