press = document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "lightskyblue"
    } else if (event.key === 's') {
        color = "lawngreen"
    } else if (event.key === 'd') {
        color = "orangered"
    }
})

let container = document.querySelector('#container')
let div_red = document.querySelector('#red')
let div_green = document.querySelector('#green')
let div_blue = document.querySelector('#blue')
let div_yellow = document.querySelector('#yellow')

const paint = (element, press) => {
    change_background = document.querySelector(element)
    change_background.style.backgroundColor = press
};
container.addEventListener("click", (event) => {
    let id = "#" + event.target.id
    paint(id, color)
})