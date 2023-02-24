function countdown() {      //Named function
    var seconds = document.getElementById("seconds").value; //Declared variable seconds with value from user input

    function tick() {   //Named function
        seconds = seconds - 1;  //Alter seconds value
        timer.innerHTML = seconds;  //Display changing value of seconds
        var time = setTimeout(tick, 1000);  //Declared variable time with value using setTimeout and tick functions
        if (seconds == -1) {    //If statement to determine timer finished
            alert("Times up!"); //Alert when if becomes true
            clearTimeout(time); //clearTimeout method
            timer.innerHTML = "";   //clear timer display
        }
    }
    tick();     //tick function to countdown
}

let slideIndex = 1;     //Declared variable slideIndex and gave initial value
showSlides(slideIndex); //Named function showSlides with slideIndex parameters

//Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//Named and created all variables and statements for showSlides function
function showSlides(n) {
    let i;      
    let slides = document.getElementsByClassName("mySlides");   
    let dots = document.getElementsByClassName("dot");      
    if (n > slides.length) { slideIndex = 1 }   
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active"
}