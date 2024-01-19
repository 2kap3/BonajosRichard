// scripts.js

function showSections() {
    // Show the sections with the specified IDs
    document.getElementById('about').style.display = 'block';
    document.getElementById('resume').style.display = 'block';
    document.getElementById('portfolio').style.display = 'block';
    document.getElementById('blog').style.display = 'block';
    document.getElementById('contact').style.display = 'block';
    
    // Hide the welcome section and display the scroll message
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('scrollMessage').style.display = 'block';

    // Show the back button
    document.getElementById('backButton').style.display = 'block';
}

function goBack() {
    // Hide all sections except the welcome section
    document.getElementById('about').style.display = 'none';
    document.getElementById('resume').style.display = 'none';
    document.getElementById('portfolio').style.display = 'none';
    document.getElementById('blog').style.display = 'none';
    document.getElementById('contact').style.display = 'none';

    // Show the welcome section and hide the scroll message
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('scrollMessage').style.display = 'none';

    // Hide the back button
    document.getElementById('backButton').style.display = 'none';
}