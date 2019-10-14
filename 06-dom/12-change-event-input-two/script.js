(function() {
  var numbers = 0;

  document.getElementById("pass-one").addEventListener("input", function() {
    var password = document.getElementById("pass-one").value;
    var PWLength = password.length;

    if (password[PWLength - 1] >= "0" && password[PWLength - 1] <= "9")
      numbers++;

    if (PWLength >= 8 && numbers >= 2)
      document.getElementById("validity").innerHTML = "OK";
    else document.getElementById("validity").innerHTML = "Pas OK";
  });
})();
