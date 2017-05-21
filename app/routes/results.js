import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('results');
  },

  actions: {
    delete(id) {
      console.log(`Deleting...${id}`);

      this.store.findRecord('results', id).then((result) => {
        result.destroyRecord()
      });
    },
  }
});
