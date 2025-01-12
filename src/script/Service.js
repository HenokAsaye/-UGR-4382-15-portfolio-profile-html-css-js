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
const seeMoreButton = document.querySelector('.see-more button');
const hiddenServices = document.querySelectorAll('[id^="hidden-service"]');
hiddenServices.forEach(service => {
    service.style.display = 'none';
});
seeMoreButton.addEventListener('click', () => {
    const areServicesVisible = hiddenServices[0].style.display === 'block';
    hiddenServices.forEach(service => {
        service.style.display = areServicesVisible ? 'none' : 'block';
    });
    seeMoreButton.textContent = areServicesVisible ? 'See More' : 'Show Less';
});
