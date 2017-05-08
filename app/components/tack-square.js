import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cell'],
  classNameBindings: ['value'],

  value: null,

  number: 0,

  click() {
    this.sendAction('select', this.get('number'));
  },
});
