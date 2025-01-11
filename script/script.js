const contactBtn = document.getElementById('contactBtn');
const talkBtn = document.getElementById('talk');
contactBtn.addEventListener('click', function () {
    window.location.href = './src/Contact.html';
});
talkBtn.addEventListener('click', function () {
    window.location.href = 'https://t.me/in1879';
});


const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', (e) => {
    nav.classList.toggle('nav-active');
    e.stopPropagation();  
});

document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('nav-active');
    }
});
const videoContainer = document.querySelector('.video-container');
const rightArrow = document.querySelector('.right-arrow');
let slideIndex = 0;
const totalSlides = document.querySelectorAll('.video').length;
rightArrow.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= totalSlides - 1) {
        slideIndex = 0;
    }
    videoContainer.style.transform = `translateX(-${slideIndex * 50}%)`;
});

const toggleButton = document.getElementById('toggle-button');
const hiddenProjects = document.querySelectorAll('.project.hidden');
toggleButton.addEventListener('click', () => {
    hiddenProjects.forEach(project => {
        project.style.display = project.style.display === 'block' ? 'none' : 'block';
    });
    toggleButton.textContent = toggleButton.textContent === 'See More' ? 'Show Less' : 'See More';
});
const seeMoreBtn = document.querySelector('button');
const hiddenSkills = document.querySelectorAll('.hidden-skill');
seeMoreBtn.addEventListener('click', () => {
    hiddenSkills.forEach(skill => {
        skill.style.display = skill.style.display === 'none' || skill.style.display === '' ? 'block' : 'none';
    });
    if (seeMoreBtn.textContent === 'See More') {
        seeMoreBtn.textContent = 'Show Less';
    } else {
        seeMoreBtn.textContent = 'See More';
    }
});




