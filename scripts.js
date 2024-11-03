* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Kanit', sans-serif;
    line-height: 1.6;
}

header {
    background: #333;
    color: #fff;
    padding: 20px;
}

.hero {
    text-align: center;
    padding: 50px 20px;
}

.hero h1 {
    font-size: 2.5rem;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu {
    list-style: none;
    display: flex;
}

.menu li {
    margin: 0 15px;
}

.menu a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
}

.menu a:hover {
    color: #ff6347; /* Change to a contrasting color on hover */
}

.hamburger {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

main {
    padding: 20px;
}

section {
    margin: 40px 0;
    padding: 20px;
    background: #f4f4f4;
    border-radius: 5px;
    text-align: center;
}

section img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
}

@media (max-width: 768px) {
    .menu {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 70px;
        left: 0;
        background: #333;
        width: 100%;
        z-index: 10;
    }

    .menu li {
        margin: 10px 0;
        text-align: center;
    }

    .hamburger {
        display: block;
    }

    .menu.active {
        display: flex;
    }
}
.hero {
    text-align: center;
    padding: 50px 20px;
    background: url('hero-background.jpg') no-repeat center center/cover; /* Optional background image */
    color: #fff; /* Text color */
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 15px;
}

.cta-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 1.1rem;
    color: #fff;
    background-color: #ff6347; /* Button color */
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #e55347; /* Darker shade on hover */
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Kanit', sans-serif;
    line-height: 1.6;
    background-color: #000; /* Black background */
    color: #e0e0e0; /* Ice grey text color */
}

header {
    background: #111; /* Darker grey for the header */
    color: #fff;
    padding: 20px;
}

.hero {
    text-align: center;
    padding: 50px 20px;
    background: #1a1a1a; /* Dark grey background for hero section */
}

.hero h1 {
    font-size: 2.5rem;
    color: #e0e0e0; /* Ice grey text */
}

.hero p {
    font-size: 1.2rem;
    color: #ccc; /* Light grey for paragraph text */
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu {
    list-style: none;
    display: flex;
}

.menu li {
    margin: 0 15px;
}

.menu a {
    color: #e0e0e0; /* Ice grey links */
    text-decoration: none;
    transition: color 0.3s ease;
}

.menu a:hover {
    color: #ff6347; /* Highlight color on hover */
}

.hamburger {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #e0e0e0; /* Ice grey for hamburger menu */
}

main {
    padding: 20px;
}

section {
    margin: 40px 0;
    padding: 20px;
    background: #222; /* Slightly lighter grey for sections */
    border-radius: 5px;
    text-align: center;
    color: #e0e0e0; /* Ice grey text */
}

section img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
}

/* Call to Action Button */
.cta-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 1.1rem;
    color: #fff; /* White text for button */
    background-color: #ff6347; /* Button color */
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #e55347; /* Darker shade on hover */
}

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
    nav {
        flex-direction: column;
        align-items: flex-start; /* Align items to the left */
    }

    .menu {
        display: none; /* Initially hide the menu */
        flex-direction: column; /* Stack items vertically */
        position: absolute;
        top: 70px; /* Adjust position as needed */
        left: 0;
        background: #111; /* Dark grey background for menu */
        width: 100%;
        z-index: 10;
    }

    .menu li {
        margin: 10px 0;
        text-align: left; /* Align text to the left */
    }

    .hamburger {
        display: block; /* Show hamburger icon */
        color: #e0e0e0; /* Hamburger icon color */
    }

    .menu.active {
        display: flex; /* Show menu when active */
    }

    .hero h1 {
        font-size: 1.8rem; /* Reduce font size for mobile */
    }

    .hero p {
        font-size: 1rem; /* Adjust paragraph font size */
    }
}

@media (max-width: 480px) {
    .hero h1 {
        font-size: 1.5rem; /* Further reduce font size for very small screens */
    }

    .hero p {
        font-size: 0.9rem; /* Further adjust paragraph font size */
    }

    section {
        padding: 15px; /* Reduce padding for sections */
    }

    section h2 {
        font-size: 1.5rem; /* Adjust section heading size */
    }

    section p {
        font-size: 0.9rem; /* Adjust paragraph font size in sections */
    }
}

/* Add your previous CSS here */

/* Hamburger menu styling */
.hamburger {
    display: none; /* Initially hide hamburger icon */
    font-size: 1.5rem;
    cursor: pointer;
    color: #e0e0e0; /* Ice grey for hamburger menu */
}

.menu {
    display: flex; /* Flex display for desktop */
}

/* Responsive styling */
@media (max-width: 768px) {
    .menu {
        display: none; /* Initially hide the menu */
        flex-direction: column; /* Stack items vertically */
        position: absolute;
        top: 70px; /* Adjust position as needed */
        left: 0;
        background: #111; /* Dark grey background for menu */
        width: 100%;
        z-index: 10;
    }

    .hamburger {
        display: block; /* Show hamburger icon */
    }

    .menu.active {
        display: flex; /* Show menu when active */
    }
}
body {
    font-family: 'Kanit', sans-serif;
    margin: 0;
    background-color: #111; /* Dark background for the theme */
    color: #e0e0e0; /* Ice grey text */
}

header {
    position: relative;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
}

