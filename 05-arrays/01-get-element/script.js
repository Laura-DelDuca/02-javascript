(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // This also works: 
    // var fruit = fruits[fruits.length -9];

    var fourth = fruits[3];

    document.getElementById("run").addEventListener("click", function (){
        alert(fourth)
    })

})();
