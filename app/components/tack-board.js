import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    reset() {
      this.sendAction('reset');
    },

    select(id) {
      this.sendAction('select', id);
    }
  }

});
