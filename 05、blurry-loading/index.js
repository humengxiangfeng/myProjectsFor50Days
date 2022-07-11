const loadingContainer = document.querySelector('.loading-container')
let currentNumber = 0

let mySetInterval = setInterval(() => {
    if (currentNumber >= 100) {
        clearInterval(mySetInterval)
        document.body.removeChild(loadingContainer)
        return
    }

    currentNumber += 1
    loadingContainer.style.backdropFilter = `blur(${100 - currentNumber}px)`
    loadingContainer.innerHTML = `${currentNumber}%`
}, 15)