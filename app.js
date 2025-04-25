
function showPage(pageId) {
    const pages = document.querySelectorAll('[id$="Page"]');
    pages.forEach(p => p.style.display = 'none');
    const page = document.getElementById(pageId);
    if (page) page.style.display = 'block';
}
