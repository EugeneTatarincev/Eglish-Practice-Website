// import active from "./modules/active.js";
import burger from "./modules/burger-icon.js";
import menu from "./modules/side-menu.js";
import footerAnimation from "./modules/footer-animation.js";
import navbarScroll from "./modules/navbar-scroll.js";
import backend from './script.js'


window.addEventListener('DOMContentLoaded', () => {
    // burger menu stuff 
    burger();
    //side menu stuff
    menu('.menuTwo', '.menu', 'toggle', '.side-menu', 'side-menu-toggle', 'scrollHidden');
    //footer animation part 
    footerAnimation('.btn-google', '.p-back', 'p-toggle');
    // NAVBAR SCROLL
    navbarScroll('.navbar');
    //INTERRACTING WITH SERVER
    backend()
})
