function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}

function case_Upper() {
    var text = "Here is some text.";
    var result = text.toUpperCase();
    document.getElementById("Upper").innerHTML = result;
}

function word_Position() {
    var text = "I have a cat and a dog.";
    var result = text.search("dog");
    document.getElementById("search").innerHTML = result;
}

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixedMethod() {
    var Y = 78.5926543;
    document.getElementById("Fixed").innerHTML = Y.toFixed(3);
}

function valueString() {
    var Z = "JavaScript Project 8";
    document.getElementById("String_Value").innerHTML = Z.valueOf();
}