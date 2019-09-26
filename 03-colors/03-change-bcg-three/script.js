(function() {
  document.getElementById("run").addEventListener("click", function() {
    var randomColor1 = Math.floor(Math.random() * 255);
    var randomColor2 = Math.floor(Math.random() * 255);
    var randomColor3 = Math.floor(Math.random() * 255);

    document.documentElement.style.backgroundColor =
      "rgb(" + randomColor1 + "," + randomColor2 + "," + randomColor3 + ")";
  });
})();
