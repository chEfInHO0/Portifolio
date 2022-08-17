//START Body Elements
const body = document.querySelector(`body`)
const bodyR = document.querySelector('.body-r')
const bodyB = document.querySelector('.body-b')
const bodyG = document.querySelector('.body-g')

function getBodyColors() {
    let currR = bodyR.value
    let currB = bodyB.value
    let currG = bodyG.value
    body.style.backgroundColor = `rgb(${currR},${currG},${currB})`
    if (body.style.backgroundColor === `rgb(255, 255, 255)`) {
        presetB.textContent = `(${currR},${currG},${currB}) Default`
    } else {
        presetB.textContent = `(${currR},${currG},${currB})`
    }

}

function resetBody() {
    bodyR.value = 255
    bodyG.value = 255
    bodyB.value = 255
    body.style.backgroundColor = `rgb(255,255,255)`
}
//END Body Elements 

//START Text Elements
const textR = document.querySelector('.text-r')
const textB = document.querySelector('.text-b')
const textG = document.querySelector('.text-g')

function getTextColors() {
    let currR = textR.value
    let currB = textB.value
    let currG = textG.value
    body.style.color = `rgb(${currR},${currG},${currB})`
    if (body.style.color === `rgb(0, 0, 0)`) {
        presetT.textContent = `(${currR},${currG},${currB}) Default`
    } else {
        presetT.textContent = `(${currR},${currG},${currB})`
    }
}

function resetText() {
    textR.value = 0
    textG.value = 0
    textB.value = 0
    body.style.color = `rgb(0,0,0)`
}
//END Text Elements

//START UX Elements
const presetB = document.querySelector('.body-preset')
const presetT = document.querySelector('.text-preset')
//END UX Elements


//START Div area
const div = document.querySelector('.nuts')
//END Div area

//START Div Elements
const width = document.querySelector('.div-w')
const height = document.querySelector('.div-h')
const border = document.querySelector('.div-bd')
const borderRadius = document.querySelector('.div-br')
const borderR = document.querySelector('.div-bred')
const borderG = document.querySelector('.div-bgreen')
const borderB = document.querySelector('.div-bblue')
const divR = document.querySelector('.div-red')
const divG = document.querySelector('.div-green')
const divB = document.querySelector('.div-blue')


function changeDiv() {
    let divStyle = div.style
    divStyle.width = `${width.value}px`
    divStyle.height = `${height.value}px`
    divStyle.backgroundColor = `rgb(${divR.value},${divG.value},${divB.value})`
    divStyle.border = `${border.value}px solid`
    divStyle.borderRadius = `${borderRadius.value}%`
    divStyle.borderColor = `rgb(${borderR.value},${borderG.value},${borderB.value})`
    getCurrentValues()
}
function resetDiv() {
    let divStyle = div.style
    divStyle.width = `50px`
    divStyle.height = `25px`
    divStyle.backgroundColor = `rgb(110,110,110)`
    divStyle.border = `0px solid`
    divStyle.borderRadius = `0%`
    divStyle.borderColor = `rgb(0,0,0)`
    //changed to look good
    width.value = `50`
    height.value = `25`
    border.value = `0`
    borderRadius.value = `0`
    borderR.value = `0`
    borderG.value = `0`
    borderB.value = `0`
    divR.value = `110`
    divG.value = `110`
    divB.value = `110`
    //
    getCurrentValues()
}
function getCurrentValues() {
    const nutPreset = document.querySelector(`.preset-nuts`)
    nutPreset.textContent = `W:${width.value}px\nH:${height.value}px\nBD:${border.value}px\nBRD: ${borderRadius.value}%\nBDColor:(${borderR.value}, ${borderG.value}, ${borderB.value})\nDivColor:(${divR.value}, ${divG.value}, ${divB.value})`
}
//END Div Elements

//1st exec on call to set values on index.html
getBodyColors()
getTextColors()
getCurrentValues()