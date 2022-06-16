/* GLOBALS VARIABLES */

let btnStart = document.querySelector(".button")

let containerSquares = document.querySelector('.square-container')
let square = document.querySelectorAll('.square-no-hover')
let msg = document.querySelector('.msg')
let instruction = document.querySelector('.instruction')

let sq1 = square[0]
let sq2 = square[1]
let sq3 = square[2]
let sq4 = square[3]
let sq5 = square[4]
let sq6 = square[5]
let sq7 = square[6]
let sq8 = square[7]
let sq9 = square[8]

playerCurrent = ''

const changeClassBtnStart = function (){
    btnStart.className = 'btnReset'
    btnStart.innerHTML = 'reset'
}

const removeBlur = function () {
    containerSquares.style.filter = 'none'
}

const changeMsgInstruction = function () {
    instruction.innerHTML = 'Good luck Players!'
}

const changeMsg = function () {
    msg.innerHTML = 'Turn player 01 (X)'
}

const changeClassSquares = function () {

    for (let i = 0; i < square.length; i++) {
    
        if (square[i].className = 'square-no-hover'){

            square[i].className = 'square'
        }
    }
}

let initReset = function () {
            
    document.location.reload() 

}

const changeMsgTurn = function() {

    if(playerCurrent == 'playerX'){

        msg.innerHTML = 'Turn player 02 (O)' 

    } else {

        msg.innerHTML = 'Turn player 01 (X)' 
    }
}

const changeCurrentPlayer = function() {

    if (playerCurrent == 'playerX'){

        playerCurrent = 'playerO'

    } else {

        playerCurrent = 'playerX'
    } 
}

const checkDraw = function() {
    
    if (sq1.innerHTML.length == 1 && 
        sq2.innerHTML.length == 1 && 
        sq3.innerHTML.length == 1 && 
        sq4.innerHTML.length == 1 && 
        sq5.innerHTML.length == 1 &&
        sq6.innerHTML.length == 1 && 
        sq7.innerHTML.length == 1 && 
        sq8.innerHTML.length == 1 && 
        sq9.innerHTML.length == 1) {
        return true
    }
    
}

