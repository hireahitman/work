// Get the menu and hamburger elements
const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');

// Function to toggle the menu visibility
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
