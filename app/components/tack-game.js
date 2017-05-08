import Ember from 'ember';

export default Ember.Component.extend({

  playerOne: {
    name: null,
    shape: 'circle',
    score: '0'
  },
  playerTwo: {
    name: null,
    shape: 'cross',
    score: '0'
  },

  shapes: ['circle', 'cross', 'dino'],

  isPlayerOnesGo: true,
  disabled: false,
  result: null,
  squares: Ember.A(Array(9).fill(null)),

  checkWinner() {

    const rows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    rows.forEach((rows, index) => {
       // TODO: Implement forEach.
    })
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;

  },

  showWinner(winner) {
    //TODO: Implement winner
    // if (result === 'draw') {
    //   this.set('result', 'Too Bad. It was a draw!');
    // } else {
    //   this.set('result', `The winner was ${winner}! Well done!`);
    //   let player = this.get('playerOne.shape') === winner ? 'playerOne' : 'playerTwo';
    //   let score = parseInt(this.get(`${player}.score`));
    //   this.set(`${player}.score`, ++score);
  },

  actions: {
    select(squareId) {
      if (/*this.checkWinner() || */  this.get('squares')[squareId]) {
        return;
      }
      let shape = this.get('isPlayerOnesGo') ? this.get('playerOne.shape') : this.get('playerTwo.shape');
      this.toggleProperty('isPlayerOnesGo');
      let squares = this.get('squares').slice();
      squares[squareId] = shape;
      this.set('squares', squares);
      // this.checkWinner();
    },

    reset() {
      this.set('squares', Ember.A(Array(9).fill(null)))
      this.set('isPlayerOnesGo', true);
      this.set('disabled', false);
      this.set('result', null);
    }
  }
});
