(function() {
  var i = 0;
  document.getElementById("pass-one").addEventListener("input", function() {
    i++;

    if (i === 10) document.getElementById("pass-one").disabled = true;
    if (i <= 10) document.getElementById("counter").innerHTML = i + "/10";
  });
})();
