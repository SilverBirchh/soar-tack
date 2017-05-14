import DS from 'ember-data';

export default DS.Model.extend({
  playerOne: DS.attr(),
  playerTwo: DS.attr(),
});
