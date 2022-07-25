/*=============== CHANGE BACKGROUND HEADER ===============*/
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('windows-scrolled'), window.scrollY > 0;
})