const buttons = document.querySelectorAll(".button")
    // console.log (buttons)
const body = document.querySelector("body")

buttons.forEach(function(butt) {
    console.log(butt)
    butt.addEventListener("click", function(event) {
        console.log(event)
        console.log(event.target)
        if (event.target.id === "grey") {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === "white") {
            body.style.backgroundColor = "white"
        }
        if (event.target.id === "blue") {
            body.style.backgroundColor = "blue"
        }
        if (event.target.id === "yellow") {
            body.style.backgroundColor = "yellow"
        }
    })
})