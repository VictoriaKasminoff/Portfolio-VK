const navLinks = document.getElementById('nav-links');
const hamburgerIcon = document.getElementById('hamburger-id');

hamburgerIcon.addEventListener('click', function () {
    console.log('Clicked!')
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
})