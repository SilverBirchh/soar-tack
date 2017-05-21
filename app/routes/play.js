import Ember from 'ember';

export default Ember.Route.extend({
  id: null,

  model: function() {
    return this.store.findAll('results');
  },

  deactivate: function() {
    this._super();
    this.set('id', null);
  },

  actions: {
    saveResult(result) {
      console.log('Saving...');
      const newResult = this.store.createRecord('results', result);

      this.set('id', newResult.get('id'));
      newResult.save();
    },

    editResult(result) {
      console.log('Editing...');
      const id = this.get('id');
      this.store.findRecord('results', id).then((oldResult) => {
        oldResult.set('playerOne.score', result.playerOne.score);
        oldResult.set('playerTwo.score', result.playerTwo.score);
        oldResult.save()
      });
    },
  }

});
