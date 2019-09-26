(function() {

    document.getElementById("run").addEventListener("click", function (){

        var day = document.getElementById("dob-day").value;
        var month = document.getElementById("dob-month").value;
        var year = document.getElementById("dob-year").value;
    
        var birthday = new Date (year+ "/" +month+ "/" +day);
        var today = new Date ();
    
        var years = today.getFullYear () - birthday.getFullYear ();
    
        if (today < birthday) {
            years--; 
        }
        
        alert("Tu as " +years+ " ans");
    })
})();
