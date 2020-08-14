export default function burger() {
    const menuTwo = document.querySelector('.menuTwo');

    function addClassFunTow() {
        this.classList.toggle("clickMenuTow");
    }

    menuTwo.addEventListener('click', addClassFunTow);
}