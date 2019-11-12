(function() {
  document.getElementById("run").addEventListener("click", function() {
    if (
      document.getElementById("pass-one").value !=
      document.getElementById("pass-two").value
    ) {
      //border red
      document.getElementById("pass-one").style.borderColor = "red";
      document.getElementById("pass-two").style.borderColor = "red";
    }
  });
})();
