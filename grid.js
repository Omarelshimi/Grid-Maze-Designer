// Grid Functions

function createGridArray() {
    /// Create and return a grid array
    return [[0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0, 1, 1, 0, 0, 0] ];
}

function createDivGrid(grid) {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            // Create a div for each element in 2D grid
            let divEl = document.createElement("div");

            // Add appropriate class to each divEl
            if(grid[row][col] == 1) {
                divEl.classList.add("grey");
            }

            // Add an event listener to divEl
            divEl.addEventListener("click", cellClicked);

            // Add div to container
            document.getElementById('container').append(divEl);
        }
    }
}

function cellClicked(event) {
    // Set the color of the clicked cell

    // Get value of color select element
    let color = document.getElementById("cell-color").value;

     event.target.classList = ""; // Empty cell class list
     if (color == "grey" ) {
         event.target.classList.add("grey");
     }
}