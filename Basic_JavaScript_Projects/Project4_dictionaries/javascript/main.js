function myDictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Yellow",
        Breed: "Labrador",
        Name: "Cooper",
        Age: 4,
        Sound: "Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Name;
}
