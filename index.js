let d1 = Math.floor(Math.random() * 6);
let d2 = Math.floor(Math.random() * 6);

dice(d1, d2);
decision(d1, d2);

function dice(p1, p2) {
  document.getElementById("im1").src = "/dice" + d1 + ".png";
  document.getElementById("im2").src = "/dice" + d2 + ".png";
}

function decision(d1, d2) {
  if (d1 > d2) {
    document.getElementById("stat").innerHTML = "⛳️Player 1 won!";
  } else if (d2 > d1) {
    document.getElementById("stat").innerHTML = "Player 2 won!⛳️";
  } else {
    document.getElementById("stat").innerHTML = "⛳️Draw⛳️";
  }
}
