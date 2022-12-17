let counter = 0
let counterDOM = document.querySelector("#digit")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")
let zeroDOM = document.querySelector("#zero")

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clicEvent)
decreaseDOM.addEventListener("click", clicEvent)
zeroDOM.addEventListener("click", zero)


function clicEvent(){
    console.log(this.id)
    this.id == "increase" ? counter += 1 : counter -= 1
    counterDOM.innerHTML = counter
}

function zero(){
    counter=0
    counterDOM.innerHTML = counter
}
