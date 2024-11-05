document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
  
    let currentSection = '';
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  });
  
  document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
  
      // Update active class immediately on click
      document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
  

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading, .education-history-box, .html, .skills, .judul", {
  origin: "top",
});
ScrollReveal().reveal(
  ".home-img, .project-container, .Achievements-box, .contact form, .container",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Student", "Programmer", "Novelist", "Editor"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});

// DM Via WhatsApp

document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const fullName = encodeURIComponent(
      document.getElementById("fullName").value
    );
    const message = encodeURIComponent(
      document.getElementById("message").value
    );

    const phoneNumber = "6285669676247";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=Full%20Name:%20${fullName}%0AMessage:%20${message}`;

    window.open(whatsappURL, "_blank");
  });