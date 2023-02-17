function Time_Stamp() {     //Defined and named function Time_Stamp
    document.getElementById("date demo").innerHTML = Date();    //When called modifies date demo element by displaying current date and time
}

function myFunction() {     //Defined and named myFunction
    var sentence = "I am learning";     //Defined variable sentence
    sentence += " a lot from this book!";   //Continued define sentence with concatenated string
    document.getElementById("Concatenate").innerHTML = sentence;    //Modifies concatenate element using myFunction
}