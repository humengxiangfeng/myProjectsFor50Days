const boxArr = document.querySelectorAll('.box')

document.addEventListener('scroll', checkBox)

// 手动调用一次，使得最开始的几个box可以显示
checkBox();

function checkBox() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxArr.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}