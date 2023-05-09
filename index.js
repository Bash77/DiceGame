// First randomdice.
var randomNumber1 = Math.floor(Math.random() * 6 + 1); // random 1 - 6

var randomdiceImage = "dice" + randomNumber1 + ".png";// random dice png1 - png6

var randomImageSource = "images/" + randomdiceImage; // image source

var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src", randomImageSource);

 // second randomdice.
 var randomNumber2 = Math.floor(Math.random() * 6 + 1);

 var randomdiceImage = "dice" + randomNumber2 + ".png"; 

 var randomImageSource = "images/" + randomdiceImage;

 var image2 = document.querySelectorAll("img")[1];

 image2.setAttribute("src", randomImageSource);

 // use if statement to generate the title.
 if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩player 1 wins!";
 }else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins!🚩";
 }
 else{
    document.querySelector("h1").innerHTML = "draw!";
 }