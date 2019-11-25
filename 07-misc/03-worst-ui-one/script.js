(function() {
  document.getElementById("slider").addEventListener("input", function() {
    document.getElementById("target").innerHTML =
      "0" + document.getElementById("slider").value;
  });
})();
