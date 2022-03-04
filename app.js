const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeCounter = document.querySelector('#timeCounter')
const score = document.querySelector('#score')

let result = 0

function randomMoleHole(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomMoleHolePosition = squares[Math.floor(Math.random() * 9)]
}


