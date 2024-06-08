

let hourWatch = document.getElementById("hour");
let minuteWatch = document.getElementById("minute");
let secondWatch = document.getElementById("second");


function displayTime() {

    let clock_el = document.createElement("div");
    clock_el.classList.add("clock");

    let num_el = document.createElement("div");
    num_el.classList.add("num");

    clock_el.appendChild(num_el);

    let hand_el = document.createElement("div");
    hand_el.classList.add("hand");

    num_el.appendChild(hand_el);



    let date = new Date();

    let second = date.getSeconds();

   let sRotation = 6*sec;
   let mRotation = 6*min;
   let hRotation = 30*hr + min/2;

    secondWatch.style.transform = `rotate(${sRotation}deg)`;
    minuteWatch.style.transform = `rotate(${mRotation}deg)`;
    hourWatch.style.transform = `rotate(${hRotation}deg)`;

}




var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start() {

    
setInterval(displayTime, 1000);

    timer = true;
    stopwatch();
    str.style.display = "none";
    sto.style.display = "block";
    res.style.display = "none";
}

function stop() {


    timer = false;
    res.style.display = "block";
    sto.style.display = "none";
    con.style.display = "block";
}

function continu() {
    timer = true;

    stopwatch();

    sto.style.display = "block";
    str.style.display = "none";
    res.style.display = "none";
    con.style.display = "none";
}

function reset() {
    timer = false;

    sto.style.display = "none";
    str.style.display = "block";
    res.style.display = "none";
    con.style.display = "none";

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}

function stopwatch() {

    if (timer == true) {
        count = count + 1;


        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        if (hr < 10) {
            hrString = "0" + hrString;
        }

        if (min < 10) {
            minString = "0" + minString;
        }

        if (sec < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;

        setTimeout("stopwatch()", 10);

    }

}