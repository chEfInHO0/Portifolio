const counter = document.querySelector(`.count`)

function increaseCount(){
    +counter.textContent++
    checkNumber(+counter.textContent)
}

function resetCount(){
    counter.textContent = `0`;
    checkNumber(counter.textContent)
}

function decreaseCount(){
    +counter.textContent--
    checkNumber(+counter.textContent)
}

function checkNumber(x){
    if (x>0){
        if(counter.classList.contains(`negative`)){
            counter.classList.replace(`negative`,`positive`)
        }else{
            counter.classList.add(`positive`)
        }
    }else if(x<0){
        if(counter.classList.contains(`positive`)){
            counter.classList.replace(`positive`,`negative`)
        }else{
            counter.classList.add(`negative`)
        }
    }else{
        counter.classList.remove(`negative`)
        counter.classList.remove(`positive`)
    }
}