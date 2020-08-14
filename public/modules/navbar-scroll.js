// USING THIS MODULE JUST ADJUST TOP IN THE CLASS AND THAT"S IT
export default function navbarScroll(nav) {
    const navbar = document.querySelector(nav);
    let prevScrollpos = window.pageYOffset;

    window.addEventListener('scroll', () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            navbar.classList.remove('out');
        } else {
            navbar.classList.add('out');
        }
        prevScrollpos = currentScrollPos;
    });
}