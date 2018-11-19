/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var btn1 = document.getElementById("part-one");
    var btn2 = document.getElementById("part-two");
    var btn3 = document.getElementById("part-three");
    var btn4 = document.getElementById("part-four");
    var number = document.getElementById("target");
    //find a way to set a max value (if/else???)
    var i = 460;
    var j = 00;
    var k = 00;
    var l = 00;
    number.innerHTML = "";


    btn1.addEventListener("click", function(){
        
        if (btn1.innerHTML >= 460 && btn1.innerHTML < 499){
            i++;
        }
        else {
            i = 460;
        }
        btn1.innerHTML = i;
    })
    
    btn2.addEventListener("click", function(){
        if (btn2.innerHTML >= 0 && btn2.innerHTML < 99){
            j++;
        }
        else {
            j = 0;
        }
        btn2.innerHTML = j;
    })

    btn3.addEventListener("click", function(){
        if (btn3.innerHTML >= 0 && btn3.innerHTML < 99){
            k++;
        }
        else {
            k = 0;
        }
        btn3.innerHTML = k;
    })

    btn4.addEventListener("click", function(){
        if (btn4.innerHTML >= 0 && btn4.innerHTML < 99){
            l++;
        }
        else {
            l = 0;
        }
        btn4.innerHTML = l;
    })


    //use conditions?
    //if btnX >= 10: need to use the string "0"; if not, no need to put 0 + btnX

  number = 
    


  // SORRY, I REALLY TRIED :(

})();
