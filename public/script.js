export default function backend() {
    const here = document.querySelector('.quiz')
    const mutual = document.querySelector('.quiz-menu')

    //DELETE THE PREVIOUS QUIZ
    const wash = () => {
        while (here.firstChild) {
            here.removeChild(here.firstChild)
        }
    }

    //GET HTML QUIZ AND EMBED IT INTO THE PAGE
    async function getInfo(url) {
        try {
            const response = await fetch(url)
            const res = await response.text()
            here.innerHTML = res
        } catch (e) {
            console.log(e)
        }
    }

    //MAKE DOUBLE ARRAY OUT OF AN ARRAY
    const makeDoubleArray = (inputs) => {
        const doubleArray = []
        let tempArray = []
        let k = 0
        for (let i = 0; i < inputs.length; i++) {
            k++
            tempArray.push(inputs[i])
            if (k == 3) {
                doubleArray.push(tempArray)
                k = 0
                tempArray = []
            }
        }

        return doubleArray
    }


    //MAKE THE RIGHT ANSWERS GREEN AND THE WRONG RED AND ALSO WRITE HOW MUCH ONE DID RIGHT
    const outline = (answers) => {
        const inputs = document.querySelectorAll('.quiz-body input')
        const form = document.querySelector('.quiz-body')
        const above = document.querySelector('.above')
        const p = document.createElement('p')
        const array = makeDoubleArray(inputs)
        let k = 0

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (array[i][j].checked) {
                    if (array[i][j].value == answers[i]) {
                        array[i][j].parentNode.style.background = 'rgb(0%, 50%, 0%, 0.4)';
                        k++
                    } else {
                        array[i][j].parentNode.style.background = 'rgb(100%, 0%, 0%, 0.4)';
                    }
                }
            }
        }

        if (k == 3) {
            p.innerHTML = `${k}/3 Great job!`
        } else {
            p.innerHTML = `${k}/3 You can do better! Try one more time!`
        }

        form.append(p)
        above.style.display = 'block'
    }

    //GET THE ARRAY OF ANSWERS FROM THE SERVER WITH THE KEY - KEY
    const correct = async (id) => {
        const response = await fetch(`/answer/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json' // отправляемые данные 
            }
        })
        const res = await response.json()
        outline(res.key)
    }

    //CHECK WHETHER THE USER CHOSE ALL THE OPTIONS
    const isChecked = () => {
        const inputs = document.querySelectorAll('.quiz-body input')
        let k = 0

        inputs.forEach(item => {
            if (item.checked) {
                k++
            }
        })

        if (k === 3) {
            return true
        } else {
            return false
        }
    }

    //REMOVES THE P IF IT EXISTS
    const isExist = (clas) => {
        const p = document.querySelector(clas)
        if (p) {
            p.remove()
        }
    }

    //SIDE MENU CLICKED FORM APPEARS AND THEN FORM SUBMIT
    mutual.addEventListener('click', async (e) => {
        const className = "quiz-menu-item"
        e.preventDefault()
        wash()
        let target = e.target
        let id = target.id
        if (target && target.tagName === 'A') {
            await getInfo('/tense' + '/' + id)
        }

        const form = document.querySelector('.quiz-body')

        form.addEventListener('submit', async (event) => {
            event.preventDefault()
            isExist('.check')
            if (isChecked()) {
                await correct(id)
            } else {
                const p = document.createElement('p')
                p.innerHTML = "Choose the answer!"
                p.classList.add('check')
                document.querySelector('.quiz-body').append(p)
            }
        })
    })
}