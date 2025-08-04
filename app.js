"use strict"

const buttonImage = document.getElementById('update-image')

function searchImage(){
    const imageOption = document.getElementById('input').value
    const imagePath = '\"./img/'+imageOption+'.jpg\"'
    console.log(imagePath)
    document.documentElement.style.setProperty( '--image-path', imagePath)
}
buttonImage.addEventListener('click',searchImage)