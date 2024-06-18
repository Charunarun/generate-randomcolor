function changeColor() {
    // Generate random RGB values
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // Construct the RGB color string
    var randomColor = `rgb(${red},${green},${blue})`;

    // Get the color box element
    var colorBox = document.getElementById('colorBox');

    // Apply the random color
    colorBox.style.backgroundColor = randomColor;
}