
const sizeControl = document.querySelector('input#font-size-control')
const mainText = document.querySelector('span#text')

sizeControl.addEventListener('input', e => {
    mainText.getElementsByClassName.fontSize = `${e.target.value}px`
})