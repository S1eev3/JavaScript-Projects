function Call_Loop() {      //I'm not sure if the counter isn't working properly or if it's just not showing every instance of "Happy Birthday!"
    var Age = document.getElementById("Age").value;
    var Birthday = "Happy Birthday!";
    Counter = 0;
    while (Counter < Age) {
        document.getElementById("Loop").innerHTML = Birthday;
        Counter = Counter + 1;
    }
    document.getElementById("Presents").innerHTML = "Enjoy your presents!";
}