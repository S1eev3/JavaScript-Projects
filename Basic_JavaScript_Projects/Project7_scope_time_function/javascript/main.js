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