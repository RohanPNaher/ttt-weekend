/*-------------------------------- Constants --------------------------------*/

const cells = [
  0, 1, 2,
  3, 4, 5,
  6, 7, 8
]
const playerX = 1
const playerO = -1
const tie = "T"


/*---------------------------- Variables (state) ----------------------------*/

let isWinner, startingPlayer, playerTurn, turns


/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('.board')
const messageElement = document.getElementById('message')
const playArea = document.querySelectorAll('.play-area')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init() {
  //Clear the cells
  for(let i = 0; i < playArea.length; i++) {
    // console.log(playArea[i])
    playArea[i].innerHTML = ""
  }
  //Resets the game to starting player
  startingPlayer = playerX
  playerTurn = startingPlayer
  //Resets win
  isWinner = null
  //Resets the turn/win message
  messageElement.textContent = `${startingPlayer === 1 ? 'X' : 'O'} goes first, pick any tile!`

  //invoke render
  render()
}

function render() {
  // iterate 
  let selectedCell
  for(let i = 0; i < playArea.length; i++) {
    selectedCell = cells[i]
    renderPlayer(selectedCell)
  }



  // decide winner
  if (isWinner === 1) {
    renderXWin()
  } else if (isWinner === -1) {
    renderOWin()
  } else if (isWinner === 'T') {
    renderTie()
  } else {
    renderTurn()
  }

}



function renderPlayer() {
  console.log('hey')
}

function renderXWin() {

}

function renderOWin() {

}

function renderTurn() {
  messageElement.textContent = `It's ${playerTurn === 1 ? 'X' : 'O'}'s turn, pick any avaliable tile!`
  if (playerTurn === 1) {
    playerTurn = -1
  } else if (playerTurn === -1) {
    playerTurn = 1
  }
}

init()

/*------------------* User Stories *------------------*/
// AAU, I should see a tic tac toe board open on the page
// AAU, I should be given directions to start the game
// AAU, I should be able to select a square and put an X (or an O)
// AAU, I should not be able to change a square's value
// AAU, I should be able to complete the game
// AAU, I should be made to feel like a winner, if I am the winner goddamnit
// AAU, I should be told the game ends in a tie
// AAU, I should be given the chance to play again


/*-----------------------------* Instructions *------------------------------*/

// mark X when completed

// X 1) Required Variables (state of the game) 
// X    No variables need a value when defined 
	
// X 1.1) Array = squares;   
// X 1.2) Turn Variable = whose turn it is;
// X 1.3) Winner Variable = three game states:
// X (not defined) a player won; a tie; game still in play;

// X 2) Cached Element References 
// X 2.1) 9 elements = squares (each square a class name)
// X 2.2) element that displays the game status

// 3) Upon loading, the app should:
// X 3.1) init();

	// 3.2) function: init() state variables: (Array, Turn Variable, Winner Variable)
// X 3.2.1) Initialize Array to 9 nulls (empty squares) 
// X       9 elements, each square: [0] = top-left square,    
// X       1] = top-middle square...[8] = bottom-right square)
// X 3.2.2) Initialize Turn to = (player 'X' = 1), (layer 	'O' = -1)
// X 3.2.3) Initialize Winner Variable = to null (no winner or tie)
		//        Winner Variable holds player value (1 or -1),
		//        if there's a winner; 'T' if there's a tie.
// X 3.2.4) render state variables, call a render function.

// 3.3) render function should:
	// 3.3.1) LOOP over board array, for each iteration:
		// 3.3.1.1) index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array
		// 3.3.1.2) Style square dependant on the value inside current cell being iterated over (-1, 1, or null)
	// 3.3.2) Render message on currrent game state:
		// 3.3.2.1) If winner != null (game still in progress), render whose turn it is.
			// Hint: Use ternary inside of a template literal
		// 3.3.2.2) If winner = 'T' (tie), render a tie message.
		// 3.3.2.3) Else render a congratulatory message to which player has won.
		// Hint (again): Use ternary inside a template literal 

// 3.4) After completing this step, you should be able to manually change the values held in the board array in the initialization function and see the style of the corresponding square change on your page.

// 4) Define the required constants:

	// 4.1) Define the 8 possible winning combinations as an array of arrays.
	  // Each array will contain three indexes of the board that make a winner if they hold the same player value. 
		// If stuck: winningCombos array in the solution code. 

// 5) Wait for click on a square, call a handleClick function
  // handleClick function will...
  // 5.1) Obtain the index of the square that was clicked by:
	  // 5.1.1) "Extracting" the index from square id assigned 
		// Hint: Each id corresponds with an index in our board array, 
    //       how could these be used if we cleaned them up a bit?

// 5.2) If the board has a value at the index, return because that square is already taken.

// 5.3) If winner is not null, immediately return because the game is over.

// 5.4) Update the board array at the index with the value of turn.

// 5.5) Change the turn by multiplying turn by -1 (this flips a 1 to -1, and vice-versa).

// 5.6) Set the winner variable if there's a winner by calling a new function: getWinner.
	// The getWinner function will...

	// 5.6.1) Methods to find out if there is a winner
	// 1. (more elegant) way uses winningCombos array (see: step 4)
	// 2. (simpler; more code) use winningCombos as a reference
  // Choose between 1 or 2
    
	// 5.6.1.1) Loop through the each of the winning combination arrays defined.
	// 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
	// 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
	// 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

	// 5.6.2.1) For each winning combination from step 4, find the total of each winning combination.
	// 5.6.2.2) Convert the total to an absolute value (convert any negative total to positive)
	// 5.6.2.3) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

	// 5.6.3) Next, If there's no winner, check if there's a tie:
  // 5.6.4) Set the winner varible to "T" if there are no more nulls in the board array by returning the string "T".
	// 5.6.5) Otherwise return null.

// 5.7) All state has been updated, render the state to the page (step 3.3).

// 6) Handle a player clicking the replay button:
  // 6.1) Add a replay button to the HTML document
  // 6.2) Store the new replay button element
  // 6.3) Do steps 4.1 (initialize the state variables) and 4.2 (render).