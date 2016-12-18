/* jshint expr:true */
import {
  expect
} from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import {
  beforeEach
} from 'mocha'
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'nav-bar',
  'Integration: NavBarComponent', {
    integration: true
  },
  function() {
    describe('As player one', function() {
      beforeEach(function() {
        this.render(hbs`{{#tack-board}}{{/tack-board}}`);
      });

      it('renders', function() {
        expect(this.$()).to.have.length(1);
      });

      it('show circle when I click', function() {
        Ember.run(this.$('.cell.no-border').eq(0).click());
        expect(this.$('.cell.no-border.circle').eq(0)).to.have.length(1);
      });
    });
  }
);
