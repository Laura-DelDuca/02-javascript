(function() {
  var counter = localStorage.getItem("counter");
  document.getElementById("target").innerHTML = counter;

  document.getElementById("increment").addEventListener("click", function() {
    if (counter === null) {
      counter = 0;
    } else {
      counter++;
    }

    document.getElementById("target").innerHTML = counter;

    localStorage.setItem("counter", counter);
  });
})();
