function Call_Loop() {      //I'm not sure if the counter isn't working properly or if it's just not showing every instance of "Happy Birthday!"
    var Age = document.getElementById("Age").value;
    var Birthday = "Happy Birthday!";
    Counter = 0;
    while (Counter < Age) {
        document.getElementById("Loop").innerHTML = Birthday;   //Also not sure if I need to add a <br> here to show each instance if the counter is working I tried a few ways and none worked
        Counter = Counter + 1;
    }
    document.getElementById("Presents").innerHTML = "Enjoy your presents!";
}

function NumberofLetters() {    //Named function
    var text = "Hello World";   //Declared variable text with value
    var length = text.length;   //Declared variable length with value using text.length method
    document.getElementById("Amount").innerHTML = length;   //Display value of length
}