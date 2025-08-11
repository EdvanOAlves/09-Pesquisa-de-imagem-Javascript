"use strict"

const buttonImage = document.getElementById('update-image')
const buttonAuto = document.getElementById('auto-slideshow')
const slideTime = 3000

function searchImage() {
    const imageInput = document.getElementById('input').value
    const imageOption = imageInput.replace(' ', '-')

    document.documentElement.style.setProperty('--selected-image', `var(--${imageOption})`)
}

function slideShow() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function changeImg() {
            document.documentElement.style.setProperty('--selected-image', `var(--imagem-${i + 1})`)
        }, slideTime * i
        )
    }
}

buttonImage.addEventListener('click', searchImage)
buttonAuto.addEventListener('click', slideShow)