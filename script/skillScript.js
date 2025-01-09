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
const seeMoreBtn = document.querySelector('button');
const hiddenSkill = document.querySelectorAll('#hidden-skill');
seeMoreBtn.addEventListener('click', () => {
    hiddenSkill.forEach(skill => {
        skill.style.display = skill.style.display === 'none' || skill.style.display === '' ? 'flex' : 'none';
    });
    if (seeMoreBtn.textContent === 'See More') {
        seeMoreBtn.textContent = 'Show Less';
    } else {
        seeMoreBtn.textContent = 'See More';
    }
});
const seeMoreButton = document.querySelector('.see-more button');
const hiddenSkills = document.querySelectorAll('.skill-detail[id^="hiddendetail"]');
seeMoreButton.addEventListener('click', () => {
    const areHiddenSkillsVisible = hiddenSkills[0].style.display !== 'none';
    hiddenSkills.forEach(skill => {
        skill.style.display = areHiddenSkillsVisible ? 'none' : 'block';
    });
    seeMoreButton.textContent = areHiddenSkillsVisible ? 'See More' : 'Show Less';
});
