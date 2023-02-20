function Ride_Function() {  //Named Function Ride_Function
    var Height, Can_ride;   //Named Variables
    Height = document.getElementById("Height").value;   //Value from user input
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; //ternary Operator to dispaly rider eligibility
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Age_Verification() {   //Named function Age_Verification
    var Age, Can_vote;          //Named variables
    Age = document.getElementById("Age").value;     //Value from user input
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough"; //Ternary operator to display voter eligibility
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {    //Named class Vehicle
    this.Vehicle_Make = Make;   //Make constructor
    this.Vehicle_Model = Model; //Model constructor
    this.Vehicle_Year = Year;   //Year constructor
    this.Vehicle_Color = Color; //Color constructor
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  //Object Jack with properties
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //Object Emily with properties
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");   //Object Erik with properties
function myFunction() {     //Named myFunction
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufatured in " + Erik.Vehicle_Year; //Display properties of object Erik
}

function Student(First, Last, Age, Load, Location) {    //Named class Student
    this.Student_First = First;     //First name constructor
    this.Student_Last = Last;       //Last name constructor
    this.Student_Age = Age;         //Age constructor
    this.Student_Load = Load;       //Course load constructor
    this.Student_Location = Location;   //Location type constructor
}

var Jason = new Student("Jason", "Smith", 22, "Full-Time", "on Campus");    //Object Jason with properties
var Stephanie = new Student("Stephanie", "Hurtz", 19, "Full-Time", "Remote");   //Object Stephanie with properties
var Paige = new Student("Paige", "Lowry", 22, "Part-Time", "Remote");       //Object Paige with properties
var Kevin = new Student("Kevin", "Holmes", 20, "Part-Time", " on Campus");  //Object Kevin with properties
function studentInfo() {                        //Named function studentInfo
    document.getElementById("New_and_This").innerHTML =
        Stephanie.Student_First + " " + Stephanie.Student_Last + " is a " + Stephanie.Student_Age +
        " year old " + Stephanie.Student_Load + " student studying " + Stephanie.Student_Location + ".";    //Display properties of object Stephanie
}

function count_Function() {     //Named function count_Function
    document.getElementById("Nested_Function").innerHTML = Count(); //Display solution of Count function
    function Count(){   //Named function Count
        var Starting_point = 9; //Declared variable and gave initial value
        function Plus_one() {Starting_point += 1;}  //Named function Plus_one to alter value of Starting_point
    Plus_one();
    return Starting_point;  //returns new Starting_point value
    }
}