let button =document.querySelectorAll('#n1');

button.forEach(function(e){
    e.addEventListener('click',function(){
        e.textContent='x';
    })
})

// Tic Tac Toe game in JavaScript

// Initialize the game board
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  // Initialize the current player
  let currentPlayer = 'X';
  
  // Function to check if the game is over
  function isGameOver() {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return true;
      }
    }
  
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return true;
      }
    }
  
    // Check diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return true;
    }
  
    // Check if the board is full
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          return false;
        }
      }
    }
  
    // If none of the above conditions are met, the game is not over
    return false;
  }
  
  // Function to switch the current player
  function switchPlayer() {
    if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
  }
  
  // Function to make a move
  function makeMove(row, col) {
    // Check if the move is valid
    if (board[row][col] !== '') {
      return false;
    }
  
    // Make the move
    board[row][col] = currentPlayer;
  
    // Switch the current player
    switchPlayer();
  
    return true;
  }
  
  // Function to display the game board
  function displayBoard() {
    console.log(board[0][0] + ' | ' + board[0][1] + ' | ' + board[0][2]);
    console.log('--+---+--');
    console.log(board[1][0] + ' | ' + board[1][1] + ' | ' + board[1][2]);
    console.log('--+---+--');
    console.log(board[2][0] + ' | ' + board[2][1] + ' | ' + board[2][2]);
  }
  
  // Play the game
  while (!isGameOver()) {
    console.clear();
    displayBoard();
  
    // Get the player's move
    let row = prompt('Enter row (0-2) for ' + currentPlayer + ':');
    let col = prompt('Enter column (0-2) for ' + currentPlayer + ':');
  
    // Make the move
    if (!makeMove(row, col)) {
      alert('Invalid move! Try again.');
    }
  }
  
  // Display the final game board
  console.clear();
  displayBoard();
  
  // Declare the winner
  if (currentPlayer === 'X') {
    console.log('O wins!');
  } else {
    console.log('X wins!');
  }