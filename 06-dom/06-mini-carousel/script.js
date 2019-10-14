(function() {
  var gallery = [
    "../../_shared/img/bell.svg",
    "../../_shared/img/clock.svg",
    "../../_shared/img/compass.svg",
    "../../_shared/img/lemon.svg",
    "../../_shared/img/map.svg"
  ];

  var i = 0;

  document.getElementById("next").addEventListener("click", function() {
    i++;

    if (i >= gallery.length) {
      i = 0;
    }

    document.querySelector("img").src = gallery[i];
  });
})();
