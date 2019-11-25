(function() {
  var myText =
    "There's the television. It's all right there - all right there. Look, listen, kneel, pray. Commercials! We're not productive anymore. We don't make things anymore. It's all automated. What are we for then? We're consumers, Jim. Yeah. Okay, okay. Buy a lot of stuff, you're a good citizen. But if you don't buy a lot of stuff, if you don't, what are you then, I ask you? What? Mentally ill.";
  var myArray = myText.split("");
  var timeLooper;

  function loop() {
    if (myArray.length > 0) {
      document.getElementById("target").innerHTML += myArray.shift();
    } else {
      clearTimeout(timeLooper);
    }
    timeLooper = setTimeout(loop, 100);
  }

  loop();
})();
