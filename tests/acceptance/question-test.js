import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Question', {
  beforeEach: function() {
    application = startApp();
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('when question form is filled out, ', function(assert) {
  visit('/');

  fillIn('.headline-field', 'A HEADLINE');

  click('input[value="addressWidget"]');

  fillIn('.summary-field', 'QUESTION_SUMMARY');

  click('input[type="submit"]');

  andThen(function() {
    assert.equal(currentPath(), 'partner');
  });
});
