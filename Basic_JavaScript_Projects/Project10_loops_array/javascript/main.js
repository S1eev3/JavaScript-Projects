function Call_Loop() {
    var Age = document.getElementById("Age").value;
    var Birthday = "";
    Counter = 0;
    while (Counter < Age) {
        Birthday += "<br>Happy Birthday!</br>";
        Counter++
    }
    document.getElementById("Loop").innerHTML = Birthday + "<br>Enjoy you presents!</br>";
}

function NumberofLetters() {    //Named function
    var text = "Hello World";   //Declared variable text with value
    var length = text.length;   //Declared variable length with value using text.length method
    document.getElementById("Amount").innerHTML = length;   //Display value of length
}

function loopFunction() {
    var text = "";
    var i = 0;
    while (i < 10) {
        text += "<br>The number is " + i;
        i++
    }
    document.getElementById("counting").innerHTML = text;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}