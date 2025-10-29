// Mobile menu toggle
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// Animate skill bars on scroll
const skillSection = document.querySelector('.skills');
const skillBars = document.querySelectorAll('.progress');

window.addEventListener('scroll', () => {
  const sectionPos = skillSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if (sectionPos < screenPos) {
    skillBars.forEach(bar => {
      const width = bar.getAttribute('style').match(/width:\s*(\d+%)/)[1];
      bar.style.width = width;
    });
  }
});



// Fade-in effect for projects
const projectCards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.85;
    if (cardTop < triggerPoint) {
      card.classList.add('visible');
    }
  });
});


// Contact form submission alert
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you for contacting Innovify XR! We'll get back to you soon.");
  contactForm.reset();
});


// Animate partners section on scroll
const partnerBoxes = document.querySelectorAll('.partner-box');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 1.2;

  partnerBoxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show-partner');
    }
  });
});


// ===== Counter Animation =====
const counters = document.querySelectorAll('.counter');
let counterStarted = false;

window.addEventListener('scroll', () => {
  const section = document.querySelector('.achievements');
  const sectionTop = section.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight / 1.2;

  if (sectionTop < triggerPoint && !counterStarted) {
    counterStarted = true;
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const speed = 50; // Lower = faster
      let count = 0;

      const updateCount = () => {
        if (count < target) {
          count += Math.ceil(target / speed);
          counter.textContent = count + '+';
          setTimeout(updateCount, 30);
        } else {
          counter.textContent = target + '+';
        }
      };
      updateCount();
    });
  }
});



// Fade-in animation on scroll for blog cards
const blogCards = document.querySelectorAll(".blog-card");

window.addEventListener("scroll", () => {
  blogCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});
