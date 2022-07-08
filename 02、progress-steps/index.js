const numberEleArr = document.querySelectorAll('.number')
const prevButton = document.querySelector('#prevButton')
const nextButton = document.querySelector('#nextButton')
const activeLine = document.querySelector('.active-line')

let currentNumber = 0


prevButton.addEventListener('click', () => {
    if (currentNumber === 0) {
        return
    }

    currentNumber -= 1;
    setActiveNumber()
})

nextButton.addEventListener('click', () => {
    if (currentNumber === numberEleArr.length - 1) {
        return
    }

    currentNumber += 1;
    setActiveNumber()
})

numberEleArr.forEach((ele, index) => {
    ele.addEventListener('click', () => {
        currentNumber = index;
        setActiveNumber();
    })
})

function setActiveNumber() {
    if (currentNumber === 0) {
        prevButton.setAttribute('disabled', 'disabled')
    } else {
        prevButton.removeAttribute('disabled')
    }

    if (currentNumber === numberEleArr.length - 1) {
        nextButton.setAttribute('disabled', 'disabled')
    } else {
        nextButton.removeAttribute('disabled')
    }

    numberEleArr.forEach((ele, index) => {
        if (index <= currentNumber) {
            ele.classList.add('active')
        } else {
            ele.classList.remove('active')
        }
    })

    activeLine.style.width = `${currentNumber / (numberEleArr.length - 1) * 100}%`
}