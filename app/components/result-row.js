import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',

  actions: {
    delete(id) {
      this.sendAction('delete', id);
    }
  }
});
