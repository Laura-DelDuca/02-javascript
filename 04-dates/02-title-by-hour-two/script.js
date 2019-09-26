(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    var date = new Date ();
    var hour = date.getHours();
    var message;

    if (hour <= 17.30)
        message= "Bonjour";
    else if (hour > 17.30)
        message= "Bonsoir";

    document.getElementById("target").innerHTML = message;

})();
