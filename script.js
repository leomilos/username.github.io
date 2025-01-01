// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add hover effect to profile photo
  const profilePhoto = document.querySelector('.profile-photo');
  if (profilePhoto) {
    profilePhoto.addEventListener('mouseover', () => {
      profilePhoto.style.transform = 'scale(1.1)';
      profilePhoto.style.transition = 'transform 0.3s ease';
    });
  
    profilePhoto.addEventListener('mouseout', () => {
      profilePhoto.style.transform = 'scale(1)';
    });
  }
  
  // Toggle dark mode
  const darkModeToggle = document.createElement('button');
  darkModeToggle.textContent = 'Toggle Dark Mode';
  darkModeToggle.style.position = 'fixed';
  darkModeToggle.style.bottom = '20px';
  darkModeToggle.style.right = '20px';
  darkModeToggle.style.padding = '10px 15px';
  darkModeToggle.style.backgroundColor = '#007BFF';
  darkModeToggle.style.color = '#fff';
  darkModeToggle.style.border = 'none';
  darkModeToggle.style.borderRadius = '5px';
  darkModeToggle.style.cursor = 'pointer';
  document.body.appendChild(darkModeToggle);
  
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Dark mode styles
  document.head.insertAdjacentHTML('beforeend', `
    <style>
      .dark-mode {
        background-color: #121212;
        color: #ffffff;
      }
      .dark-mode a {
        color: #BB86FC;
      }
    </style>
  `);
  