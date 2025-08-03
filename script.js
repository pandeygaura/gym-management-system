// Mobile navigation toggle (if you're using responsive nav)
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Contact form submission (basic simulation)
  const contactForm = document.querySelector("form[action='#']");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        alert("Thank you for contacting us, " + name + "!");
        contactForm.reset();
      } else {
        alert("Please fill in all the fields.");
      }
    });
  }

  // Register form (basic validation)
  const registerForm = document.querySelector("form[action='dashboard.html']");
  if (registerForm && registerForm.querySelector("#fullname")) {
    registerForm.addEventListener("submit", function (e) {
      const name = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const password = document.getElementById("password").value;

      if (!name || !email || !phone || !password) {
        e.preventDefault();
        alert("Please fill in all registration fields.");
      } else if (!/^\d{10}$/.test(phone)) {
        e.preventDefault();
        alert("Please enter a valid 10-digit phone number.");
      }
    });
  }
});
