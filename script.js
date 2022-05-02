var entryCount = 0;
var displayCount = 0;
var i = 0;

$(document).ready(function () {

    //capture key presses
    $(document).on("keypress", function (e) {
        entryCount++;
        displayCount++;

        
        console.log(e.keyCode)
        // Q 81 W 87 E 69 R 82 T 84  Y 89 U 85  I 73 O 79 P 80 A 65 S 83 D 68  F 70 G 71 H 72 J 74 K 75 L 76 Z 90
        // X 88 C 67 V 86 B 66  N 78 M 77
        const html= new Array('<img src="images/'+e.keyCode+'.png" class="letterImg" id="lettrimg"/>')
        $('#result').append(html) 

        console.log("entry #" + entryCount + " : " + e.which + ". Showing " + displayCount);
    });

    //capture function keys
    //keydown is for function keys, keypress is for letters and numbers
    $(document).on("keydown", function (e) {
        //if pressed key is a backspace

        if (e.which == 8) {
            e.preventDefault();
            entryCount++;
            displayCount--;
            console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
            $(".letterImg").last().remove();
        }

        else if (e.which == 13){
            e.preventDefault();
            const result = document.getElementById("result")
            result.innerHTML += `<br/>` 
        }


    });

});

function deleteElement() {
    $(".inner").last().remove();
    $(".result").last().remove();
}




// const log = document.getElementById('container');

// window.addEventListener("keydown", function(event) {
//     if (event.defaultPrevented) {
//       return; // Do nothing if event already handled
//     }

// switch(event.code){
//     case "keyA":

// }

// })


// function logKey(e){
//     log.textContent += ` ${e.code}`;
// }

// window.addEventListener("keydown", checkKeyPress);
// // The parameters of the event listener are event, function to run, useCapture (optional).
// // This event listener runs checkKeyPress function when a key is pressed down
// // You can use keydown or keyup to check what key has been pressed or released
 
 
// // this function checks to see if the letter 'a' key has been pressed
// function checkKeyPress(key) {
//  if (key.keyCode == "65") {
//  alert("The 'a' letter key has been pressed.");
//  // 65 is the keycode that is returned when the 'a' letter key is pressed
//  // if you use keypress event instead of keydown/up then you must use ASCII code instead of keycode
//  }
// }