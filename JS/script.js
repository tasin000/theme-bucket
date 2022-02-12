// toggle bar for responsive nagivation menu
const toggleButton = document.getElementsByClassName('toggle-bar')[0];
const navLinks = document.getElementsByClassName('none')[0];
const barsToCross = document.getElementsByClassName('fa-bars')[0];

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('flex');
    barsToCross.classList.toggle('fa-xmark');
})

// message submission on contact page
const submitBtn = document.getElementsByTagName('button')[0];
const submitMsg = document.getElementsByClassName('hidden')[0];
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

function submitForm(e){
    submitMsg.classList.remove('hidden');
    nameInput.value = '';
    emailInput.value = '';
    subjectInput.value = '';
    messageInput.value = '';
    event.preventDefault();
}

// submit another response in contact page
const anotherResponse = document.getElementsByClassName('another-one')[0];

anotherResponse.addEventListener('click', () => {
    window.location.replace('../src/contact-us.html');
})