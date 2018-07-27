// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


const submitButton = document.querySelector('.submit');
const canvas = document.querySelector('table');


function makeGrid() {
  submitButton.addEventListener('click', function () {
  createCanvas();
});
}

function reset () {
  document.querySelector('tbody').remove();
}

function createCanvas () {
  reset();
  const createbody = document.createElement('tbody');
  canvas.prepend(createbody);
  const ih = document.querySelector('#inputHeight').value;
  const iw = document.querySelector('#inputWidth').value;
  for (a = 1; a<=ih; a++) {
      const newRow = document.createElement("tr");
      canvas.firstElementChild.prepend(newRow);
      for (b = 1; b<=iw; b++) {
        const newColumn = document.createElement("td");
        newRow.appendChild(newColumn);
      };
    };
}



makeGrid();
