//All the different thing I want it to animate
const words = [
  "Software Engineer",
  "web Developer",
  "Cybersecurity Analyst",
  "Data Scientist",
];
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 50; // speed per character
const delayBetweenWords = 2000; // pause between full words

const span = document.getElementById("animated-text");

function typeWord() {
  const currentWord = words[wordIndex];
  if (charIndex < currentWord.length) {
    span.textContent += currentWord.charAt(charIndex);
    charIndex++;
    setTimeout(typeWord, typingSpeed);
  } else {
    // Word fully typed — wait, then clear and go to next
    setTimeout(() => {
      span.textContent = "";
      charIndex = 0;
      wordIndex = (wordIndex + 1) % words.length;
      typeWord(); // Start next word
    }, delayBetweenWords);
  }
}

// Start typing animation
typeWord();

//Background
// script.js
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#1de9b6" },
    shape: { type: "circle" },
    opacity: {
      value: 0.2,
      random: true,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#1de9b6",
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

console.log("✅ index.js is running");
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM fully loaded");

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navLinksList = document.querySelectorAll("#navLinks a");

  console.log("🍔 hamburger:", hamburger);
  console.log("📎 navLinks:", navLinks);

  if (!hamburger || !navLinks) {
    console.error("❌ hamburger or navLinks not found in the DOM");
    return;
  }

  // Toggle menu on hamburger click
  hamburger.addEventListener("click", () => {
    console.log("👉 Hamburger clicked");
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  // Auto-close menu when clicking any nav link
  navLinksList.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("open");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !hamburger.contains(e.target) &&
      !navLinks.contains(e.target) &&
      navLinks.classList.contains("open")
    ) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("open");
    }
  });
});
document
  .getElementById("myform")
  .addEventListener("submit", async function (e) {
    e.preventDefault(); //stops from defaulting
    //getting the data from form
    const formData = {
      name: this.name.value,
      email: this.email.value,
      phoneNumber: this.phoneNumber.value,
      subject: this.subject.value,
      message: this.message.value,
    };

    try {
      const res = await fetch(
        "https://portfolio-backend-vk0m.onrender.com/submit-form",
        {
          method: "POST", //Request type
          headers: {
            //Defines the content type
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), //convert javascript object to json string
        }
      );
      //storing the result
      const result = await res.json();
      alert(result.message); //shows the message
      //clearing the form
      this.reset();
    } catch (err) {
      alert("Error: Form was not submitted");
      console.error(err);
    }
  });
