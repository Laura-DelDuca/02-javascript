/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var attempts = 0;
    var answer = Math.floor(Math.random() * 100);
    console.log (answer);
    var myPrompt = prompt("Enter a number between 1 and 100");

    while(true) {
        attemps++;

        if(myPrompt < answer)
            alert ("Your number is below mine !");
        else if (myPrompt > answer)
            alert ("Your number is above mine");
        else 
            alert ("Well done");
    }

})();


