(function() {
  var attempts = 0;
  var myNumber = Math.floor(Math.random() * 100);
  var userNumber = prompt("Enter a number between 1 and 100");

  while (true) {
    attempts++;
    if (userNumber < myNumber)
      userNumber = prompt("Your number is below mine!");
    else if (userNumber > myNumber)
      userNumber = prompt("Your number is above mine!");
    else {
      alert(
        "Well done, mate! Yet, it needed " +
          attempts +
          " attempts to find the right number"
      );
      break;
    }
  }
})();
