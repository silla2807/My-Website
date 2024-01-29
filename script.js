// Script to handle PDF download
function animateSmiley() {
  var smiley = document.querySelector('.smiley');
  smiley.style.animation = 'none'; // Reset animation
  setTimeout(function() {
    smiley.style.animation = 'changeColor 1s infinite alternate'; // Restart animation after a short delay
  }, 50);
}
window.onload = function() {
  document.querySelector('downloadBtn').addEventListener('click', function() {
    window.open('Resume.pdf', '_blank');
  });
};


document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('show');
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var connectSection = document.getElementById("connect");
  var footer = document.querySelector("footer");

  function checkFooterVisibility() {
    var connectSectionRect = connectSection.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    // If the top of the "Let's Connect" section is visible on the screen
    if (connectSectionRect.top < windowHeight) {
      footer.style.display = "block"; // Show the footer
    } else {
      footer.style.display = "none"; // Hide the footer
    }
  }

  window.addEventListener("scroll", checkFooterVisibility); // Check visibility on scroll
  checkFooterVisibility(); // Check visibility initially
});
