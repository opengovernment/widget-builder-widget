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
