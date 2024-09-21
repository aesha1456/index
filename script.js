// Create floating particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
  
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Randomize particle size and position
      particle.style.width = `${Math.random() * 10 + 7}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      
      // Set random animation delay
      particle.style.animationDelay = `${Math.random() * 8}s`;
      particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
  
      particlesContainer.appendChild(particle);
    }
  }
  
  // Initialize particles on load
  window.onload = createParticles;
  const audio = new Audio('a.mp3'); // Add your background music file here
audio.loop = true;

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    document.getElementById('audioButton').textContent = '🔔';
  } else {
    audio.pause();
    document.getElementById('audioButton').textContent = '🔕';
  }
}
function toggleDropdown() {
  var menu = document.getElementById("gameMenu");
  var dropdownBox = document.querySelector(".dropdown-box");
  
  // Toggle active class for animation
  menu.classList.toggle("active");
  dropdownBox.classList.toggle("active");
}

  