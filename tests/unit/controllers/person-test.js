import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:person', {
});

test('it isValid if either twitter_id or person_id are set', function(assert) {
  var controller = this.subject();

  controller.set('twitter_id', 'lessig');

  assert.ok(controller.get('isValid'));
});

test('not isValid if no twitter_id or person_id are set', function(assert) {
  var controller = this.subject();

  assert.ok(!controller.get('isValid'));
});

test('lookUpPerson sets error message if not isValid', function(assert) {
  var controller = this.subject();

  controller.send('lookUpPerson');

  assert.ok(controller.get('errorMessage'));
});

test('lookUpPerson does not set error message if isValid', function(assert) {
  var controller = this.subject();

  controller.set('twitter_id', 'lessig');

  controller.send('lookUpPerson');

  assert.ok(!controller.get('errorMessage'));
});
