const canvas = document.getElementById("canvasForUser");
const canvasForComputer = document.getElementById("canvasForComputer");
const computerElementSelection = document.getElementById(
  "computerElementSelection"
);

const elementImages = [
  "./images/rock.png",
  "./images/paper.png",
  "./images/scissors.png",
];
var elementImageSource;
var rockHasBeenClicked = false;
var paperHasBeenClicked = false;
var scissorsHasBeenClicked = false;
var forDraw = false;
const rockSelection = rock.addEventListener("click", function () {
  document.getElementById("selectionMessage").style = "display:none";
  document.getElementById("userElementSelection").innerText = "User chose rock";
  const context = canvas.getContext("2d");
  let userImage = new Image();
  userImage.src = "./images/rock.png";
  context.drawImage(userImage, 0, 0, canvas.width, canvas.height);
  setTimeout(displayComputerSelection, 1000);
  setTimeout(displayVerdictForRockSelection, 2000);
  setTimeout(removeVerdictForRockSelection, 3000);
  setTimeout(() => {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, 3000);
  rockHasBeenClicked = true;
});

const paperSelection = paper.addEventListener("click", function () {
  document.getElementById("userElementSelection").innerText =
    "User chose paper";
  const context = canvas.getContext("2d");
  let userImage = new Image();
  userImage.src = "./images/paper.png";
  context.drawImage(userImage, 0, 0, canvas.width, canvas.height);
  setTimeout(displayComputerSelection, 1000);
  setTimeout(displayVerdictForPaperSelection, 2000);
  setTimeout(removeVerdictForPaperSelection, 4000);
  setTimeout(() => {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, 4000);

  paperHasBeenClicked = true;
});

const scissorsSelection = scissors.addEventListener("click", function () {
  document.getElementById("userElementSelection").innerText =
    "User chose scissors";
  const context = canvas.getContext("2d");
  let userImage = new Image();
  userImage.src = "./images/scissors.png";
  context.drawImage(userImage, 0, 0, canvas.width, canvas.height);
  setTimeout(displayComputerSelection, 1000);
  setTimeout(displayVerdictForScissorsSelection, 2000);
  setTimeout(removeVerdictForScissorsSelection, 4000);
  setTimeout(() => {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

  }, 4000);

  scissorsHasBeenClicked = true;
});

let userSelection = [rockSelection, paperSelection, scissorsSelection];

function displayComputerSelection() {
  elementImageSource = Math.floor(Math.random() * elementImages.length);
  const contextCanvas = canvasForComputer.getContext("2d");
  let computerImage = new Image();
  computerImage.src = elementImages[elementImageSource];
  contextCanvas.drawImage(
    computerImage,
    0,
    0,
    canvasForComputer.width,
    canvasForComputer.height
  );
  setTimeout(() => {
    contextCanvas.clearRect(
      0,
      0,
      canvasForComputer.width,
      canvasForComputer.height
    );
  }, 2000);

  if (elementImageSource === 0) {
    document.getElementById("computerElementSelection").innerText =
      "Computer chose rock";
  } else if (elementImageSource === 1) {
    document.getElementById("computerElementSelection").innerText =
      "Computer chose paper";
  } else if (elementImageSource === 2) {
    document.getElementById("computerElementSelection").innerText =
      "Computer chose scissors";
  }
}

function reloadPage() {
  window.location.reload();
}

var userCounter = 0;
var computerCounter = 0;
var drawCounter = 0;
function displayVerdictForRockSelection() {
  if (rockHasBeenClicked === false) {
    return;
  }
   document.getElementById("selectionMessage").style = "display:block";
  if (elementImageSource === 1) {
    document.getElementById("selectionMessage").style = "margin-top:0";
    document.getElementById("selectionMessage").innerText = "You lost";
    computerCounter+=1;
    document.getElementById("computerScore").innerText = computerCounter;
    return;
  }  
  if (elementImageSource === 2) {
    document.getElementById("selectionMessage").style = "margin-bottom:0";
    document.getElementById("selectionMessage").innerText = "You won";
    userCounter+=1;
    document.getElementById("userScore").innerText = userCounter;
    return;
  } 
  if (elementImageSource === 0) {
    document.getElementById("selectionMessage").style = "margin-bottom:0";
    document.getElementById("selectionMessage").innerText = "Its a draw!";
   drawCounter+=1;
    document.getElementById("drawScore").innerText = drawCounter;
    return;
  }
}
function displayVerdictForPaperSelection() {
  if (paperHasBeenClicked === false) {
    return;
  }
  document.getElementById("selectionMessage").style = "display:block";
  if (elementImageSource === 0) {
    document.getElementById("selectionMessage").style = "margin-bottom:0";
    document.getElementById("selectionMessage").innerText = "You won!";
    userCounter+=1;
    document.getElementById("userScore").innerText = userCounter;
    return;
  } 
  if (elementImageSource === 2) {
    document.getElementById("selectionMessage").style = "margin-bottom:0";
    document.getElementById("selectionMessage").innerText = "You lost";
    computerCounter+=1;
    document.getElementById("computerScore").innerText = computerCounter;
    return;
  } 
  if (elementImageSource === 1) {
    document.getElementById("selectionMessage").style = "margin-bottom:0";
    document.getElementById("selectionMessage").innerText = "Its a draw";
   drawCounter+=1;
        document.getElementById("drawScore").innerText = drawCounter;
        return;
  }
}
function displayVerdictForScissorsSelection() {
   if (paperHasBeenClicked === false) {
    return;
  }
    document.getElementById("selectionMessage").style = "display:block";
    document.getElementById("selectionMessage").style = "margin-bottom:0";
  if (elementImageSource === 0) {
    document.getElementById("selectionMessage").innerText = "You lost";
    computerCounter+=1;
    document.getElementById("computerScore").innerText = computerCounter;
    return;
  } 
  if (elementImageSource === 1) {
    document.getElementById("selectionMessage").innerText = "You won!";
    userCounter+=1;
    document.getElementById("userScore").innerText = userCounter;
    return;
  }
  if (elementImageSource === 2) {
    document.getElementById("selectionMessage").innerText = "Its a draw";
    drawCounter+=1;
    document.getElementById("drawScore").innerText = drawCounter;
    return;
  }
}

function removeVerdictForRockSelection() {
  document.getElementById("selectionMessage").style = "display:none";
}
function removeVerdictForPaperSelection() {
  document.getElementById("selectionMessage").style = "display:none";
}
function removeVerdictForScissorsSelection() {
  document.getElementById("selectionMessage").style = "display:none";
}


