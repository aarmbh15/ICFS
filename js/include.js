// Simple HTML Include Script (works everywhere, no build tools needed)
function includeHTML() {
  const elements = document.querySelectorAll('[include-html]');
  elements.forEach(el => {
    const file = el.getAttribute('include-html');
    if (file) {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          el.innerHTML = data;
          el.removeAttribute('include-html');
          // Re-run if there are nested includes
          includeHTML();
          // Re-activate mobile menu script after header is loaded
          if (file.includes('header.html')) {
            document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
              document.getElementById('mobile-menu').classList.toggle('hidden');
            });
          }
        })
        .catch(err => console.warn('Failed to load:', file));
    }
  });
}

// Run after page loads
document.addEventListener('DOMContentLoaded', includeHTML);
