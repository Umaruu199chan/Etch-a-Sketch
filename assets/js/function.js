// Create and add the grid container to the document
const container = document.querySelector('.container');
const numberOfDivs = 256;

// Create the "Click Me!" button
const btn = document.createElement("button");
btn.className = "btn";
btn.textContent = "Click Me!";
btn.style.padding = "20px";
btn.style.backgroundColor = "lightblue";
btn.style.alignContent = "center";

document.body.appendChild(btn);

// Add event listener to the button
btn.addEventListener("click", createNewGrid);

// Function to create a new grid based on user input
function createNewGrid() {
    // Ask the user for the number of squares per side
    const squaresPerSide = parseInt(prompt("Enter the number of squares per side for the new grid:"), 10);

    // If the input is not a valid number or is less than 1, show an alert and exit
    if (isNaN(squaresPerSide) || squaresPerSide < 1) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    // Get the container for the grid (we will use the same container div)
    const gridContainer = container;

    // Remove the existing grid if any
    gridContainer.innerHTML = '';

    // Define the total width of the grid (960px as specified)
    const gridWidth = 960;

    // Calculate the size of each square based on the number of squares per side
    const squareSize = gridWidth / squaresPerSide;

    // Set the grid's width and height
    gridContainer.style.width = `${gridWidth}px`;
    gridContainer.style.height = `${gridWidth}px`; // make it a square grid

    // Use CSS Grid to organize the squares neatly
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${squaresPerSide}, ${squareSize}px)`; // Create columns dynamically
    gridContainer.style.gridTemplateRows = `repeat(${squaresPerSide}, ${squareSize}px)`; // Create rows dynamically

    // Create the new grid by adding square elements
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.border = '1px solid #ccc'; // optional, for visibility
        square.style.transition = 'background-color 0.3s ease';

        // Add mouse enter and leave event listeners to change background color
        square.addEventListener('mouseenter', function() {
            square.style.backgroundColor = 'green';
        });
        square.addEventListener('mouseleave', function() {
            square.style.backgroundColor = 'white';
        });

        gridContainer.appendChild(square);
    }
}
