import Ember from 'ember';

export default Ember.Component.extend({

  classNameBindings: ['result::hidden'],

  actions: {
    reset() {
      this.sendAction('reset');
    }
  }
});