.hamburger {
    display: none; /* Hidden by default */
    font-size: 1.5rem;
    cursor: pointer;
    color: #e0e0e0; /* Ice grey for hamburger menu */
}

.menu {
    display: flex; /* Flex display for desktop */
}

.menu li {
    list-style: none;
    margin: 0 15px;
}

.menu a {
    color: #e0e0e0; /* Ice grey text */
    text-decoration: none;
}

.cta-button {
    display: inline-block; /* Makes the button an inline block element */
    padding: 10px 20px; /* Padding around the text */
    font-size: 1.2rem; /* Font size for the button text */
    color: #fff; /* Text color */
    background-color: #ff6347; /* Button background color */
    text-decoration: none; /* Remove underline from the link */
    border-radius: 5px; /* Rounded corners */
    transition: background-color 0.3s ease; /* Smooth transition for hover effect */
    margin-top: 20px; /* Space above the button */
}

.cta-button:hover {
    background-color: #e55347; /* Darker shade on hover */
}

/* Responsive styling */
@media (max-width: 768px) {
    .menu {
        display: none; /* Initially hide the menu */
        flex-direction: column; /* Stack items vertically */
        position: absolute;
        top: 70px; /* Adjust position as needed */
        left: 0;
        background: #111; /* Dark grey background for menu */
        width: 100%;
        z-index: 10;
    }

    .hamburger {
        display: block; /* Show hamburger icon */
    }

    .menu.active {
        display: flex; /* Show menu when active */
    }
}
/* Basic Styles */
body {
    font-family: 'Kanit', sans-serif;
    margin: 0;
    background-color: #111;
    color: #e0e0e0;
}

header {
    position: relative;
    padding: 10px;
    background-color: #111;
}

.hamburger {
    font-size: 1.5rem;
    cursor: pointer;
    display: none; /* Hidden by default on desktop */
    color: #e0e0e0;
}

.menu {
    display: flex; /* Show menu as flex by default */
    transition: max-height 0.3s ease; /* Smooth transition for dropdown */
}

.menu li {
    list-style: none;
    margin: 0 15px;
}

.menu a {
    color: #e0e0e0;
    text-decoration: none;
}

/* Dropdown Animation (initially hidden for mobile) */
@media (max-width: 768px) {
    .hamburger {
        display: block; /* Show hamburger icon on smaller screens */
    }
    
    .menu {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        max-height: 0; /* Initially hidden */
        background-color: #111;
        width: 100%;
        position: absolute;
        top: 50px;
        left: 0;
    }

    .menu.active {
        max-height: 500px; /* Set max-height high enough to display the entire menu */
    }
}
/* Basic Styles */
body {
    font-family: 'Kanit', sans-serif;
    margin: 0;
    background-color: #111;
    color: #e0e0e0;
}

header {
    position: relative;
    padding: 10px;
    background-color: #111;
}

.hamburger {
    font-size: 1.5rem;
    cursor: pointer;
    color: #e0e0e0;
    position: absolute;
    top: 15px;
    left: 15px;
    z-index: 2;
}

/* Hidden off-screen menu */
.menu {
    list-style: none;
    padding: 0;
    margin: 0;
    position: fixed;
    top: 0;
    left: -250px; /* Start off-screen */
    width: 250px;
    height: 100%;
    background-color: #333;
    color: #e0e0e0;
    overflow: hidden;
    transition: left 0.3s ease; /* Smooth transition for slide effect */
    z-index: 1;
}

.menu li {
    padding: 15px;
}

.menu a {
    color: #e0e0e0;
    text-decoration: none;
}

/* Active class to slide the menu in */
.menu.active {
    left: 0; /* Slide in from the left */
}
.menu {
    position: fixed;
    top: 0;
    left: -250px; /* Off-screen initially */
    width: 250px;
    height: 100%;
    background-color: #333;
    color: #e0e0e0;
    transition: left 0.3s ease;
}

.menu.active {
    left: 0; /* Slide in the menu */
}
/* Basic Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #111;
    color: #e0e0e0;
}

/* Hamburger Icon */
.hamburger {
    font-size: 1.5rem;
    cursor: pointer;
    color: #e0e0e0;
    padding: 10px;
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 2;
}

/* Menu Styles */
.menu {
    list-style: none;
    padding: 0;
    margin: 0;
    position: fixed;
    top: 0;
    left: -250px; /* Start off-screen */
    width: 250px;
    height: 100%;
    background-color: #333;
    color: #e0e0e0;
    overflow: hidden;
    transition: left 0.3s ease; /* Smooth transition for slide effect */
    z-index: 1;
}

.menu li {
    padding: 15px;
}

.menu a {
    color: #e0e0e0;
    text-decoration: none;
}

/* Active class to slide the menu in */
.menu.active {
    left: 0; /* Slide in from the left */
}
.menu {
    position: fixed;
    top: 0;
    left: -250px; /* Off-screen initially */
    width: 250px;
    height: 100%;
    background-color: #333;
    color: #e0e0e0;
    transition: left 0.3s ease; /* Smooth transition for slide effect */
}

.menu.active {
    left: 0; /* Slide in the menu */
}
.hamburger {
    font-size: 36px; /* Adjust size as needed */
    cursor: pointer;
    color: #e0e0e0; /* Set color as desired */
    padding: 10px;
}
