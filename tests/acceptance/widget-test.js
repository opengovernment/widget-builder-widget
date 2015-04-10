import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: widget', {
  beforeEach: function() {
    application = startApp();
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('when partner form is filled out, ', function(assert) {
  visit('/');

  fillIn('.headline-field', 'A HEADLINE');

  click('input[value="addressWidget"]');

  fillIn('.summary-field', 'QUESTION_SUMMARY');

  click('input[type="submit"]');

  fillIn('.partner-name-field', 'PARTNER_NAME');

  click('input[type="submit"]');

  fillIn('.tag-id-field', 'widget-123');

  click('input[type="submit"]');

  var expected = '<script class="at-widget-loader" src="askthem.dev/widgets/address/widget.js" data-tag-id="widget-123" type="text/javascript"\n data-headline="A HEADLINE"\n data-question-summary="QUESTION_SUMMARY"\n data-partner-name="PARTNER_NAME"\n async></script>';

  andThen(function() {
    assert.equal(find('.code-output').val(), expected);
  });
});
