const opn = document.querySelector('.opinion')
const photo = document.querySelector('.thumbnail')
const occupation = document.querySelector('.occupation')
const nameOp = document.querySelector('.name')
const next = document.querySelector('.next')
const back = document.querySelector('.back')
const opArray = [
    'descrição qualquer para representar como se fosse uma opinião',
    'outra descrição qualquer para representar como se fosse uma opinião',
    'esta é uma opinião menor'
]
const photoArray = [
    'assets/imgs/person1.jpg',
    'assets/imgs/person2.jpg',
    'assets/imgs/person3.jpg'
]
occupationArray = [
    'Web Developer',
    'I.T Specialist',
    'Data Scientist'
]
nameArray =[
    'Susan Chang',
    'Mark Robin',
    'Gretta Hawk'
]
const fadeShow = [{opacity: '0'},{opacity:'0.3'},{opacity: '0.6'},{opacity: '0.8'},{opacity: '1'}]
let nextIndex
let previousIndex

function getCurrentOp(){
    let currOp = opn.textContent.trim()
    let index = opArray.indexOf(currOp)
    return index
}
function changeOp(){
    let currIndex = getCurrentOp()
    if (currIndex == opArray.length -1 ){
        nextIndex = 0
    }else{
        nextIndex = currIndex + 1
    }
    opn.animate(fadeShow,{duration:500,iterations:1})
    opn.innerHTML = opArray[nextIndex]
    photo.animate(fadeShow,{duration:500,iterations:1})
    photo.src = photoArray[nextIndex]
    nameOp.animate(fadeShow,{duration:500,iterations:1})
    nameOp.innerHTML = nameArray[nextIndex]
    occupation.animate(fadeShow,{duration:500,iterations:1})
    occupation.innerHTML = occupationArray[nextIndex]
    
}
function previousOp(){
    let currIndex = getCurrentOp()
    if (currIndex <= 0 ){
        previousIndex = opArray.length - 1 
    }else{
        previousIndex = currIndex - 1
    }
    opn.animate(fadeShow,{duration:500,iterations:1})
    opn.innerHTML = opArray[previousIndex]
    photo.animate(fadeShow,{duration:500,iterations:1})
    photo.src = photoArray[previousIndex]
    nameOp.animate(fadeShow,{duration:500,iterations:1})
    nameOp.innerHTML = nameArray[previousIndex]
    occupation.animate(fadeShow,{duration:500,iterations:1})
    occupation.innerHTML = occupationArray[previousIndex]
}
next.addEventListener('click',changeOp)
back.addEventListener('click',previousOp)


