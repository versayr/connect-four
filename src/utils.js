export const checkForWinner = (lastMove, board) => {
  const { x, y } = lastMove;
  const player = board[x][y];
  let verticalStripe = [];
  let horizontalStripe  = [];
  let descendingStripe = [];
  let ascendingStripe = [];

  // checks for a win in the stripe vertical to the last move
  for (const row in board[x]) {
    // skip past cells too far from the last move
    if (row < y - 3 || row > y + 3) continue;

    if (board[x][row] === '') {
      break;
    } else if (board[x][row] !== player && row < y) {
      verticalStripe = [];
      continue;
    } else if (board[x][row] !== player && row > y) {
      break;
    } else {
      verticalStripe.push(board[x][row]);
    }

    if (verticalStripe.length >= 4) return true;
  }

  // checks for a win in the stripe horizontal to the last move
  for (const col in board) {
    // skip past cells too far from the last move
    if (col < x - 3 || col > x + 3) continue;

    if (col < x && (board[col][y] === '' || board[col][y] !== player)) {
      horizontalStripe = [];
      continue;
    } else if (col > x && (board[col][y] === '' || board[col][y] !== player)) {
      break;
    } else {
      horizontalStripe.push(board[col][y]);
    }
    if (horizontalStripe.length >= 4) return true;
  }

  // checks for a win in the stripe descending diagonally to the last move
  for (let col = x - 3, row = y + 3; col <= 6; col++, row--) {
    // skip past cells outside of the board
    if (col < 0 || row > 6) continue;

    if (col < x && (board[col][row] === '' || board[col][row] !== player)) {
      descendingStripe = [];
      continue;
    } else if (col > x && (board[col][row] === '' || board[col][row] !== player)) {
      break;
    } else {
      descendingStripe.push(board[col][row]);
    }

    if (descendingStripe.length >= 4) return true;
  }

  // checks for a win in the stripe ascending diagonally to the last move
  for (let col = x - 3, row = y - 3; col <= 6; row++, col++) {
    // skip past cells outside of the board
    if (row < 0 || col < 0) continue;

    if (col < x && (board[col][row] === '' || board[col][row] !== player)) {
      ascendingStripe = [];
      continue;
    } else if (col > x && (board[col][row] === '' || board[col][row] !== player)) {
      break;
    } else {
      ascendingStripe.push(board[col][row]);
    }

    if (ascendingStripe.length >= 4) return true;
  }

  return false;
}
