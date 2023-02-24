function full_Sentence() {      //Named function
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";       //Declared 4 variables to concatenate
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;  //Display concatenated sentence
}

function slice_Method() {       //Named function
    var Sentence = "All work and no play makes Johnny a dull boy."; //Declared Sentence variable
    var Section = Sentence.slice(27, 33);   //Declared section variable using slice method
    document.getElementById("Slice").innerHTML = Section;   //Display result of slice method
}

function case_Upper() {     //Named function
    var text = "Here is some text.";    //Declared text variable
    var result = text.toUpperCase();    //Declared result variable using value from toUpperCase method
    document.getElementById("Upper").innerHTML = result;    //Display value of result
}

function word_Position() {      //Named function
    var text = "I have a cat and a dog.";   //Declared text variable
    var result = text.search("dog");        //Declared result variable using value from search method
    document.getElementById("search").innerHTML = result;   //Display value of result
}

function string_Method() {      //Named function
    var X = 182;        //Declared variable X and gave value
    document.getElementById("Numbers_to_string").innerHTML = X.toString();  //Display value of toString method
}

function precision_Method() {       //Named function
    var X = 12938.3012987376112;    //Declared variable X and gave value
    document.getElementById("Precision").innerHTML = X.toPrecision(10); //Use toPrecision method on X and display result
}

function fixedMethod() {        //Named function
    var Y = 78.5926543;     //Declared variable Y and gave value
    document.getElementById("Fixed").innerHTML = Y.toFixed(3);  //Use toFixed method on Y and display result
}

function valueString() {        //Named function
    var Z = "JavaScript Project 8";     //Declared variable Z and gave value
    document.getElementById("String_Value").innerHTML = Z.valueOf();    //Use valueOf method on Z and display result
}