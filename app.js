const squares = document.querySelectorAll('.square')
const putin = document.querySelectorAll('.putin')
const timeCounter = document.querySelector('#timeCounter')
const score = document.querySelector('#score')

let result = 0

function randomPutinHole(){
    squares.forEach(square => {
        square.classList.remove('putin')
    })

    let randomPutinHolePosition = squares[Math.floor(Math.random() * 9)]
    randomPutinHolePosition.classList.add('putin')
}

randomPutinHole()


