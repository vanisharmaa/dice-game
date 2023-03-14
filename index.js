var n1 = Math.floor(Math.random()*6) + 1;
var n2 = Math.floor(Math.random()*6) + 1;

if(n1 === 1){
  document.querySelector(".d1").setAttribute("src", "dice1.png");
}
else if(n1 === 2){
  document.querySelector(".d1").setAttribute("src", "dice2.png");
}
else if(n1 === 3){
  document.querySelector(".d1").setAttribute("src", "dice3.png");
}
else if(n1 === 4){
  document.querySelector(".d1").setAttribute("src", "dice4.png");
}
else if(n1 === 5){
  document.querySelector(".d1").setAttribute("src", "dice5.png");
}
else{
  document.querySelector(".d1").setAttribute("src", "dice6.png");
}

if(n2 === 1){
  document.querySelector(".d2").setAttribute("src", "dice1.png");
}
else if(n2 === 2){
  document.querySelector(".d2").setAttribute("src", "dice2.png");
}
else if(n2 === 3){
  document.querySelector(".d2").setAttribute("src", "dice3.png");
}
else if(n2 === 4){
  document.querySelector(".d2").setAttribute("src", "dice4.png");
}
else if(n2 === 5){
  document.querySelector(".d2").setAttribute("src", "dice5.png");
}
else{
  document.querySelector(".d2").setAttribute("src", "dice6.png");
}

if (n1 > n2){
  document.querySelector(".heading").textContent = "Player 1 Wins✨";
}else if(n2 > n1){
  document.querySelector(".heading").textContent = "Player 2 Wins✨";
}else{
  document.querySelector(".heading").textContent = "It's a tie🏳️";
}
