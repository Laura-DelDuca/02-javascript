(function() {
  var wave = document.getElementById("target").innerHTML;
  var myText = "";
  var textSizes = [14, 16, 18, 20, 22, 24, 26, 24, 22, 20, 18, 16, 14];

  for (var i = 0; i < wave.length; i++) {
    if (wave[i] != " ")
      myText +=
        '<span style="font-size:' +
        textSizes[i % 9] +
        'px;">' +
        wave[i] +
        "</span>";
    else myText += " ";
  }
  document.getElementById("target").innerHTML = myText;
})();
