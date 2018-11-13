/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Tant que l'utilisateur n'entre pas un MDP qui fait 8 caracteres et 2 chiffres
// => retourne faux
// Si l'utilisateur rentre un MDP plus grand que 8 et contient + que 2 chiffres
// retourne OK
// Operate while on "password" to check out if there
//are at least 2 numbers amongst the strings ???

(function() {

    var numbers = 0;

    document.getElementById("pass-one").addEventListener("input", function() {
        
        var password = document.getElementById("pass-one").value; 
        var PWLenght = password.length;

    if (password [PWLenght - 1] >= "0" && password [PWLenght - 1] <= "9")
    numbers++;

    if (PWLenght >= 8 && numbers >= 2)
    document.getElementById("validity").innerHTML = "OK";

    else 
    document.getElementById("validity").innerHTML = "Pas OK";

    })
})();
