
    var myText = "Hi, my name is Nicholas."
    var myArray = myText.split("");
    var loopTimer;


    function frameLooper() {
        if(myArray.length > 0) {
            document.getElementById("type-text").innerHTML += myArray.shift();
        } else {
            clearTimeout(loopTimer);
            return false;
        }
        loopTimer = setTimeout('frameLooper()',70);
    }

    function fadeInText(HTMLelement){
        let element = document.getElementById(HTMLelement);
        let opacity = 0;
        let fadeIn = setInterval(() => {
            if (opacity >= 1 ){
                clearInterval(fadeIn);
            }
            element.style.opacity = opacity;
            opacity += 0.01;
        }, 10);
    }

