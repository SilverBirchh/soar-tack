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
  'tack-board',
  'Integration: tackBoardComponent', {
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

      it('show first shape when I click', function() {
        this.$('.cell.no-border').eq(0).click();
        expect(this.$('.cell.no-border.circle').eq(0)).to.have.length(1);
      });

      it('disables character selection', function() {
        this.$('.cell.no-border').eq(1).click();
        expect(this.$('.ember-power-select-trigger[aria-disabled=true]')).to.have.lengthOf(2);
      });

      it('resets the board', function() {
        this.$('.cell.no-border').eq(1).click();
        this.$('.btn.btn-primary.reset').eq(0).click();
        $('.cell.no-border.circle').each((cell) => {
          expect(this.$('.cell.no-border.circle').eq(cell)).to.have.length(0);
        });
      });

      it('can change character', function() {
        this.$('.ember-power-select-trigger.ember-view.ember-basic-dropdown-trigger').eq(0).click();
        this.$('.btn.btn-primary.reset').eq(0).click();
        $('.cell.no-border.circle').each((cell) => {
          expect(this.$('.cell.no-border.circle').eq(cell)).to.have.length(0);
        });
      });
    });

    describe('As player two', function() {
      beforeEach(function() {
        this.render(hbs`{{#tack-board}}{{/tack-board}}`);
      });

      it('renders', function() {
        expect(this.$()).to.have.length(1);
      });

      it('show second shape when I click', function() {
        this.$('.cell.no-border').eq(0).click();
        this.$('.cell.no-border').eq(1).click();
        expect(this.$('.cell.no-border.circle').eq(0)).to.have.length(1);
        expect(this.$('.cell.no-border.cross').eq(0)).to.have.length(1);
      });

    });
  }
);
