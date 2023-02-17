function addition_Function() {  //named addition function
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML ="2 + 2 = " + addition; //displays addition solution when element is hovered
}

function subtraction_Function() {   //named subtraction function
    var subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + subtraction;   //displays subtraction solution when element is clicked
}

function multiplication() { //named multiplication function
    var simple_Math = 6 * 8;
    document.getElementById("Operators").innerHTML = "6 x 8 = " + simple_Math;  //displays multiplication solution when hovered 
}

function division() {   //named division function
    var simple_Math = 48 / 6;
    document.getElementById("Operators").innerHTML = "48 divided by 6 = " + simple_Math;    //displays division solution when clicked
}

function more_Math() {  //named more_Math function for longer equation
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("equation").innerHTML = "1 plus 2, multiplied by 10,\
     divided in half and then subtracted by 5 equals " + simple_Math;   //displays long equation solution when hovered
}

function modulus_Operator() {   //named modulus_Operator function
    var simple_Math = 25 % 6;
    document.getElementById("remainder").innerHTML = "When you divide 25\
    by 6 you have a remainder of: " + simple_Math;  //displays modulus solution when hovered
}

function negation_Operator() {  //named negation_Operator function
    var x = 10;
    document.getElementById("remainder").innerHTML = 
    "The opposite of 10 would be: " + -x;   //displays negation operator solution when clicked
}

function increment() {  //named increment function
    var X = 5;
    X++;
    document.getElementById("increment").innerHTML = 
    "This is 5 incremented: " + X;  //displays solution of increment when hovered
}

function decrement() {  //named decrement function
    var Y = 8;
    Y--;
    document.getElementById("increment").innerHTML = 
    "This is 8 decremented: " + Y;  //displays solution of decrement when clicked
}

window.alert(Math.random() * 100);  //alert box to display a random number between 0 and 100
