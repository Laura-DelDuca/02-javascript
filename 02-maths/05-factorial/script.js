// En mathématiques, la factorielle d'un entier naturel n 
// est le produit des nombres entiers strictement positifs inférieurs ou égaux à n

(function() {
    
    document.getElementById("run").addEventListener("click", function() {

        var numberInput = document.getElementById("number").value;
        var fact = numberInput;

        for (var i = numberInput - 1; i > 1; i--) {
            fact = fact * i;
        }

        alert(fact);

    });

})();
