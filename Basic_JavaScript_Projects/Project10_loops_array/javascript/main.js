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

function array_Function() {
    var Video_Game = [];
    Video_Game[0] = "Valorant";
    Video_Game[1] = "Hogwarts Legacy";
    Video_Game[2] = "Escape From Tarkov";
    Video_Game[3] = "Destiny 2";
    Video_Game[4] = "Smite";
    document.getElementById("Array").innerHTML =
        Video_Game[0] + " is one of the games my friends and I are currently playing."
}

function constant_function() {
    const snowboard = { make: "Capita", name: "TFA", size: "157" }
    snowboard.flex = 7;
    snowboard.shape = "reverse camber/flat kicker";
    snowboard.bindings = "Union Force"
    document.getElementById("Constant").innerHTML = "My favorite snowboard to ride is my " +
        snowboard.make + " " + snowboard.name + " which has a " + snowboard.shape +
        " style shape, and I currently use " + snowboard.bindings + " bindings.";
}

function let_function() {
    let X = 10;
    let sum = (X * 10);
    document.getElementById("Let").innerHTML = sum; 
}

var x = multiply_function(5, 7);
document.getElementById("Return").innerHTML = x;

function multiply_function(a, b) {
    return a * b;
}

let vehicle = {
    make: "Jeep ",
    model: "Cherokee ",
    year: "2001 ",
    color: "green ",
    description: function () {
        return "The vehicle is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Vehicle_Object").innerHTML = vehicle.description();


function breakFunction() {
    var text = "";
    var i = 0;
    while (i < 10) {
        text += "<br>The number is " + i;
        i++
        if (i === 5) { break; }
    }
    document.getElementById("break").innerHTML = text;
}

function continueFunction() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 5) { continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("Continue").innerHTML = text
}
