var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice"+randomNumber1+".png");

var randDiceImage1 =  "./images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randDiceImage1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randDiceImage2 =  "./images/dice" + randomNumber2 + ".png";
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",randDiceImage2);

// document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice"+randomNumber2+".png");


if (randomNumber1 > randomNumber2) 
    document.querySelector("h1").textContent = "🚩 Player 1 Won";
else if (randomNumber1 < randomNumber2) 
    document.querySelector("h1").textContent = "Player 2 Won 🚩";
else   
    document.querySelector("h1").textContent = "Draw";