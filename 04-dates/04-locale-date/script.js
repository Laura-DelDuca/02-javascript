/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

        var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
        var mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
        var date = new Date();
    
        var dateFrs = jours[date.getDay()] + " ";
        dateFrs += date.getDate() + " ";
        dateFrs += mois[date.getMonth()] + " ";
    
        var heure = date.getHours();
        var minutes = date.getMinutes();
        var secondes = date.getSeconds();
    
        var hours = heure + ":";
        hours += minutes + ":";
        hours += secondes;
    
    
    
        document.getElementById("target").innerHTML = dateFrs + hours

})();
