"use strict"

const buttonImage = document.getElementById('update-image')
const buttonAuto = document.getElementById('auto-slideshow')
const slideTime = 3000
const mainframe = document.getElementById('mainframe')
let sliding = false

function searchImage() {
    const imageInput = document.getElementById('input').value
    const imageOption = imageInput.replace(' ', '-')

    document.documentElement.style.setProperty('--selected-image', `var(--${imageOption})`)
}

function slideShow() {
    sliding = !sliding

    if (sliding){
        mainframe.classList.add('animado')
    }else{
        mainframe.classList.toggle('animado')
    }
    
}

buttonImage.addEventListener('click', searchImage)
buttonAuto.addEventListener('click', slideShow)