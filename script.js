// Welcome message
console.log("Welcome to Somide Toluwalase's Portfolio!");
// 1. TYPING EFFECT
const roles = ["Azure Cloud Engineer", "Windows Server Admin", "Linux Enthusiast"];
let i = 0, j = 0, isDeleting = false;
const typingElement = document.getElementById('typing');

function type() {
  const currentRole = roles[i];
  if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, j--);
  } else {
    typingElement.textContent = currentRole.substring(0, j++);
  }

  if (!isDeleting && j === currentRole.length) {
    isDeleting = true; setTimeout(type, 2000);
  } else if (isDeleting && j === 0) {
    isDeleting = false; i = (i + 1) % roles.length; setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting? 50 : 100);
  }
}
if(typingElement) type();

// 2. SCROLL ANIMATION - FADE IN
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.card, section h2,.timeline-item');
hiddenElements.forEach((el) => observer.observe(el));

// 3. ACTIVE NAV LINK ON SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
