// shuffle function with slight syntax embellishment and put
// into an object from:
// https://www.frankmitchell.org/2015/01/fisher-yates/
const rand = {
  shuffle: function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
};
