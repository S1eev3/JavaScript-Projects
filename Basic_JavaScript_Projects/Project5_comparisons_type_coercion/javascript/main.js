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