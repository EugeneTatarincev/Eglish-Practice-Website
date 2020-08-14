export default function footerAnimation(trigger, back, clas) {
    const footerTrigger = document.querySelector(trigger),
        footerBack = document.querySelector(back);

        footerTrigger.addEventListener('click', () => {
            footerBack.classList.toggle(clas);
        });

}