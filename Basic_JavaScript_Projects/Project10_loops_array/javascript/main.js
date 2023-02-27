function Call_Loop() {      //Named function
    var Age = document.getElementById("Age").value; //Declared variable Age with value from user input
    var Birthday = "";  //Declared variable Birthday
    Counter = 0;    //Declared counter with initial value of 0
    while (Counter < Age) { //while loop using counter with user defined value for age
        Birthday += "<br>Happy Birthday!</br>"; //String value for Birthday variable
        Counter++   //Increase counter by 1 for each iteration of the loop
    }
    document.getElementById("Loop").innerHTML = Birthday + "<br>Enjoy you presents!</br>"; //Display all iteration of the loop with additional string when completed
}

function NumberofLetters() {    //Named function    
    var text = "Hello World";   //Declared variable text with value
    var length = text.length;   //Declared variable length with value using text.length method
    document.getElementById("Amount").innerHTML = length;   //Display value of length
}

function loopFunction() {   //Named function
    var text = "";  //Declared variable text with value TBD
    var i = 0;  //Variable i for counter with initial value 0
    while (i < 10) {    //while loop with condition until counter is less than 10
        text += "<br>The number is " + i;   //String value for variable text
        i++                 //Increae counter by 1 with each iteration
    }
    document.getElementById("counting").innerHTML = text;       //Display concatenated value of text with each iteration
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];   //Declared array with 7 elements
var Content = "";   //Declared variable content with value TBD
var Y;  //Declared variable Y with no value
function for_loop() {   //Named function
    for (Y = 0; Y < Instruments.length; Y++) {  //for loop giving Y initial value, condition using Y, increment Y with each iteration
        Content += Instruments[Y] + "<br>"; //giving variable content value of next index elements with each iteration
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //Display value of content with each iteration
}

function array_Function() { //Named function
    var Video_Game = [];    //Declared variable with array value
    Video_Game[0] = "Valorant"; //Value of element at position 0
    Video_Game[1] = "Hogwarts Legacy"; //Value of element at position 1
    Video_Game[2] = "Escape From Tarkov";   //Value of element at position 2
    Video_Game[3] = "Destiny 2";    //Value of element at posititon 3
    Video_Game[4] = "Smite";    //Value of element at position 4
    document.getElementById("Array").innerHTML =
        Video_Game[0] + " is one of the games my friends and I are currently playing."
}                       //Display of concantenated string using element at position 0 of the array

function constant_function() {      //Named function
    const snowboard = { make: "Capita", name: "TFA", size: "157" }  //Declared constant with 3 properties
    snowboard.flex = 7; //New property of constant with value
    snowboard.shape = "reverse camber/flat kicker"; //New property with value
    snowboard.bindings = "Union Force"  //New property with value
    document.getElementById("Constant").innerHTML = "My favorite snowboard to ride is my " +
        snowboard.make + " " + snowboard.name + " which has a " + snowboard.shape +
        " style shape, and I currently use " + snowboard.bindings + " bindings.";   //Display concatenated string with values from constant properties
}

function let_function() {   //Named function
    let X = 10;     //Declared variable X with value using let
    let sum = (X * 10); //Declared variable sum with value using let
    document.getElementById("Let").innerHTML = sum; //Display value of sum
}

var x = multiply_function(5, 7);    //Declared variable X with value from multiply_function()
document.getElementById("Return").innerHTML = x;    //Display value of x

function multiply_function(a, b) {  //Named function with parameters
    return a * b;   //Instructions for arguments passed using return
}

let vehicle = { //Declared object vehicle using let
    make: "Jeep ",  //Properties with values
    model: "Cherokee ", 
    year: "2001 ",      
    color: "green ",     
    description: function () {  //Property with value from return
        return "The vehicle is a " + this.year + this.color + this.make + this.model;   //Concatenated string using return
    }
};
document.getElementById("Vehicle_Object").innerHTML = vehicle.description();    //Display value of description function


function breakFunction() {  //Named function
    var text = "";  //Declared variable with value TBD
    var i = 0;  //Declared variable i with initial value 0 as counter
    while (i < 10) {    //While loop with condition
        text += "<br>The number is " + i;   //Concatenated string giving text variable value
        i++ //Increment i with each iteration
        if (i === 5) { break; } //if statement with condition and break statement
    }
    document.getElementById("break").innerHTML = text;  //Display value of text
}

function continueFunction() {   //Named function
    let text = "";  //Declared variable text with value TBD
    for (let i = 0; i < 10; i++) {  //for loop declaring i with value for counter, condition, and increment counter
        if (i === 5) { continue; }  //if statemenent with condition and continue statement
        text += "The number is " + i + "<br>";  //Concatenated string giving text variable value
    }
    document.getElementById("Continue").innerHTML = text    //Display value of text
}
