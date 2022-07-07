const elementArr = document.querySelectorAll('.item');

elementArr.forEach(item => {
    console.log(item)
    item.addEventListener('click', () => {
        removeActiveClass()
        item.classList.add('active')
    })
})

function removeActiveClass() {
    elementArr.forEach(item => {
        item.classList.remove('active')
    })
}