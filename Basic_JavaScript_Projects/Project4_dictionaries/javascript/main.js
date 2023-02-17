function myDictionary() {   //named function myDictionary
    var Animal = {          //Started dictionary for variable Animal
        Species: "Dog",
        Color: "Yellow",
        Breed: "Labrador",
        Name: "Cooper",
        Age: 4,
        Sound: "Bark!"      //Last KVP for Animal Dictionary
    };
    delete Animal.Sound;    //Delete sound KVP
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //Attempt to use deleted KVP in HTML event
}
