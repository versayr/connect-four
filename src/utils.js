export const checkForWinner = (lastMove, board) => {
  const { x, y } = lastMove;
  const player = board[x][y];
  let verticalStripe = [];
  let horizontalStripe  = [];
  let descendingStripe = [];
  let ascendingStripe = [];

  for (const row in board[x]) {
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

  for (const col in board) {
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

  for (let col = x - 3, row = y + 3; col <= 6; col++, row--) {
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

  for (let col = x - 3, row = y - 3; col <= 6; row++, col++) {
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

// todo:
// account for distances beyond 3 from x/y?
