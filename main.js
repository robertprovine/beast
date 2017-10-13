const beast = {
  gameState: {
    boardDivs: null,
    board: null,
    level: 1,
    gameRunning: false,
    playerPositionColumn: null,
    playerPositionRow: null,
    numberOfBeasts: null,
    beastTraversal: {
      '-1,0': [ [-1, 0], [-1, -1], [-1, 1], [0, -1], [0, 1], [1, 0], [1, -1], [1, 1] ],
      '-1,1': [ [-1, 1], [-1, 0], [0, 1], [1, 1], [-1, -1], [1, 0], [0, -1], [1, -1] ],
      '0,1': [ [0, 1], [-1, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [1, -1], [0, -1] ],
      '1,1': [ [1, 1], [0, 1], [1, 0], [-1, 1], [1, -1], [-1, 0], [0, -1], [-1, -1] ],
      '1,0': [ [1, 0], [1, -1], [1, 1], [0, -1], [0, 1], [-1, 0], [-1, -1], [-1, 1] ],
      '1,-1': [ [1, -1], [1, 0], [0, -1], [1, 1], [-1, -1], [0, 1], [-1, 0], [-1, 1] ],
      '0,-1': [ [0, -1], [1, -1], [-1, -1], [1, 0], [-1, 0], [1, 1], [-1, 1], [0, 1] ],
      '-1,-1': [ [-1, -1], [0, -1], [-1, 0], [1, -1], [-1, 1], [1, 0], [0, 1], [1, 1] ]
    },
    beastDecision: 0,
    playState: null,
    beastId: 0,
    speed: 1,
    lives: null,
    score: 0,
    beastMovement: null,
    beastPositions: null,
    beastMemories: null,
    statusMessage: null,
    scoreDisplay: null,
    livesDisplay: null
  },
  crushAudio: null,
  hardBlockColor: 'yellow',
  beastColor: 'red',
  playerColor: 'aqua',
  moveableBlockColor: 'green',
  boardColor: 'black',
  boxSize: 30,
  // !!! do not modify columns and rows for now
  // !!! randomize function does not scale with them yet
  columns: 40,
  rows: 23,
  init: function () {
    this.gameState.lives = 5;
    this.gameState.statusMessage = document.createElement('div');
    this.gameState.statusMessage.style.textAlign = 'center';
    this.gameState.statusMessage.innerHTML = 'Press space bar to begin game';
    document.body.appendChild(this.gameState.statusMessage);
    this.gameState.scoreDisplay = document.createElement('div');
    this.gameState.scoreDisplay.style.textAlign = 'center';
    this.gameState.scoreDisplay.innerHTML = 'Score: 0';
    document.body.appendChild(this.gameState.scoreDisplay);
    this.gameState.livesDisplay = document.createElement('div');
    this.gameState.livesDisplay.style.textAlign = 'center';
    this.gameState.livesDisplay.innerHTML = 'Lives: 5';
    document.body.appendChild(this.gameState.livesDisplay);
  },
  // randomize is hard coded for now
  randomizeBlocks: function () {
    const arr = [];
    const innerSpaceSize = (this.columns - 2) * (this.rows - 2);
    let count = 0;
    for (let i = 0; i < 232; i++) {
      arr.push('G');
    }
    for (let i = 0; i < 12; i++) {
      arr.push('W');
    }
    for (let i = 0; i < 4; i++) {
      arr.push('H');
    }
    arr.push('I');
    for (let i = 0; i < 549; i++) {
      arr.push('S');
    }
    console.log(arr);
    console.log(arr.length);
    rand.shuffle(arr);
    return arr;
  },
  createBoard: function () {
    this.gameState.board = [];
    const randomBlocks = this.randomizeBlocks();
    // random blocks iterator
    let rit = 0;
    this.gameState.boardDivs = new Grid(this.boxSize, this.columns, this.rows, '#353535', 'black', 'game-board');
    // create model board
    this.gameState.board.push([]);
    for (let i = 0; i < this.columns; i++) {
      this.gameState.board[0].push('W');
    }
    for (let i = 1; i < this.rows - 1; i++) {
      this.gameState.board.push(['W']);
      for (let j = 1; j < this.columns - 1; j++) {
        this.gameState.board[i].push(randomBlocks[rit++]);
      }
      this.gameState.board[i].push('W');
    }
    this.gameState.board.push([]);
    for (let i = 0; i < this.columns; i++) {
      this.gameState.board[this.rows - 1].push('W');
    }
    console.log(this.gameState.board);
    this.gameState.beastPositions = [];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        console.log(this.gameState.board[i][j]);
        if (this.gameState.board[i][j] === 'I') {
          this.gameState.playerPositionRow = i;
          this.gameState.playerPositionColumn = j;
        }
        if (this.gameState.board[i][j] === 'H') {
          this.gameState.beastPositions.push({ row: i, column: j });
        }
      }
    }
    console.log('Beast Positions!! : ' + this.gameState.beastPositions);
    // create beast memories
    this.gameState.beastMemories = [];
    for (let i = 0; i < this.gameState.beastPositions.length; i++) {
      this.gameState.beastMemories.push({});
    }
    console.log('Beast Memories!! : ' + this.gameState.beastMemories);
    console.log('playerPositionRow: ' + this.gameState.playerPositionRow);
    console.log('playerPositionColumn: ' + this.gameState.playerPositionColumn);
    console.log('beastPositions length: ' + this.gameState.beastPositions.length);
    for (let i = 0; i < this.gameState.beastPositions.length; i++) {
      console.log('beastPosRow: ' + this.gameState.beastPositions[i].row);
      console.log('beastPosCol: ' + this.gameState.beastPositions[i].column);
    }
    // create visual board
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        switch (this.gameState.board[i][j]) {
        case 'W':
          this.gameState.boardDivs.changeElementColor(i, j, this.hardBlockColor);
          break;
        case 'H':
          this.gameState.boardDivs.changeElementColor(i, j, this.beastColor);
          break;
        case 'I':
          this.gameState.boardDivs.changeElementColor(i, j, this.playerColor);
          break;
        case 'G':
          this.gameState.boardDivs.changeElementColor(i, j, this.moveableBlockColor);
          break;
        case 'S':
          this.gameState.boardDivs.changeElementColor(i, j, this.boardColor);
        }
      }
    }
    this.gameState.boardDivs.show();
  },
  run: function () {
    this.init();
    this.crushAudio = document.getElementById('crush-audio');
    this.createBoard();
    // add event listener to space bar
    document.addEventListener('keydown', function runState(event) {
      const space = 32;
      switch (event.keyCode) {
      case space:
        document.removeEventListener('keydown', runState);
        beast.play();
        break;
      }
      console.log(event.keyCode);
    });
    // ! for high scores
    // ? Help and Hints
    // select level

    // disable listeners from this state upon leaving
      // (smooth transition)
  },
  play: function () {
    this.gameState.statusMessage.innerHTML = 'Playing... press ESC to pause';
    console.log('playing..');
    console.log('playerPositionRow: ' + this.gameState.playerPositionRow);
    console.log('playerPositionColumn: ' + this.gameState.playerPositionColumn);
    // activate UP DOWN RIGHT LEFT listeners for player
    this.gameState.playState = function (event) {
      const up = 38;
      const down = 40;
      const left = 37;
      const right = 39;
      const pRow = beast.gameState.playerPositionRow;
      console.log('pRow: ', pRow);
      const pCol = beast.gameState.playerPositionColumn;
      const board = beast.gameState.board;
      console.log('board: ', board);
      const boardDivs = beast.gameState.boardDivs;
      const reducible = function(character) {
        switch (character) {
        case 'S':
          return true;
          break;
        case 'H':
          return true;
          break;
        }
      }
      const removeBeast = function (row, column) {
        for (i = 0; i < beast.gameState.beastPositions.length; i++) {
          if (beast.gameState.beastPositions[i].row === row &&
              beast.gameState.beastPositions[i].column === column) {
            beast.gameState.beastPositions.splice(i, 1);
          }
        }
      }
      let block = null;
      switch (event.keyCode) {
      case up:
        beast.gameState.beastMemories = [];
        for (let i = 0; i < beast.gameState.beastPositions.length; i++) {
          beast.gameState.beastMemories.push({});
        }
        block = board[pRow - 1][pCol];
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
          } else if (board[i][pCol] === 'H' &&
                     (board[i - 1][pCol] === 'G' ||
                      board[i - 1][pCol] === 'W')) {
            board[i][pCol] = 'G';
            boardDivs.changeElementColor(i, pCol, beast.moveableBlockColor);
            board[pRow][pCol] = 'S'
            boardDivs.changeElementColor(pRow, pCol, beast.boardColor);
            board[pRow - 1][pCol] = 'I'
            boardDivs.changeElementColor(pRow - 1, pCol, beast.playerColor);
            beast.gameState.playerPositionRow--;
            console.log(beast.gameState.beastPositions);
            removeBeast(i, pCol);
            if (beast.gameState.beastPositions.length === 0) {
              window.clearInterval(beast.gameState.beastMovement);
              window.setTimeout(function () {
                beast.gameState.boardDivs.remove();
                beast.createBoard();
                beast.play();
              }, 3000);
            }
            console.log(beast.gameState.beastPositions);
            beast.crushAudio.play();
            beast.gameState.beastId = 0;
            beast.gameState.score++;
            beast.gameState.scoreDisplay.innerHTML = 'Score: ' + beast.gameState.score;
            console.log(beast.gameState.score);
          }
        } else if (block === 'S') {
          board[pRow][pCol] = 'S'
          boardDivs.changeElementColor(pRow, pCol, beast.boardColor);
          board[pRow - 1][pCol] = 'I'
          boardDivs.changeElementColor(pRow - 1, pCol, beast.playerColor);
          beast.gameState.playerPositionRow--;
        }
        break;
      case down:
        beast.gameState.beastMemories = [];
        for (let i = 0; i < beast.gameState.beastPositions.length; i++) {
          beast.gameState.beastMemories.push({});
        }
        block = board[pRow + 1][pCol];
        if (block === 'W') {
          return;
        } else if (block === 'G') {
          // check down the line..
          let i = pRow + 2;
          while (board[i][pCol] === 'G') {
            i++;
          }
          if (board[i][pCol] === 'S') {
            // change model and view
            board[i][pCol] = 'G';
            boardDivs.changeElementColor(i, pCol, beast.moveableBlockColor);
            board[pRow][pCol] = 'S'
            boardDivs.changeElementColor(pRow, pCol, beast.boardColor);
            board[pRow + 1][pCol] = 'I'
            boardDivs.changeElementColor(pRow + 1, pCol, beast.playerColor);
            beast.gameState.playerPositionRow++;
          } else if (board[i][pCol] === 'H' &&
                     (board[i + 1][pCol] === 'G' ||
                      board[i + 1][pCol] === 'W')) {
            board[i][pCol] = 'G';
            boardDivs.changeElementColor(i, pCol, beast.moveableBlockColor);
            board[pRow][pCol] = 'S'
            boardDivs.changeElementColor(pRow, pCol, beast.boardColor);
            board[pRow + 1][pCol] = 'I'
            boardDivs.changeElementColor(pRow + 1, pCol, beast.playerColor);
            console.log(beast.gameState.beastPositions);
            removeBeast(i, pCol);
            if (beast.gameState.beastPositions.length === 0) {
              window.clearInterval(beast.gameState.beastMovement);
              window.setTimeout(function () {
                beast.gameState.boardDivs.remove();
                beast.createBoard();
                beast.play();
              }, 3000);
            }
            console.log(beast.gameState.beastPositions);
            beast.crushAudio.play();
            beast.gameState.beastId = 0;
            beast.gameState.playerPositionRow++;
            beast.gameState.score++;
            beast.gameState.scoreDisplay.innerHTML = 'Score: ' + beast.gameState.score;
            console.log(beast.gameState.score);
          }
        } else if (block === 'S') {
          board[pRow][pCol] = 'S'
          boardDivs.changeElementColor(pRow, pCol, beast.boardColor);
          board[pRow + 1][pCol] = 'I'
          boardDivs.changeElementColor(pRow + 1, pCol, beast.playerColor);
          beast.gameState.playerPositionRow++;
        }
        break;
      case left:
        beast.gameState.beastMemories = [];
        for (let i = 0; i < beast.gameState.beastPositions.length; i++) {
          beast.gameState.beastMemories.push({});
        }
        block = board[pRow][pCol - 1];
        if (block === 'W') {
          return;
        } else if (block === 'G') {
          // check down the line..
          let i = pCol - 2;
          while (board[pRow][i] === 'G') {
            i--;
          }
          if (board[pRow][i] === 'S') {
            // change model and view
            board[pRow][i] = 'G';
            boardDivs.changeElementColor(pRow, i, beast.moveableBlockColor);
            board[pRow][pCol] = 'S'
            boardDivs.changeElementColor(pRow, pCol, beast.boardColor);
            board[pRow][pCol - 1] = 'I'
            boardDivs.changeElementColor(pRow, pCol - 1, beast.playerColor);
            beast.gameState.playerPositionColumn--;
          } else if (board[pRow][i] === 'H' &&
                     (board[pRow][i - 1] === 'G' ||
                      board[pRow][i - 1] === 'W')) {
            board[pRow][i] = 'G';
            boardDivs.changeElementColor(pRow, i, beast.moveableBlockColor);
            board[pRow][pCol] = 'S'
            boardDivs.changeElementColor(pRow, pCol, beast.boardColor);
            board[pRow][pCol - 1] = 'I'
            boardDivs.changeElementColor(pRow, pCol - 1, beast.playerColor);
            console.log(beast.gameState.beastPositions);
            removeBeast(pRow, i);
            if (beast.gameState.beastPositions.length === 0) {
              window.clearInterval(beast.gameState.beastMovement);
              window.setTimeout(function () {
                beast.gameState.boardDivs.remove();
                beast.createBoard();
                beast.play();
              }, 3000);
            }
            console.log(beast.gameState.beastPositions);
            beast.crushAudio.play();
            beast.gameState.beastId = 0;
            beast.gameState.playerPositionColumn--;
            beast.gameState.score++;
            beast.gameState.scoreDisplay.innerHTML = 'Score: ' + beast.gameState.score;
            console.log(beast.gameState.score);
          }
        } else if (block === 'S') {
          board[pRow][pCol] = 'S'
          boardDivs.changeElementColor(pRow, pCol, beast.boardColor);
          board[pRow][pCol - 1] = 'I'
          boardDivs.changeElementColor(pRow, pCol - 1, beast.playerColor);
          beast.gameState.playerPositionColumn--;
        }
        break;
      case right:
        beast.gameState.beastMemories = [];
        for (let i = 0; i < beast.gameState.beastPositions.length; i++) {
          beast.gameState.beastMemories.push({});
        }
        block = board[pRow][pCol + 1];
        if (block === 'W') {
          return;
        } else if (block === 'G') {
          // check down the line..
          let i = pCol + 2;
          while (board[pRow][i] === 'G') {
            i++;
          }
          if (board[pRow][i] === 'S') {
            // change model and view
            board[pRow][i] = 'G';
            boardDivs.changeElementColor(pRow, i, beast.moveableBlockColor);
            board[pRow][pCol] = 'S'
            boardDivs.changeElementColor(pRow, pCol, beast.boardColor);
            board[pRow][pCol + 1] = 'I'
            boardDivs.changeElementColor(pRow, pCol + 1, beast.playerColor);
            beast.gameState.playerPositionColumn++;
          } else if (board[pRow][i] === 'H' &&
                     (board[pRow][i + 1] === 'G' ||
                      board[pRow][i + 1] === 'W')) {
            board[pRow][i] = 'G';
            boardDivs.changeElementColor(pRow, i, beast.moveableBlockColor);
            board[pRow][pCol] = 'S';
            boardDivs.changeElementColor(pRow, pCol, beast.boardColor);
            board[pRow][pCol + 1] = 'I';
            boardDivs.changeElementColor(pRow, pCol + 1, beast.playerColor);
            console.log(beast.gameState.beastPositions);
            removeBeast(pRow, i);
            if (beast.gameState.beastPositions.length === 0) {
              window.clearInterval(beast.gameState.beastMovement);
              window.setTimeout(function () {
                beast.gameState.boardDivs.remove();
                beast.createBoard();
                beast.play();
              }, 3000);
            }
            console.log(beast.gameState.beastPositions);
            beast.crushAudio.play();
            beast.gameState.beastId = 0;
            beast.gameState.playerPositionColumn++;
            beast.gameState.score++;
            beast.gameState.scoreDisplay.innerHTML = 'Score: ' + beast.gameState.score;
            console.log(beast.gameState.score);
          }
        } else if (block === 'S') {
          board[pRow][pCol] = 'S';
          boardDivs.changeElementColor(pRow, pCol, beast.boardColor);
          board[pRow][pCol + 1] = 'I';
          boardDivs.changeElementColor(pRow, pCol + 1, beast.playerColor);
          beast.gameState.playerPositionColumn++;
        }
      }
      console.log(event.keyCode);
    }
    if (this.gameState.gameRunning === false) {
      document.addEventListener('keydown', beast.gameState.playState);
      this.gameState.gameRunning = true;
    }
    // activate time out for the start of beast movement
    const timeOut = function () {
      beast.gameState.statusMessage.innerHTML = 'Beasts Are Moving!';
      const interval = function () {
        console.log('beast move!');
        console.log('INTERVAL POsiTions LengTH ', beast.gameState.beastPositions.length);
        console.log('BEAST EYE Deee (ID)', beast.gameState.beastId);
        const pRow = beast.gameState.playerPositionRow;
        const pCol = beast.gameState.playerPositionColumn;
        const board = beast.gameState.board;
        const boardDivs = beast.gameState.boardDivs;
        console.log('bRow WHAT!');
        const bRow = beast.gameState.beastPositions[beast.gameState.beastId].row; // !!!
        console.log('bRow SUPER!', bRow);
        const bCol = beast.gameState.beastPositions[beast.gameState.beastId].column; // !!!
        //const trv = beast.gameState.beastTraversal;
        const trvCalc = function (num) {
          if (num > 0) {
            return 1;
          } else if (num < 0) {
            return -1;
          } else {
            return 0;
          }
        };
        const inMemory = function (row, col) {
          if (('' + row + ',' + col) in beast.gameState.beastMemories[beast.gameState.beastId]) {
            return true;
            console.log('in memory!');
          }
          return false;
        }
        const navRow = trvCalc(pRow - bRow);
        const navCol = trvCalc(pCol - bCol);
        const options = beast.gameState.beastTraversal['' + navRow + ',' + navCol];
        beast.gameState.beastMemories[beast.gameState.beastId]['' + bRow + ',' + bCol] = true;
          for (let i = 0; i < 8; i++) {
            const trvRow = bRow + options[i][0];
            const trvCol = bCol + options[i][1];
            if (board[trvRow][trvCol] === 'I') {
              document.removeEventListener('keydown', beast.gameState.playState);
              beast.gameState.gameRunning = false;
              beast.gameState.lives--;
              beast.gameState.livesDisplay.innerHTML = 'Lives: ' + beast.gameState.lives;
              beast.crushAudio.play();
              window.clearInterval(beast.gameState.beastMovement);
              if (beast.gameState.lives === 0) {
                beast.gameOver();
              } else {
                window.setTimeout(function () {
                  beast.gameState.boardDivs.remove();
                  beast.createBoard();
                  beast.play();
                }, 3000);
              }
              board[trvRow][trvCol] = 'H';
              boardDivs.changeElementColor(trvRow, trvCol, beast.beastColor);
              board[bRow][bCol] = 'S';
              boardDivs.changeElementColor(bRow, bCol, beast.boardColor);
              beast.gameState.beastPositions[beast.gameState.beastId].row = trvRow;
              beast.gameState.beastPositions[beast.gameState.beastId].column = trvCol;
              break;
            }
            if (board[trvRow][trvCol] === 'S' && !inMemory(trvRow, trvCol)) {
              board[trvRow][trvCol] = 'H';
              boardDivs.changeElementColor(trvRow, trvCol, beast.beastColor);
              board[bRow][bCol] = 'S';
              boardDivs.changeElementColor(bRow, bCol, beast.boardColor);
              beast.gameState.beastPositions[beast.gameState.beastId].row = trvRow;
              beast.gameState.beastPositions[beast.gameState.beastId].column = trvCol;
              break;
            }
            if (i === 7) {
              beast.gameState.beastMemories = [];
              for (let i = 0; i < beast.gameState.beastPositions.length; i++) {
                beast.gameState.beastMemories.push({});
              }
            }
          }
        if (beast.gameState.beastId < beast.gameState.beastPositions.length - 1) {
          console.log('beest id ++ !! meOW');
          beast.gameState.beastId++;
        } else {
          beast.gameState.beastId = 0;
          console.log('beest id = ZERO !! WooF');
        }
        console.log(bRow, bCol);
      }
      beast.gameState.beastMovement = window.setInterval(interval, 300);
      
      //window.setInterval
      // activate timed intervals for beast movement
      //window.set
      //window.setInterval
    }
    console.log('Beeest POsiTions LengTH ', beast.gameState.beastPositions.length);
    window.setTimeout(timeOut, 2750);
    // ESC to pause (disable beast intervals)
    
  },
  pause: function () {
    beast.gameState.statusMessage.innerHTML = 'Game paused...';
    
  },
  gameOver: function () {
    beast.gameState.statusMessage.innerHTML = 'Game Over!';
  }
}

window.onload = function () {
  beast.run();
}
