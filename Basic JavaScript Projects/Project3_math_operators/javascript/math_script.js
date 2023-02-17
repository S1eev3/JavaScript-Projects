function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML ="2 + 2 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Operators").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Operators").innerHTML = "48 divided by 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("equation").innerHTML = "1 plus 2, multiplied by 10,\
     divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("remainder").innerHTML = "When you divide 25\
    by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("remainder").innerHTML = 
    "The opposite of 10 would be: " + -x;
}