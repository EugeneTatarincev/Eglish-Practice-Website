export default function burgerOne() {
    const menuOne = document.querySelector('.menuOne');

    function addClassFunOne() {
        this.classList.toggle("clickMenuOne");
    }

    menuOne.addEventListener('click', addClassFunOne);
}