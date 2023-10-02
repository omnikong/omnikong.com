// Getting the elements
const logo = document.getElementById('logo-container');
const logoImg = document.getElementById('logo-img');
const backButton = document.getElementById('back');
const contactButton = document.getElementById('contact');
const projectsButton = document.getElementById('projects');
const awardsButton = document.getElementById('awards');

// Content containers for each button
const contactContent = document.getElementById('contact-content');
const projectsContent = document.getElementById('projects-content');
const awardsContent = document.getElementById('awards-content');

// Function to hide buttons and show content
function showContent(button, content) {
    // Hide buttons
    contactButton.style.display = 'none';
    portfolioButton.style.display = 'none';
    awardsButton.style.display = 'none';

    // Move and resize logo
    logo.style.position = 'absolute';
    logo.style.top = '10px';
    logo.style.width = '100%';
    logo.style.textAlign = 'center';
    logoImg.style.width = '100px';

    // Show content
    content.style.display = 'block';

    // Show back button
    backButton.style.display = 'block';
}

// Function to revert to original layout
function revertLayout() {
    console.log("Logo was clicked. Reverting layout...");

    // Show buttons
    contactButton.style.display = 'block';
    portfolioButton.style.display = 'block';
    awardsButton.style.display = 'block';

    // Revert logo to original size and position
    logo.style.position = '';
    logo.style.top = '';
    logo.style.left = '';
    logo.style.transform = '';
    logo.style.width = '';

    // Hide content
    contactContent.style.display = 'none';
    portfolioContent.style.display = 'none';
    awardsContent.style.display = 'none';

    // Hide back button
    backButton.style.display = 'none';
}

// Adding event listeners to buttons
contactButton.addEventListener('click', () => {
    console.log("Contact button clicked");  // Debugging message
    showContent(contactButton, contactContent);
});
projectsButton.addEventListener('click', () => {
    console.log("Projects button clicked");  // Debugging message
    showContent(projectsButton, projectsContent);
});
awardsButton.addEventListener('click', () => {
    console.log("Awards button clicked");  // Debugging message
    showContent(awardsButton, awardsContent);
});

// Adding event listener to back button
backButton.addEventListener('click', revertLayout);

console.log("Event listeners attached");  // Debugging message
