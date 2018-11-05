/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

do {
    var age = prompt ("Quel âge as-tu?");
    var genre = prompt ("Es-tu un homme ou une femme?");
    var city = prompt ("Dans quelle ville habites-tu?");

    all = confirm ("Peux-tu confirmer que tu as " +age +"ans, que tu te décris comme " +genre +" et que tu viens de " +city);
}

while (all == false);

})();
