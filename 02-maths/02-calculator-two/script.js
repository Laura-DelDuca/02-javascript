(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) {
        // perform the operation

        // First input
        var one = document.getElementById("op-one").value;
        // Second input
        var two = document.getElementById("op-two").value;
        

        switch (operation) {

            case "addition": 
            alert (parseInt (one) + parseInt (two));
            break

            case "substraction":
            alert (parseInt (one) - parseInt (two))
            break

            case "multiplication":
            alert (parseInt (one) * parseInt (two))
            break

            case "division":
            alert (parseInt (one) / parseInt (two))
            break
        }


    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
