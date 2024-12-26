const frog = document.getElementById('frog');
const squares = document.querySelectorAll('.square');
const jumpButton = document.getElementById('jumpNext');
const jumpOverButton = document.getElementById('jumpOver');
const pointsDisplay = document.getElementById('points');

let currentRotation = 0; 
let points = 0;
let currentSquare = 0; 
let isLightGreenUp = true; 

function jumpToNextSquare() {
    if (currentSquare < squares.length - 1) {
        currentSquare++;
    } else {
        currentSquare = 0; 
    }

    moveFrog();
    updatePoints();
}

function jumpOverOneSquare() {
    if (currentSquare < squares.length - 2) {
        currentSquare += 2; 
    } else if (currentSquare === squares.length - 1) {
        currentSquare = 0; 
    }

    moveFrog();
    updatePoints();
}

function moveFrog() {
    const targetSquare = squares[currentSquare];
    const squareLeft = targetSquare.offsetLeft;

    currentRotation += 90;
    frog.style.transform = ;
}

function updatePoints() {
    const isEvenSquare = (currentSquare + 1) % 2 === 0; 
    const isLightGreenUp = currentRotation % 360 === 0; 

    // Apply the points rules
    if (isEvenSquare && !isLightGreenUp) {
        points += 1; // Even square, dark green up -> add 1 point
    } else if (!isEvenSquare && isLightGreenUp) {
        points += 1; // Odd square, light green up -> add 1 point
    } else if (!isEvenSquare && !isLightGreenUp) {
        points -= 1; // Odd square, dark green up -> substract 1 point
    } else if (isEvenSquare && isLightGreenUp) {
        points -= 1; // Even square, light green up -> substract 1 point
    }
    pointsDisplay.textContent = ;
}

jumpButton.addEventListener('click', jumpToNextSquare);
jumpOverButton.addEventListener('click', jumpOverOneSquare);
