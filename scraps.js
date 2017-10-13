/*
if (x[4] === 1) {
  let i = 3
  while (x[i] === 1) {
    i--;
  }
  if (x[i] === 0) {
    x[i] = 1;
    x[5] = 0;
  }
  
}
*/

/*
      { row: 0, col: -1 },
      { row: -1, col: -1 },
      { row: -1, col: 0 },
      { row: -1, col: 1 },
      { row: 0, col: 1 },
      { row: 1, col: 1 },
      { row: 1, col: 0 },
      { row: 1, col: -1 }
*/
/*
        const trvRow = bRow + trvCalc(pRow - bRow);
        const trvCol = bCol + trvCalc(pCol - bCol);
        if (board[trvRow][trvCol] === 'S') {
          board[trvRow][trvCol] = 'H';
          boardDivs.changeElementColor(trvRow, trvCol, beast.beastColor);
          board[bRow][bCol] = 'S';
          boardDivs.changeElementColor(bRow, bCol, beast.boardColor);
          beast.gameState.beastPositions[0].row = trvRow;
          beast.gameState.beastPositions[0].column = trvCol;
        }
*/
        
/*
        for (i = 0; i < trv.length; i++) {
          const row = bRow + trv[i].row;
          const col = bCol + trv[i].col;
          if (board[row][col] === 'S') {
            board[row][col] = 'H';
            boardDivs.changeElementColor(row, col, beast.beastColor);
            board[bRow][bCol] = 'S';
            boardDivs.changeElementColor(bRow, bCol, beast.boardColor);
            beast.gameState.beastPositions[0].row = row;
            beast.gameState.beastPositions[0].column = col;
            break;
          }
        }
*/
        
/*
        const nextMove = function (pRow, pCol, bRow, bCol) {
          // simple diagonal or straight move
          return [sc(pRow - bRow), sc(pCol - bCol)];
        }
*/
/*
[-1, 0], [-1, -1], [-1, 1], [0, -1], [0, 1], [1, 0], [1, -1], [1, 1]
[-1, 1], [-1, 0], [0, 1], [1, 1], [-1, -1], [1, 0], [0, -1], [1, -1]
[0, 1], [-1, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [1, -1], [0, -1]
[1, 1], [0, 1], [1, 0], [-1, 1], [1, -1], [-1, 0], [0, -1], [-1, -1]
[1, 0], [1, -1], [1, 1], [0, -1], [0, 1], [-1, 0], [-1, -1], [-1, 1]
[1, -1], [1, 0], [0, -1], [1, 1], [-1, -1], [0, 1], [-1, 0], [-1, 1]
[0, -1], [1, -1], [-1, -1], [1, 0], [-1, 0], [1, 1], [-1, 1], [0, 1]
[-1, -1], [0, -1], [-1, 0], [1, -1], [-1, 1], [1, 0], [0, 1], [1, 1]

trv: {
  '-1,0': [ [-1, -1], [-1, 1], [0, -1], [0, 1], [1, 0], [1, -1], [1, 1] ],
  '-1,1': [ [-1, 0], [0, 1], [1, 1], [-1, -1], [1, 0], [0, -1], [1, -1] ],
  '0,1': [ [-1, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [1, -1], [0, -1] ],
  '1,1': [ [0, 1], [1, 0], [-1, 1], [1, -1], [-1, 0], [0, -1], [-1, -1] ],
  '1,0': [ [1, -1], [1, 1], [0, -1], [0, 1], [-1, 0], [-1, -1], [-1, 1] ],
  '1,-1': [ [1, 0], [0, -1], [1, 1], [-1, -1], [0, 1], [-1, 0], [-1, 1] ],
  '0,-1': [ [1, -1], [-1, -1], [1, 0], [-1, 0], [1, 1], [-1, 1], [0, 1] ],
  '-1,-1': [ [0, -1], [-1, 0], [1, -1], [-1, 1], [1, 0], [0, 1], [1, 1] ],
}
*/
      /*
      const reduce = function (rowCol, inc, rowIncDec, colIncDec) {
        block = board[pRow + rowIncDec][pCol + colIncDec];
        if (block === 'W') {
          return;
        } else if (block === 'G') {
          // check down the line..
          let i = pRow - 2;
          while (board[i][pCol] === 'G') {
            i--;
          }
          if (board[i][pCol] === 'S') {
            // change model and view
            board[i][pCol] = 'G';
            boardDivs.changeElementColor(i, pCol, beast.moveableBlockColor);
            board[pRow][pCol] = 'S'
            boardDivs.changeElementColor(pRow, pCol, beast.boardColor);
            board[pRow - 1][pCol] = 'I'
            boardDivs.changeElementColor(pRow - 1, pCol, beast.playerColor);
            beast.gameState.playerPositionRow--;
          }
        } else if (block === 'S') {
          board[pRow][pCol] = 'S'
          boardDivs.changeElementColor(pRow, pCol, beast.boardColor);
          board[pRow - 1][pCol] = 'I'
          boardDivs.changeElementColor(pRow - 1, pCol, beast.playerColor);
          beast.gameState.playerPositionRow--;
        }
      }
      */
/*
          beast.gameState.beastDecision++;
        } else {
          for (let i = 0; i < 8; i++) {
            const rand = Math.floor(Math.random() * 2);
            const trvRow = bRow + options[i][0];
            const trvCol = bCol + options[i][1];
            if (board[trvRow][trvCol] === 'S' && rand === 1) {
              board[trvRow][trvCol] = 'H';
              boardDivs.changeElementColor(trvRow, trvCol, beast.beastColor);
              board[bRow][bCol] = 'S';
              boardDivs.changeElementColor(bRow, bCol, beast.boardColor);
              beast.gameState.beastPositions[0].row = trvRow;
              beast.gameState.beastPositions[0].column = trvCol;
              break;
            }
          }
          beast.gameState.beastDecision = 0;
        }
*/
