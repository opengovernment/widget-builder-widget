import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Partner', {
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

  andThen(function() {
    assert.equal(currentPath(), 'settings');
  });
});
