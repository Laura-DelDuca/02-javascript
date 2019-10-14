(function() {
  // Yet to check...
  document.getElementById("run").addEventListener("click", function() {
    if (
      document.getElementById("pass-one").value !=
      document.getElementById("pass-two").value
    ) {
      document.getElementById("pass-one").setAttribute("class", "ERROR");

      document.getElementById("pass-two").setAttribute("class", "ERROR");
    }
  });
})();
