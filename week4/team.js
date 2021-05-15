// Access the DOM and save the nodes in variables
const board = document.querySelector('#board');
const resetButton = document.getElementById('reset');
const player1 = 'X';
const player2 = 'O';
let player = player1;

// Add values to the board
function addPiece(e) {
    console.log(e.target);
    e.target.innerHTML = player;
    if (player === player1) player = player2; //Check who's turn is it
    else player = player1;
}
//  Resets all the fields
function resetBoard() {
    console.dir(board);
    for (let i = 0; i < board.rows.length; i++) {
        let row = board.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            row.cells[j].innerHTML = '';
        }
    }
}
// An event listener will always pass an event to the function we call there, that is why we see 
// the variable 'e' being passed in the addPiece function. 
board.addEventListener('click', addPiece);
reset.addEventListener('click', resetBoard);