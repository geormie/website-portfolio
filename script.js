const aboutMeTab = document.querySelector('.about-me');
const skillTab = document.querySelector('.skill');
const contactTab = document.querySelector('.contact');
const aboutMeDescription = document.querySelector('.description.about-me');
const skillDescription = document.querySelector('.description.skill');
const contactDescription = document.querySelector('.description.contact');

aboutMeTab.addEventListener('click', () => {
  if (!aboutMeDescription.classList.contains('active')) {
    aboutMeDescription.classList.add('active');
    skillDescription.classList.remove('active');
    contactDescription.classList.remove('active');
  }
});

skillTab.addEventListener('click', () => {
  if (!skillDescription.classList.contains('active')) {
    skillDescription.classList.add('active');
    aboutMeDescription.classList.remove('active');
    contactDescription.classList.remove('active');
  }
});

contactTab.addEventListener('click', () => {
  if (!contactDescription.classList.contains('active')) {
    contactDescription.classList.add('active');
    aboutMeDescription.classList.remove('active');
    skillDescription.classList.remove('active');
  }
});
