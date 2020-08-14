import burgerOne from "./modules/responsive-burger.js";
import theory from "./modules/theory.js";
import responsiveMenu from "./modules/responsive-menu.js";

// BURGER ICON 5

burgerOne();

//LEFT SIDE MENU FOR DESCTOP

theory('.quiz-menu', '.quiz-unit', '.theory-info');

//MENU FOR MOBILES

responsiveMenu('.menuOne', '.five-wrapper', '.menu-ul-responsive', 'toggleFive', 'toggleMenu', 'toggleButton', 'scrollHidden');

//RESPONSIVE MENU LINKS

theory('.menu-responsive', '.menu-responsive-unit', '.theory-info');



