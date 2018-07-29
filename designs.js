
// button to record height and width selection
const submitButton = document.querySelector('.submit');

// variable to hold canvas for pixelart
const canvas = document.querySelector('table');

// function start the pixelart maker
function makeGrid() {
  createPens();
  submitButton.addEventListener('click', function () {
  createCanvas();
});
}

// creates the canvas / clears canvas if pixelart already exists

function createCanvas () {
  document.querySelector('tbody').remove();
  const createbody = document.createElement('tbody');
  canvas.prepend(createbody);
  const ih = document.querySelector('#inputHeight').value;
  const iw = document.querySelector('#inputWidth').value;
  // iterate through table to create the requested matrix
  for (row = 1; row<=ih; row++) {
      const newRow = document.createElement("tr");
      canvas.firstElementChild.prepend(newRow);
      for (col = 1; col<=iw; col++) {
        const newColumn = document.createElement("td");
        newRow.appendChild(newColumn);
      };
    };
}

// creates the eventlisteners for coloring and color removal (double click reverts square to white)

function createPens () {
  canvas.addEventListener('click', function (event) {
      current = event.target;
      if (event.target.tagName === 'TD') {
        current.style.backgroundColor = colorPicker.value;
      }
    });
  canvas.addEventListener('dblclick', function (event) {
      current = event.target;
      if (event.target.tagName === 'TD') {
        current.style.backgroundColor = "white";
      }
    });
}

makeGrid();
