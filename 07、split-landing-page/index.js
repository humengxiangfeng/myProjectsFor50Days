const container = document.querySelector('.container')

const psContainer = document.querySelector('.ps-container')
const xboxContainer = document.querySelector('.xbox-container')

psContainer.addEventListener('mouseenter', () => {
    container.classList.add('hover-left')
})
psContainer.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left')
})

xboxContainer.addEventListener('mouseenter', () => {
    container.classList.add('hover-right')
})
xboxContainer.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right')
})