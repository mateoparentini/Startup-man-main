function toggleFilter(el) {
    el.classList.toggle("open");
    const content = el.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}
 const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });