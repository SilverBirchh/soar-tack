import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tick-tack-toe', 'Integration | Component | tick tack toe', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tick-tack-toe}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tick-tack-toe}}
      template block text
    {{/tick-tack-toe}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
