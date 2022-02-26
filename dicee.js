 // ranodm number for dice 1
 var randomnumber1 = Math.floor((Math.random() * 6)) + 1;
 //attribute value
 var diceimage1 = "./images/dice" + randomnumber1 + ".png";
 var imgatt1 = document.querySelectorAll("img")[0];
 imgatt1.setAttribute("src", diceimage1);

 // random number for dice 2

 var randomnumber2 = Math.floor(Math.random() * 6) + 1;
 var diceimage2 = "./images/dice" + randomnumber2 + ".png";
 var imgatt2 = document.querySelectorAll("img")[1];
 imgatt2.setAttribute("src", diceimage2);
 if (randomnumber1 === randomnumber2) {
  document.querySelector("h1").textContent = "Draw!";
 }
 else if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 wins";
 }
 else {
  document.querySelector("h1").textContent = "Player 2 wins 🚩";
 }

