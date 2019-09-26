(function() {
    document.getElementById("run").addEventListener("click", function() {

        // This method didn't work, don't understand why:
        var numbersInput = document.getElementById("numbers").value;

        numbersInput = [2, 4, 14, 10, 90, 23, 16];

        numbersInput.sort(function (a,b){
            return a-b});

        alert(numbersInput);

    });

})();
