function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
// Get the menu and hamburger elements
const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');

// Function to toggle the menu
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close the menu when clicking outside
window.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active');
    }
});
