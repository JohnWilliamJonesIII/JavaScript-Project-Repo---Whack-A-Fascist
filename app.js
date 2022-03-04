const squares = document.querySelectorAll('.square')
const putin = document.querySelectorAll('.putin')
const timeCounter = document.querySelector('#timeCounter')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomPutinHole(){
    squares.forEach(square => {
        square.classList.remove('putin')
    })

    let randomPutinHolePosition = squares[Math.floor(Math.random() * 9)]
    randomPutinHolePosition.classList.add('putin')

    hitPosition = randomPutinHolePosition.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})



function movePutin(){
    let timerId = null
    timerId = setInterval(randomPutinHole, 500)
}

movePutin()

function countDown() {
currentTime--
timeCounter.textContent = currentTime

if (currentTime == 0){
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('GAME OVER: FINAL SCORE = ' + ' ' + result)
    currentTime+=60
    currentTime--
    timeCounter.textContent = currentTime
    countDownTimerId = setInterval(countDown, 1000)
    
}
}

let countDownTimerId = setInterval(countDown, 1000)


