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