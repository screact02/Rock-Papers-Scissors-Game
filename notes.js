setTimeout(() => {
  var x = document.createElement("BUTTON");
  var t = document.createTextNode("Play Again?");
  x.appendChild(t);
  document.body.appendChild(x);
  x.addEventListener("click", function () {
    window.location.reload();
  });
}, 1000);

const verdictMessage = document.getElementById("verdictMessage");
verdictMessage.remove();

if (
  ((rockHasBeenClicked = true) && elementImageSource === 0) ||
  ((paperHasBeenClicked = true) && elementImageSource === 1) ||
  ((scissorsHasBeenClicked = true) && elementImageSource === 2)
) {
  document.getElementById("selectionMessage").style = "display:block";
  document.getElementById("selectionMessage").innerText = "Its a draw!";
  document.getElementById("drawScore").innerText = 1;
}

// setTimeout(() => {
//   var x = document.createElement("BUTTON");
//   var t = document.createTextNode("Start a New Game?");
//   x.appendChild(t);
//   document.body.appendChild(x);
//   x.addEventListener("click", function () {
//     window.location.reload();
//   });
// }, 1000);

// function reloadPage() {
//   window.location.reload();
// }



