export default function menu (toggle, menu, classToggle, marginLinks, linksToggle, scrollHidden) {
    const sideToggle = document.querySelector(toggle),
        sideMenu = document.querySelector(menu),
        sideLinks = document.querySelector(marginLinks);

    sideToggle.addEventListener('click', (e)=> {
        if(e.target) {
            sideMenu.classList.toggle(classToggle);
            sideLinks.classList.toggle(linksToggle);
            document.body.classList.toggle(scrollHidden);
        }
    });
}