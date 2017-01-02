import Ember from 'ember';

export default Ember.Component.extend({
	playerOne: {
		shape: 'circle'
	},
	playerTwo: {
		shape: 'cross'
	},
	shapes: ['circle', 'cross'],
	isPlayerOnesGo: true,
  gameOver: false,
  result: null,
	map: {
		top: {
			left: {
				taken: false,
				shape: null,
			},
			middle: {
				taken: false,
				shape: null,
			},
			right: {
				taken: false,
				shape: null,
			},
		},
		middle: {
			left: {
				taken: false,
				shape: null,
			},
			middle: {
				taken: false,
				shape: null,
			},
			right: {
				taken: false,
				shape: null,
			},
		},
		bottom: {
			left: {
				taken: false,
				shape: null,
			},
			middle: {
				taken: false,
				shape: null,
			},
			right: {
				taken: false,
				shape: null,
			},
		},
	},

	isTaken(pos) {
		return this.get(`map.${pos}.taken`);
	},

	checkWinner() {
		// Check column
		['top', 'middle', 'bottom'].forEach((row) => {
			let rowCount = 0;
			['right', 'left', 'middle'].forEach((cell) => {
				rowCount += (this.get(`map.${row}.${cell}.shape`) === 'circle') ? 1 : 0;
				rowCount += (this.get(`map.${row}.${cell}.shape`) === 'cross') ? -1 : 0;
				if (rowCount === 3 || rowCount === -3) {
					return this.showWinner(this.get(`map.${row}.${cell}.shape`));
				}
			});
		});

		// Check row
		['right', 'left', 'middle'].forEach((col) => {
			let colCount = 0;
			['top', 'middle', 'bottom'].forEach((cell) => {
				colCount += (this.get(`map.${cell}.${col}.shape`) === 'circle') ? 1 : 0;
				colCount += (this.get(`map.${cell}.${col}.shape`) === 'cross') ? -1 : 0;
				if (colCount === 3 || colCount === -3) {
					return this.showWinner(this.get(`map.${cell}.${col}.shape`));
				}
			});
		});

    let diagCount = 0;
    // Check diagonal
    ['top', 'middle', 'bottom'].forEach((row) => {
			['right', 'left', 'middle'].forEach((cell) => {
        if (`${row}.${cell}` === 'top.left' || `${row}.${cell}` === 'middle.middle' || `${row}.${cell}` === 'bottom.right') {
          diagCount += (this.get(`map.${row}.${cell}.shape`) === 'circle') ? 1 : 0;
          diagCount += (this.get(`map.${row}.${cell}.shape`) === 'cross') ? -1 : 0;
          if (diagCount === 3 || diagCount === -3) {
            return this.showWinner(this.get(`map.${row}.${cell}.shape`));
          }
      }
      });
    });

    let antiDiagCount = 0;
    // Check diagonal opposite
    ['top', 'middle', 'bottom'].forEach((row) => {
      ['right', 'left', 'middle'].forEach((cell) => {
        if (`${row}.${cell}` === 'top.right' || `${row}.${cell}` === 'middle.middle' || `${row}.${cell}` === 'bottom.left') {
          antiDiagCount += (this.get(`map.${row}.${cell}.shape`) === 'circle') ? 1 : 0;
          antiDiagCount += (this.get(`map.${row}.${cell}.shape`) === 'cross') ? -1 : 0;
          if (antiDiagCount === 3 || antiDiagCount === -3) {
            return this.showWinner(this.get(`map.${row}.${cell}.shape`));
          }
      }
      });
    });

    // Check draw
    if (!this.get('gameOver')) {
    let moveCount = 0;
    ['top', 'middle', 'bottom'].forEach((row) => {
      ['right', 'left', 'middle'].forEach((cell) => {
        moveCount += (this.get(`map.${row}.${cell}.taken`)) ? 1 : 0;
        if (moveCount === 9) {
          return this.showWinner('draw');
        }
      });
    });
  }

	},

	reset() {
		$('.row-container div').each(function(cell) {
			$('.row-container div').eq(cell).removeClass('cross circle');
		});
		['top', 'middle', 'bottom'].forEach((row) => {
			['right', 'left', 'middle'].forEach((cell) => {
				this.set(`map.${row}.${cell}.taken`, false);
				this.set(`map.${row}.${cell}.shape`, null);
			})
		});
		this.set('isPlayerOnesGo', true);
    this.set('winner', null);
    this.set('gameOver', false);
    this.get('result') ? $('.mask').toggleClass('hidden') && $('.banner').toggleClass('hidden') : null;
		this.set('result', null);
	},

  showWinner(winner) {
    this.set('gameOver', true);
    if (winner === 'draw') {
      this.set('result', 'Too Bad. It was a draw!');
    } else {
      this.set('result', `The winner was ${winner}! Well done!`);
    }
    $('.mask').toggleClass('hidden');
    $('.banner').toggleClass('hidden');
  },

	actions: {
		select(pos) {
				if (this.isTaken(pos)) {
					return;
				}
				this.set(`map.${pos}.taken`, true);
				let shape = this.get('isPlayerOnesGo') ? this.get('playerOne.shape') : this.get('playerTwo.shape');
				$(event.target).addClass(shape);
				this.set(`map.${pos}.shape`, shape);
				this.toggleProperty('isPlayerOnesGo');
				this.checkWinner();
			},

			reset() {
				this.reset();
			}
	}
});
