// Get the menu and hamburger elements
const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');

// Function to toggle the menu visibility
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close the menu when clicking outside of it
window.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active');
    }
});
