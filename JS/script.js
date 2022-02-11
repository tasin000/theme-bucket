const toggleButton = document.getElementsByClassName('toggle-bar')[0];
const navLinks = document.getElementsByClassName('none')[0];
const barsToCross = document.getElementsByClassName('fa-bars')[0];

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('flex');
    barsToCross.classList.toggle('fa-xmark');
})