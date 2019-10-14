(function() {
  var img = document.querySelector("img").src;
  var imghover = document.querySelector("img").getAttribute("data-hover");

  document.querySelector("img").addEventListener("mouseenter", function() {
    document.querySelector("img").src = imghover;
  });
  document.querySelector("img").addEventListener("mouseout", function() {
    document.querySelector("img").src = img;
  });
})();
