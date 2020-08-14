export default function theory(generalTrigger, arrayTrigger, content) {
    const mutual = document.querySelector(generalTrigger),
        members = document.querySelectorAll(arrayTrigger),
        info = document.querySelectorAll(content);

    const hideAll = () => {
        info.forEach((item) => {
            item.style.display = 'none';
        });
    };

    const showById = (i) => {
        info[i].style.display = 'block';
    }

    hideAll();
    showById(0);

    mutual.addEventListener('click', (e) => {
        
        members.forEach((item, i) => {
            if(e.target && (e.target == item || e.target == item.parentNode)) {
                e.preventDefault();
                hideAll();
                showById(i);
            }
        });
    });

}
