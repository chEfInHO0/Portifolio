const opn = document.querySelector('.opinion')
const photo = document.querySelector('.thumbnail')
const occupation = document.querySelector('.occupation')
const nameOp = document.querySelector('.name')
const next = document.querySelector('.next')
const back = document.querySelector('.back')

const review = [{
    id:0,
    photo:'assets/imgs/person1.jpg',
    occupation:'Web Developer',
    name:'Susan Chang',
    review:'descrição qualquer para representar como se fosse uma opinião'
},{
    id:1,
    photo:'assets/imgs/person2.jpg',
    occupation:'I.T Specialist',
    name:'Mark Robin',
    review:'outra descrição qualquer para representar como se fosse uma opinião'
},{
    id:2,
    photo:'assets/imgs/person3.jpg',
    occupation:'Data Scientist',
    name:'Gretta Hawk',
    review:'esta é uma opinião menor'
}]
const fadeShow = [{opacity: '0'},{opacity:'0.3'},{opacity: '0.6'},{opacity: '0.8'},{opacity: '1'}]
let start = 0
let nextIndex
let previousIndex
function setData(){
    photo.src = review[0].photo
    nameOp.innerHTML = review[0].name
    occupation.innerHTML = review[0].occupation
    opn.innerHTML = review[0].review
}
function changeOp(){
   let currIndex = start 
    nextIndex = start + 1
    if (currIndex == review.length - 1 ){
        nextIndex = 0
    }else{
        nextIndex = currIndex + 1
    }
    console.log(nextIndex)
    opn.animate(fadeShow,{duration:500,iterations:1})
    opn.innerHTML = review[nextIndex]['review']
    photo.animate(fadeShow,{duration:500,iterations:1})
    photo.src = review[nextIndex]['photo']
    nameOp.animate(fadeShow,{duration:500,iterations:1})
    nameOp.innerHTML = review[nextIndex]['name']
    occupation.animate(fadeShow,{duration:500,iterations:1})
    occupation.innerHTML = review[nextIndex]['occupation']
    start = nextIndex
}
function previousOp(){

    let currIndex = start
    if (currIndex <= 0 ){
        previousIndex = review.length - 1 
    }else{
        previousIndex = currIndex - 1
    }
    console.log(previousIndex)
    opn.animate(fadeShow,{duration:500,iterations:1})
    opn.innerHTML = review[previousIndex]['review']
    photo.animate(fadeShow,{duration:500,iterations:1})
    photo.src = review[previousIndex]['photo']
    nameOp.animate(fadeShow,{duration:500,iterations:1})
    nameOp.innerHTML = review[previousIndex]['name']
    occupation.animate(fadeShow,{duration:500,iterations:1})
    occupation.innerHTML = review[previousIndex]['occupation']
    start = previousIndex
}
next.addEventListener('click',changeOp)
back.addEventListener('click',previousOp)

setData()
