import Ember from 'ember';

export default Ember.Component.extend({

  playerOne: {
    name: 'Player One',
    shape: 'circle',
    score: '0'
  },
  playerTwo: {
    name: 'Player Two',
    shape: 'cross',
    score: '0'
  },

  shapes: ['circle', 'cross', 'dino'],

  isPlayerOnesGo: true,

  disabled: false, //TODO: make this computed

  result: null,

  squares: Ember.A(new Array(6)),

  wasADraw: Ember.computed('squares.[]', function() {
    const squares = this.get('squares');
    if (squares.includes(null)) {
      return false;
    }
    return true;
  }),

  wasAWinner: Ember.computed('squares.[]', 'sqaures', 'squares.@each', function() {
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
    for (let i = 0; i < rows.length; i++) {
      const [a, b, c] = rows[i];
      const squares = this.get('squares');
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  }),

  checkResult: Ember.observer('wasAWinner', 'wasADraw', function() {
    if (this.get('wasAWinner')) {
      let player = this.get('playerOne.shape') === winner ?
                    'playerOne' : 'playerTwo';
      let score = parseInt(this.get(`${player}.score`));
      this.set(`${player}.score`, ++score);
      this.set('result', `The winner was ${this.get(`${player}.name`)}! Well done!`);
   }

   else if (this.get('wasADraw')) {
     this.set('result', 'Too Bad. It was a draw!');
   }
 }),

  actions: {
    select(squareId) {
      this.set('disabled', true);
      if (this.get('squares')[squareId]) {
        return;
      }

      let shape = this.get('isPlayerOnesGo') ? this.get('playerOne.shape') : this.get('playerTwo.shape');
      let squares = this.get('squares').slice();
      squares[squareId] = shape;
      this.toggleProperty('isPlayerOnesGo');
      this.set('squares', Ember.A(squares));
    },

    reset() {
      this.setProperties({
        isPlayerOnesGo: true,
        disabled: false,
        result: null,
        squares: Ember.A(new Array(6)),
      });
    }
  }
});
