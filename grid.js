class Grid {
  constructor(boxSize, columns, rows, color, backgroundColor, id) {
    this.boxSize = boxSize;
    this.columns = columns;
    this.rows = rows;
    this.color = color;
    this.backgroundColor = backgroundColor;
    this.id = id;
    this.grid = [];
    this.container = document.createElement('div');
    this.container.setAttribute('class', 'container');
    this.container.setAttribute('id', id);
    this.container.style.width = '' + (columns * boxSize) + 'px';
    this.container.style.height = '' + (rows * boxSize) + 'px';
    this.container.style.border = '1px ' + backgroundColor + ' solid';
    for (let i = 0; i < rows; i++) {
      this.grid.push([]);
      const row = document.createElement('div');
      row.setAttribute('class', 'row');
      row.style.height = '' + boxSize + 'px';
      this.container.appendChild(row);
      for (let j = 0; j < columns; j++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        box.style.border = '1px ' + backgroundColor + ' solid';
        box.style.display = 'inline-block';
        box.style.margin = '0';
        box.style.padding = '0';
        box.style.width = '' + (boxSize - 2) + 'px';
        box.style.height = '' + (boxSize - 2) + 'px';
        box.style.backgroundColor = color;
        this.grid[i].push(box);
        row.appendChild(box);
      }
    }
  }
  changeElementColor(row, column, color) {
    if (this.boxSize === 30 && this.columns === 40 && this.rows === 23) {
      switch (color) {
      case 'red':
        const beastDiv = document.createElement('div');
        beastDiv.setAttribute('class', 'beast');
        beastDiv.innerHTML = 'H';
        this.grid[row][column].innerHTML = '';
        this.grid[row][column].appendChild(beastDiv);
        this.grid[row][column].style.backgroundColor = 'black';
        return;
      case 'aqua':
        const playerDiv = document.createElement('div');
        playerDiv.setAttribute('class', 'diamond');
        this.grid[row][column].innerHTML = '';
        this.grid[row][column].appendChild(playerDiv);
        this.grid[row][column].style.backgroundColor = 'black';
        return;
      default:
        //if (this.grid[row][column].hasChildNodes()) {
          this.grid[row][column].innerHTML = '';
          this.grid[row][column].style.backgroundColor = color;
        //}
        return;
      }
    }
    this.grid[row][column].style.backgroundColor = color;
  }
  show() {
    document.body.appendChild(this.container);
  }
  remove() {
    const container = document.getElementById(this.id);
    document.body.removeChild(this.container);
  }
}
