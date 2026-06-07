function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.style.color = link.getAttribute('href') === '#' + current ? 'var(--aws-orange)' : 'rgba(255,255,255,0.75)';
  });
});
