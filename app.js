"use strict"

const buttonImage = document.getElementById('update-image')

function searchImage(){
    const imageInput = document.getElementById('input').value
    const imageOption = imageInput.replace(' ','-')


    document.documentElement.style.setProperty( '--selected-image', `var(--${imageOption})` )
}


buttonImage.addEventListener('click',searchImage)