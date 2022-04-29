var entryCount = 0;
var displayCount = 0;

$(document).ready(function () {

    //capture key presses
    $(document).on("keypress", function (e) {
        e.preventDefault();
        entryCount++;
        displayCount++;

        //translate unicode to characters 
        //https://unicodelookup.com/       
         
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
            deleteElement();
        }
    });

});

function createElement(k) {
    var elem = $('#cursor');
    if (k == "a" || k == "A") { 
        elem.before('<span class="inner">A</span>'); 
        
        var eng = $('#result');
        eng.before('<span class="result">A</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "b" || k == "B") { 
        elem.before('<span class="inner">B</span>'); 
        
        var eng = $('#result');
        eng.before('<span class="result">B</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "c" || k == "C") { 
        elem.before('<span class="inner">C</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">C</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "d" || k == "D") { 
        elem.before('<span class="inner">D</span>'); 

        var eng = $('#result');
        eng.before('<span class="result">D</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
}
    if (k == "e" || k == "E") { 
        elem.before('<span class="inner">E</span>');
    
        var eng = $('#result');
        eng.before('<span class="result">E</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "f" || k == "F") { 
        elem.before('<span class="inner">F</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">F</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "g" || k == "G") { 
        elem.before('<span class="inner">G</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">G</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight); 
    }
    if (k == "h" || k == "H") { 
        elem.before('<span class="inner">H</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">H</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "i" || k == "I") { 
        elem.before('<span class="inner">I</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">I</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "j" || k == "J") { 
        elem.before('<span class="inner">J</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">J</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "k" || k == "K") { 
        elem.before('<span class="inner">K</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">K</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "l" || k == "L") { 
        elem.before('<span class="inner">L</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">L</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "m" || k == "M") { 
        elem.before('<span class="inner">M</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">M</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "n" || k == "N") { 
        elem.before('<span class="inner">N</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">N</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "o" || k == "O") { 
        elem.before('<span class="inner">O</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">O</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "p" || k == "P") { 
        elem.before('<span class="inner">P</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">P</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "q" || k == "Q") { 
        elem.before('<span class="inner">Q</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">Q</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "r" || k == "R") { 
        elem.before('<span class="inner">R</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">R</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "s" || k == "S") { 
        elem.before('<span class="inner">S</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">S</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "t" || k == "T") { 
        elem.before('<span class="inner">T</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">T</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "u" || k == "U") { 
        elem.before('<span class="inner">U</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">U</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "v" || k == "V") { 
        elem.before('<span class="inner">V</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">V</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "w" || k == "W") { 
        elem.before('<span class="inner">W</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">W</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "x" || k == "X") { 
        elem.before('<span class="inner">X</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">X</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "y" || k == "Y") { 
        elem.before('<span class="inner">Y</span>');
    
        var eng = $('#result');
        eng.before('<span class="result">Y</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == "z" || k == "Z") { 
        elem.before('<span class="inner">Z</span>'); 
    
        var eng = $('#result');
        eng.before('<span class="result">Z</span>');
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    if (k == " ") { 
        elem.before('<br>');
        
        var eng = $('#result');
        eng.before('<br>');

        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    };
}

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