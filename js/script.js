/* GLOBALS VARIABLES and FUNCTIONS*/

let playerCurrent = ''
let btnStart = document.querySelector(".button")
let squareContainer = document.querySelector('.square-container')
let squaresList = document.querySelectorAll('.square-no-hover')
let messageSpace = document.querySelector('.message')
let instruction = document.querySelector('.instruction')
let [sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,sq9] = squaresList

const checkWinner = (symbol) => {
    
    isWinner = false
    const addAnimation = (var1, var2, var3, classWin) => {

        var1.style.animation = `${classWin} 1s ease 0s infinite normal forwards`
        var2.style.animation = `${classWin} 1s ease 0s infinite normal forwards`
        var3.style.animation = `${classWin} 1s ease 0s infinite normal forwards`
    }

    if(sq1.innerHTML == symbol && sq2.innerHTML == symbol && sq3.innerHTML == symbol) {
        isWinner = true 
        addAnimation(sq1,sq2,sq3, 'myAnim')
    } else if (sq4.innerHTML == symbol && sq5.innerHTML == symbol && sq6.innerHTML == symbol) {
        isWinner = true
        addAnimation(sq4,sq5,sq6, 'myAnim')
    } else if (sq7.innerHTML == symbol && sq8.innerHTML == symbol && sq9.innerHTML == symbol) {
        isWinner = true
        addAnimation(sq7,sq8,sq9, 'myAnim')
    } else if (sq1.innerHTML == symbol && sq4.innerHTML == symbol && sq7.innerHTML == symbol) {
        isWinner = true
        addAnimation(sq1,sq4,sq7, 'myAnim')
    } else if (sq2.innerHTML == symbol && sq5.innerHTML == symbol && sq8.innerHTML == symbol) {
        isWinner = true
        addAnimation(sq2,sq5,sq8, 'myAnim')
    } else if (sq3.innerHTML == symbol && sq6.innerHTML == symbol && sq9.innerHTML == symbol) {
        isWinner = true
        addAnimation(sq3,sq6,sq9, 'myAnim')
    } else if (sq1.innerHTML == symbol && sq5.innerHTML == symbol && sq9.innerHTML == symbol) {
        isWinner = true
        addAnimation(sq1,sq5,sq9, 'myAnim')
    } else if (sq3.innerHTML == symbol && sq5.innerHTML == symbol && sq7.innerHTML == symbol) {
        isWinner = true
        addAnimation(sq3,sq5,sq7, 'myAnim')
    }
    return isWinner
}

const checkDraw = () => {
    
    let isDraw = false
    let counter = 0

    for (let i = 0; i < squaresList.length; i++) {

        const box = squaresList[i];

        if(box.innerHTML !== '') {
            counter++
        }

        if (counter === squaresList.length) {
            isDraw = true
        }
    } 
    return isDraw
}

const changeTurn = () => {
    
    if (playerCurrent == 'playerX') {
        playerCurrent = 'playerO'
        messageSpace.innerHTML = 'Turn player 02 (O)'
    } else {
        playerCurrent = 'playerX'
        messageSpace.innerHTML = 'Turn player 01 (X)'
    }
}

/* code pre-game */

btnStart.addEventListener('click', () => {

    playerCurrent = 'playerX'
    btnStart.className = 'btnReset'
    btnStart.innerHTML = 'reset'
    squareContainer.style.filter = 'none'
    instruction.innerHTML = 'Good luck Players!'
    messageSpace.innerHTML = 'Turn Player 01 (X)'
    
    const changeCLassSquare = () => {
        for (let i = 0; i < squaresList.length; i++) {
            squaresList[i].className = 'square'
        }
    }

    changeCLassSquare()

    /* add function button restart */

    btnStart.addEventListener('click', () => {
        document.location.reload()
    })
})

/* code play game */

for (let i = 0; i < squaresList.length; i++) {

    const box = squaresList[i];
    
    box.addEventListener('click', () => {
        
        switch (playerCurrent) {

            case 'playerX':

                if(box.innerHTML == '') {

                    box.innerHTML = 'X'
                    box.className = 'squareX'

                    if(checkWinner('X')) {
                        messageSpace.innerHTML = 'Player 01 (X): WIN!!!'
                        playerCurrent = ''
                    } else if (checkDraw()) {
                        messageSpace.innerHTML = 'DRAW! Reset the game.'
                        playerCurrent = ''
                    } else {
                        changeTurn()
                    }

                } else {
                    messageSpace.innerHTML = 'Player 01 (X): Select the empty square.'
                }
                break

            case 'playerO':

                if(box.innerHTML == '') {

                    box.innerHTML = 'O'
                    box.className = 'squareO'

                    if(checkWinner('O')) {
                        messageSpace.innerHTML = 'Player 02 (O): WIN!!!'
                        playerCurrent = ''
                    } else {
                        changeTurn()
                    }

                } else {
                    messageSpace.innerHTML = 'Player 02 (O): Select the empty square.'
                }
                break
        }
    })
}