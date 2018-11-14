/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

var myText = "There's the television. It's all right there - all right there. Look, listen, kneel, pray. Commercials! We're not productive anymore. We don't make things anymore. It's all automated. What are we for then? We're consumers, Jim. Yeah. Okay, okay. Buy a lot of stuff, you're a good citizen. But if you don't buy a lot of stuff, if you don't, what are you then, I ask you? What? Mentally ill."
var myArray = myText.split("");
var timeLooper;

function loop (){

    if(myArray.length > 0){
        document.getElementById("target").innerHTML += myArray.shift();
    }
    else {
        clearTimeout(timeLooper);
    }
    timeLooper = setTimeout(loop, 100);
}

loop();


})();
