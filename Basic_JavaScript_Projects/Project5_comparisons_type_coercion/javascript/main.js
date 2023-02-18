document.write(typeof "Word");
document.write("10" + 5);

function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0;
}

function true_function() {
    document.getElementById("true").innerHTML = isNaN('This is a string');
}

function false_function() {
    document.getElementById("false").innerHTML = isNaN(007);
}

document.write(2E310);

document.write(-3E310);

document.write(10 > 2);

document.write(10 < 2);

console.log(2 + 2);

console.log(20 < 10);

document.write(20 == 20);

document.write(5 == 25);

X = 5;
Y = 5;
document.write(X === Y);

M = 13;
N = "Bob";
document.write(M === N);

P = 10;
Q = "Ten";
document.write(P === Q);

A = "Magnus";
B = "Opus";
document.write(A === B);

document.write(10 > 5 && 10 > 8);

document.write(10 > 5 && 10 > 12);

document.write(20 > 10 || 20 > 30);

document.write(20 > 30 || 30 > 40);

