function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Age_Verification() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufatured in " + Erik.Vehicle_Year;
}

function Student(First, Last, Age, Load, Location) {
    this.Student_First = FirstName;
    this.Student_Last = LastName;
    this.Student_Age = Age;
    this.Student_Load = Load;
    this.Student_Location = Location;
}

var Jason = new Student("Jason", "Smith", 22, "Full-Time", "Campus");
var Stephanie = new Student("Stephanie", "Hurtz", 19, "Full-Time", "Remote");
var Paige = new Student("Paige", "Lowry", 22, "Part-Time", "Remote");
var Kevin = new Student("Kevin", "Holmes", 20, "Part-Time", "Campus");

function StudentInfo() {
    document.getElementById("New_and_This").innerHTML = 
        Stephanie.FirstName + Stephanie.LastName + " is a " + Stephanie.Age + " year old "
        Stephanie.Load + " student studying " + Stephanie.Location + ".";
}