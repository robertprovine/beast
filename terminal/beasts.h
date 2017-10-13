#define MAX_BEASTS 50

struct RowCol {
    int row;
    int col;
};

struct Beast {
    int row;
    int col;
    struct HashTable mem;
};

struct GameState {
    // player position
    int pRow;
    int pCol;
    int numberOfBeasts;
    int beasts[MAX_BEASTS];
}

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
