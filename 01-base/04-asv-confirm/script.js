(function() {

do {
    var age = prompt ("How old are you ?");
    var genre = prompt ("Are you a man or a woman ?");
    var city = prompt ("In which city do you live ?");

    all = confirm ("So, you are " +age +" years old, you are a " +genre +" who lives in " +city);
}

while (all == false);

})();
