"use strict"

const buttonImage = document.getElementById('update-image')

const extensoes =['.jpg', '.jpeg', '.png', '.gif', '.bmp']

function findExt(imageOption){
    for (let ext in extensoes){

        
        return ext
    }
}

function searchImage(){
    const imageOption = document.getElementById('input').value
    findExt(imageOption)


    const imagePath = `\"./img/'${imageOption}${extensoes}\"`
    console.log(imagePath)
    document.documentElement.style.setProperty( '--image-path', imagePath)
}


buttonImage.addEventListener('click',searchImage)