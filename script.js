// Dynamic Text Effect
const dynamicText = document.querySelector('.dynamic-text');
const fonts = ['Arial', 'Georgia', 'Courier New', 'Verdana', 'Times New Roman'];
let currentFontIndex = 0;

setInterval(() => {
  dynamicText.style.fontFamily = fonts[currentFontIndex];
  currentFontIndex = (currentFontIndex + 1) % fonts.length;
}, 500); // Every 2.5 seconds

// Smooth Scrolling for Navigation
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute('href').slice(1); // Get the target section ID
    const targetSection = document.getElementById(targetId); // Find the section

    targetSection.scrollIntoView({
      behavior: 'smooth', // Smooth scroll effect
      block: 'start' // Align to the start of the section
    });
  });
});
