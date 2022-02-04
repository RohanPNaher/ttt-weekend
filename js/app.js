/*-------------------------------- Constants --------------------------------*/

const cells = [
  0, 1, 2,
  3, 4, 5,
  6, 7, 8
]
const playerX = 1
const playerO = -1


/*---------------------------- Variables (state) ----------------------------*/

let isWinner, startingPlayer, playerTurn


/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('.board')
const messageElement = document.getElementById('message')
const playArea = document.querySelectorAll('.play-area')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init() {
  for(let i = 0; i < playArea.length; i++) {
    console.log(playArea[i])
    playArea[i].innerHTML = ""
  }
  playerTurn = playerX
  isWinner = null
  messageElement.textContent = "X goes first, pick any title!"

  render()
}

function render() {
  
}






init()