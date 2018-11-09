/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here


document.getElementById("run").addEventListener("click", function(){
    var N1 = document.getElementById("n-1").innerHTML = Math.floor(Math.random() * 100);
    var N2 =  document.getElementById("n-2").innerHTML = Math.floor(Math.random() * 100);
    var N3 = document.getElementById("n-3").innerHTML = Math.floor(Math.random() * 100);
    var N4 = document.getElementById("n-4").innerHTML = Math.floor(Math.random() * 100);
    var N5 = document.getElementById("n-5").innerHTML = Math.floor(Math.random() * 100);
    var N6 = document.getElementById("n-6").innerHTML = Math.floor(Math.random() * 100);
    var N7 = document.getElementById("n-7").innerHTML = Math.floor(Math.random() * 100);
    var N8 = document.getElementById("n-8").innerHTML = Math.floor(Math.random() * 100);
    var N9 = document.getElementById("n-9").innerHTML = Math.floor(Math.random() * 100);
    var N10 = document.getElementById("n-10").innerHTML = Math.floor(Math.random() * 100);

    document.getElementById("min").innerHTML = Math.min(N1, N2, N3, N4, N5, N6, N7, N8, N9, N10);
    document.getElementById("max").innerHTML = Math.max(N1, N2, N3, N4, N5, N6, N7, N8, N9, N10);
    document.getElementById("sum").innerHTML = N1 + N2 + N3 + N4 + N5 + N6 + N7 + N8 + N9 + N10;
    document.getElementById("average").innerHTML = (N1 + N2 + N3 + N4 + N5 + N6 + N7 + N8 + N9 + N10) / 10;
})





})();
