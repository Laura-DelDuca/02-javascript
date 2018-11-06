/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").addEventListener("click", function(){
    var randomColor1 = Math.floor(Math.random() * 255);
    var randomColor2 = Math.floor(Math.random() * 255);
    var randomColor3 = Math.floor(Math.random() * 255);

    document.documentElement.style.backgroundColor= "rgb("+randomColor1+"," +randomColor2+"," +randomColor3+")"
    
})




})();