let initGame = function() {

    /* START THE GAME */

    playerCurrent = 'playerX'

    changeClassBtnStart()
    removeBlur()
    changeMsgInstruction()
    changeMsg() 
    changeClassSquares()
    
    /* RESET WORKING */

    if (btnStart.innerHTML == 'reset'){

        btnStart.addEventListener('click', initReset)
    }

    /* LOGIC GAME */

    for (let i=0 ; i <= square.length ; i++){

        let unitBox = square[i]

        let clickSquare = function() {

            if (playerCurrent == 'playerX'){

                if (unitBox.innerHTML == ''){

                    unitBox.innerHTML = 'X'
                    unitBox.className = 'squareX'

                    /* WINNING CONDITIONS PLAYER X */

                    if (sq1.innerHTML == 'X' && sq2.innerHTML == 'X' && sq3.innerHTML == 'X'){
                        msg.innerHTML = 'Player 01 (X): WIN!'
                        sq1.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        sq2.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        sq3.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        playerCurrent = ''
                    } else if (sq4.innerHTML == 'X' && sq5.innerHTML == 'X' && sq6.innerHTML == 'X') {
                        msg.innerHTML = 'Player 01 (X): WIN!'
                        sq4.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        sq5.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        sq6.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        playerCurrent = ''
                    } else if (sq7.innerHTML == 'X' && sq8.innerHTML == 'X' && sq9.innerHTML == 'X') {
                        msg.innerHTML = 'Player 01 (X): WIN!'
                        sq7.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        sq8.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        sq9.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        playerCurrent = ''
                    } else if (sq1.innerHTML == 'X' && sq4.innerHTML == 'X' && sq7.innerHTML == 'X') {
                        msg.innerHTML = 'Player 01 (X): WIN!'
                        sq1.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        sq4.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        sq7.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        playerCurrent = ''
                    } else if (sq2.innerHTML == 'X' && sq5.innerHTML == 'X' && sq8.innerHTML == 'X') {
                        msg.innerHTML = 'Player 01 (X): WIN!'
                        sq2.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        sq5.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        sq8.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        playerCurrent = ''
                    } else if (sq3.innerHTML == 'X' && sq6.innerHTML == 'X' && sq9.innerHTML == 'X') {
                        msg.innerHTML = 'Player 01 (X): WIN!'
                        sq3.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        sq6.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        sq9.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        playerCurrent = ''
                    } else if (sq1.innerHTML == 'X' && sq5.innerHTML == 'X' && sq9.innerHTML == 'X') {
                        msg.innerHTML = 'Player 01 (X): WIN!'
                        sq1.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        sq5.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        sq9.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        playerCurrent = ''
                    } else if (sq3.innerHTML == 'X' && sq5.innerHTML == 'X' && sq7.innerHTML == 'X') {
                        msg.innerHTML = 'Player 01 (X): WIN!'
                        sq3.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        sq5.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        sq7.style.animation = 'winAnimation 0.8s ease 0s infinite normal forwards'
                        playerCurrent = ''

                        /* DRAW CONDITION */
                    
                    } else if (checkDraw()){

                        msg.innerHTML = 'DRAW! Reset the game.'
                        playerCurrent = ''

                        /* NEXT TURN */

                    } else {           

                        changeMsgTurn()
                        changeCurrentPlayer()
                    } 
                                        
                } else{

                    msg.innerHTML = 'Player 01 (X): Select the empty square'
                }
                
            } else if (playerCurrent == 'playerO'){

                if (unitBox.innerHTML == ''){
                    unitBox.innerHTML = 'O'
                    unitBox.className = 'squareO'

                    /* WINNING CONDITIONS PLAYER O */
                    
                    if (sq1.innerHTML == 'O' && sq2.innerHTML == 'O' && sq3.innerHTML == 'O'){
                        msg.innerHTML = 'Player 02 (O): WIN!'
                        sq1.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        sq2.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        sq3.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        playerCurrent = ''
                    } else if (sq4.innerHTML == 'O' && sq5.innerHTML == 'O' && sq6.innerHTML == 'O') {
                        msg.innerHTML = 'Player 02 (O): WIN!'
                        sq4.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        sq5.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        sq6.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        playerCurrent = ''
                    } else if (sq7.innerHTML == 'O' && sq8.innerHTML == 'O' && sq9.innerHTML == 'O') {
                        msg.innerHTML = 'Player 02 (O): WIN!'
                        sq7.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        sq8.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        sq9.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        playerCurrent = ''
                    } else if (sq1.innerHTML == 'O' && sq4.innerHTML == 'O' && sq7.innerHTML == 'O') {
                        msg.innerHTML = 'Player 02 (O): WIN!'
                        sq1.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        sq4.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        sq7.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        playerCurrent = ''
                    } else if (sq2.innerHTML == 'O' && sq5.innerHTML == 'O' && sq8.innerHTML == 'O') {
                        msg.innerHTML = 'Player 02 (O): WIN!'
                        sq2.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        sq5.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        sq8.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        playerCurrent = ''
                    } else if (sq3.innerHTML == 'O' && sq6.innerHTML == 'O' && sq9.innerHTML == 'O') {
                        msg.innerHTML = 'Player 02 (O): WIN!'
                        sq3.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        sq6.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        sq9.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        playerCurrent = ''
                    } else if (sq1.innerHTML == 'O' && sq5.innerHTML == 'O' && sq9.innerHTML == 'O') {
                        msg.innerHTML = 'Player 02 (O): WIN!'
                        sq1.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        sq5.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        sq9.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        playerCurrent = ''
                    } else if (sq3.innerHTML == 'O' && sq5.innerHTML == 'O' && sq7.innerHTML == 'O') {
                        msg.innerHTML = 'Player 02 (O): WIN!'
                        sq3.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        sq5.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        sq7.style.animation = 'winAnimation2 0.8s ease 0s infinite normal forwards'
                        playerCurrent = ''

                        /* NEXT TURN */

                    } else {
                        
                        changeMsgTurn()
                        changeCurrentPlayer()
                    }

                } else {
                    
                    msg.innerHTML = 'Player 02 (O): Select the empty square'
                } 

            } else{

            }
        }

        unitBox.addEventListener('click', clickSquare);
    }
}

btnStart.addEventListener('click', initGame)




    

        







    



















