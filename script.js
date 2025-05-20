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
  