(function() {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        var one = document.getElementById("op-one").value;
        var two = document.getElementById("op-two").value;
        alert(parseInt (one) + parseInt (two));
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform a substraction
        var one = document.getElementById ("op-one").value
        var two = document.getElementById ("op-two").value
        alert(parseInt (one) - parseInt (two));
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform a multiplication
        var one = document.getElementById ("op-one").value
        var two = document.getElementById ("op-two").value
        alert(parseInt (one) * parseInt (two));
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform a division
        var one = document.getElementById ("op-one").value
        var two = document.getElementById ("op-two").value
        alert(parseInt (one) / parseInt (two));
    });
})();
