const textInput = document.querySelector('.text-input')
const btn = document.querySelector('.btn')

let isOpen = false;

btn.addEventListener('click', function() {
    isOpen = !isOpen

    if(isOpen) {
        textInput.style.width = '200px';
        textInput.focus()
    } else {
        textInput.style.width = '0';
    }
})