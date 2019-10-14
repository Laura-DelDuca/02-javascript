(function() {
  var img = document.createElement("img");
  img.setAttribute(
    "src",
    document.getElementById("source").getAttribute("data-image")
  );
  document.getElementById("target").appendChild(img);
  document.getElementById("source").remove();
})();
