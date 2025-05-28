function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('show');
}

  
  // Optional: Close sidebar on link click
  document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('sidebar').classList.remove('show');
    });
  });
  
 const footer = document.querySelector("footer");
const stickyParts = document.querySelectorAll(".sticky-part");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stickyParts.forEach(el => {
          el.style.opacity = '0';
          el.style.pointerEvents = 'none';
        });
      } else {
        stickyParts.forEach(el => {
          el.style.opacity = '1';
          el.style.pointerEvents = 'auto';
        });
      }
    });
  },
  {
    root: null,
    threshold: 0.1
  }
);

observer.observe(footer);
 