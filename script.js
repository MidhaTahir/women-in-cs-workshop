// script.js

// Function to change the text color of the paragraph when clicked
function changeTextColor() {
    var paragraph = document.querySelector('p');
    paragraph.style.color = 'blue';
}

// Attach the click event to the paragraph element
var paragraphElement = document.querySelector('p');
paragraphElement.addEventListener('click', changeTextColor);
