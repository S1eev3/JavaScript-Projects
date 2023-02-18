document.write(typeof "Word");  //Typeof operator
document.write("10" + 5);       //Coercion expression

function my_Function() {        //Named my_Function
    document.getElementById("Test").innerHTML = 0 / 0;  //function to display NaN onclick
}

function true_function() {      //Named true_Function
    document.getElementById("true").innerHTML = isNaN('This is a string');  //Function to display true onclick
}

function false_function() {     //Named false_Function
    document.getElementById("false").innerHTML = isNaN(007);    //Function to display false onclick
}

document.write(2E310);      //display infinity

document.write(-3E310);     //display negative infinity

document.write(10 > 2);     //display true using >

document.write(10 < 2);     //display false using >

console.log(2 + 2);         //console log addition

console.log(20 < 10);       //console log boolean

document.write(20 == 20);   //display true using ==

document.write(5 == 25);    //display false using ==

X = 5;
Y = 5;
document.write(X === Y);    //true using ===

M = 13;
N = "Bob";
document.write(M === N);    //false using === with different values and types

P = 10;
Q = "Ten";
document.write(P === Q);    //false using == with same value different type

A = "Magnus";
B = "Opus";
document.write(A === B);    //false using same type different value

document.write(10 > 5 && 10 > 8);   //true using &&

document.write(10 > 5 && 10 > 12);  //false using &&

document.write(20 > 10 || 20 > 30); //true using ||

document.write(20 > 30 || 30 > 40); //false using ||

function not_Function() {   //Named function not_Function
    document.getElementById("NOT").innerHTML = !(20 > 10);  //display false on click using ! operator
}

function not_Function2() {  //Named function not_Function2
    document.getElementById("NOT2").innerHTML = !(30 < 10); //display true on click using ! operator
}