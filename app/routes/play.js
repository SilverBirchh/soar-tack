import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('results');
  },

  actions: {
    saveResult(result) {
      console.log("Hello");
    },

    editResult(result) {
      console.log("byeee");
    },
  }

});
