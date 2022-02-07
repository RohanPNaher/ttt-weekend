/*-------------------------------- Constants --------------------------------*/
const winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/

let isWinner, startGame, startingPlayer, playerTurn, grid


/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('.board')
const messageElement = document.getElementById('message')
const playArea = document.querySelectorAll('.play-area')
const replayBtn = document.getElementById('replay-button')

/*----------------------------- Event Listeners -----------------------------*/
//bubbling the squares
board.addEventListener('click', handleClick)
replayBtn.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/

function init() {
  //Clear the cells
  grid = [
    null, null, null,
    null, null, null, 
    null, null, null
  ]
  for(let i = 0; i < playArea.length; i++) {
    playArea[i].innerHTML = ""
    playArea[i].setAttribute('class', 'play-area')
  }
  //Resets the game to starting player
  startGame = true
  startingPlayer = 1
  playerTurn = startingPlayer
  //Resets win
  isWinner = null
  //Resets the turn/win message
  messageElement.textContent = `${startingPlayer === 1 ? 'X' : 'O'} goes first. Pick any tile.`

  // hide replay button
  replayBtn.setAttribute('class', `btn btn-primary hidden`)

  confetti.stop()
  //invoke render
  render()
}

function render() {
  // Connect the grid values to the html board
  grid.forEach((square, idx)  => {
    if (square === 1) {
      playArea[idx].innerHTML = `<img src="./images/black-cross.png" class="x">`
    } else if (square === -1) {
      playArea[idx].innerHTML = `<img src="./images/red-circle.png" class="o">`
    } else {
      playArea[idx].innerHTML = ""
      playArea[idx].style.background = ''
    }
  })

  // decide winner
  getWinner()
  if (isWinner === 1 || isWinner === -1 || isWinner === 'T')   {
    renderEnd()
  } else {
    // No winner, turn advance
    renderTurn()
  }
}

/*---------------------------- Render Functions -----------------------------*/

function renderEnd() {
  isWinner === 1 ? 
  messageElement.textContent = `X is the winner!`
  : isWinner === -1 ? messageElement.textContent = `O is the winner!`
  : isWinner === 'T' ? messageElement.textContent = `There are no more unclaimed tiles, so the game is a tie!`
  : 'Someone won?'
  replayBtn.setAttribute('class', `btn btn-primary`)
}

function renderTurn() {
  if (startGame === true) {
    startGame = false
  } else {
  messageElement.textContent = `It's ${playerTurn === 1 ? 'X' : 'O'}'s turn. Pick any avaliable tile.`
}
}

function getWinner(){
  let chickenDinner = []
  //determine the value of the array for the Xs and Os in combo
  let tempSum = 0;
  winningCombo.forEach(function(combo){
    //initialize empty array to signify the value of each cell in a combo, to reduce later
    let innerDinner = []
    combo.forEach(function(idx){
      if (grid[idx] === 1) {
        tempSum += 1
      } else if (grid[idx] === -1) {
        tempSum -= 1
      } else if (grid[idx] === null){
        tempSum
      }

      // Add value 
      innerDinner.push(tempSum)
      tempSum = 0
    })
    chickenDinner.push(Math.abs(innerDinner.reduce((prev, current) => prev + current)))
  })

  // Win
  if (chickenDinner.includes(3)) {
    // Highlights the winning tiles
    confetti.start(2000)
    let comboIndex = chickenDinner.indexOf(3)
    winningCombo[comboIndex].forEach(function(idx) {
      playArea[idx].innerHTML = '<img src="./images/parrot.gif">'
    })
    // If the player somehow gets 2 rows 
    let secondIndex = chickenDinner.lastIndexOf(3)
    winningCombo[secondIndex].forEach(function(idx) {
      playArea[idx].innerHTML = '<img src="./images/parrot.gif">'
    })
    // Due to playerTurn swithcing before render is called, it must be switched back to call the correct winner
    return isWinner = (playerTurn * -1)
  } else if (grid.includes(null) !== true) {
    // Tie
    return isWinner = 'T'
  } else {
    return isWinner = null
  }
}

function handleClick(event) {
  let squareIndex = parseInt(event.target.id.slice(2))

  // If the player somehow clicks outside play area but within the board, fixes bug with bubbling where the board disappears
  if (event.target.classList.contains('board')) {
    return
  }

  // If there is a winner, stop rendering new state
  if(isWinner !== null){
    return
  }
  
  // If square is occupied, does not change game state
  if (event.target.classList.contains('x') || event.target.classList.contains('o')) {
    return 
  }
  
  // Add class for styling
  if (playerTurn === 1) {
    event.target.setAttribute('class', `x play-area` )
  } else if (playerTurn === -1) {
    event.target.setAttribute('class', `o play-area` )
  }

  // Change the grid to correspond to either X or O based on whose turn it is
  grid[squareIndex] = playerTurn

  

  // Change the turn
  if (playerTurn === playerTurn) {
    playerTurn *= -1
  }

  render()
}



// Start the app
init()


