function toggleFilter(el) {
    el.classList.toggle("open");
    const content = el.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}
 