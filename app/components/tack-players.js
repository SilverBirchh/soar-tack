import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    switchPlayerOne() {
      this.sendAction('switchPlayerOne');
    }
  }
});
