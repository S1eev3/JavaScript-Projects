var X = 10;     //Declared global variable
function Add_numbers_1() {  //Named function
    document.getElementById("Number_one").innerHTML = (20 + X + "<br>");    //function using glabal variable
}
function Add_numbers_2() {  //Named function
    document.getElementById("Number_two").innerHTML = (X + 100);    //Function using global variable
}


function Subtract_numbers_1() {     //Named Function
    var Y = 50;     //Declared local variable
    document.getElementById("Number_three").innerHTML = (Y - 10);   //Function using local variable
}
function Subtract_numbers_2() {     //Named Function
    document.getElementById("Number_four").innerHTML = (Y - 20);    //Function attempting to use local variable
}
function Subtract_numbers_2() {     //Named function
    console.log(Y - 20);    //Function to display error to console log
}

function get_Date() {       //Named Function
    if (new Date().getHours() < 18) {   //If time is earlier than 6pm
        document.getElementById("Greeting").innerHTML = "How are you today?"; //Display if statement is true
    }
}

function good_Day() {       //Named function
    if (new Date().getHours() < 12) {       //If time is before 12pm
        document.getElementById("Greeting2").innerHTML = "Good Morning!"; //Display if true
    }
    else (document.getElementById("Greeting2").innerHTML = "Good Evening!");    //Display if later than 12pm
}               //should do else if for afternoon also but only needed if statement for this assignment

function Age_Function() {       //Named function
    Age = document.getElementById("Age").value;     //User input for value of Age variable
    if (Age >= 25) {
        Rental = "You are able to rent this car.";  //Value of "Rental" if 25 or older
    }
    else {
        Rental = "You are unable to rent this car.";    //Value of "Rental" if younger than 25
    }
    document.getElementById("How_old_are_you?").innerHTML = Rental; //Display value of "Rental" based on if else statment
}

function Time_Function() {      //Named function
    var Time = new Date().getHours();   //Use getHours for value of Time variable
    var Reply;  //Declare Reply variable
    if (Time < 12 == Time > 0) {    //If statement to determine morning
        Reply = "It is morning time!";  //Value of Reply variable if true
    }
    else if (Time >= 12 == Time < 18) {     //Else if it is not morning statement
        Reply = "It is afternoon.";         //Value of Reply if true
    }
    else {
        Reply = "It is evening time.";      //Value of Reply if neither if nor else if are true
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //Dispaly value of Reply based on if/else/elif
}