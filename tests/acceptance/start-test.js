import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'widget-builder-widget/tests/helpers/start-app';

var application;

module('Acceptance: Start', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting / should have intro',
     function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentPath(), 'index');
    assert.equal(find('.intro .headline').text(), 'Set up your AskThem.io widget');
  });
});

test('visiting / should have start of widget configuration for address widget',
     function(assert) {
  visit('/');

  fillIn('.headline-field', 'A HEADLINE');

  click('input[value="addressWidget"]');

  andThen(function() {
    assert.equal(currentPath(), 'question');
  });
});

test('visiting / should have start of widget configuration for person widget',
     function(assert) {
  visit('/');

  fillIn('.headline-field', 'A HEADLINE');

  click('input[value="personWidget"]');

  andThen(function() {
    assert.equal(currentPath(), 'person');
  });
});

test('visiting / should not transition to next step if headline is blank',
     function(assert) {
  visit('/');

  click('input[value="personWidget"]');

  andThen(function() {
    assert.equal(find('.error').text(), 'Headline is required');
  });
});
