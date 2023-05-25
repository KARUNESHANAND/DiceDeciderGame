var randomNumber1 = Math.ceil(Math.random()*6);
var imageRandomSelector1 = ("./images/dice"+randomNumber1+".png");

document.querySelector(".dice .img1").getAttribute("src");
document.querySelector(".dice .img1").setAttribute("src",imageRandomSelector1);
var randomNumber2 = Math.ceil(Math.random()*6);
var imageRandomSelector2 = ("./images/dice"+randomNumber2+".png");
document.querySelector(".dice .img2").getAttribute("src");
document.querySelector(".dice .img2").setAttribute("src",imageRandomSelector2);

if(randomNumber1 > randomNumber2){
    var player1Wins = document.firstElementChild.lastChild.firstElementChild.firstElementChild;
    player1Wins.innerHTML = "🚩Player 1 Wins!"; 
    }
else if(randomNumber2 > randomNumber1){
        var player2Wins = document.firstElementChild.lastChild.firstElementChild.firstElementChild;
        player2Wins.innerHTML = "Player 2 Wins!🚩";
    }
else if(randomNumber1 === randomNumber2){
        var Tie = document.firstElementChild.lastChild.firstElementChild.firstElementChild;
        Tie.innerHTML = "It's a Tie.🏳️";
    }
