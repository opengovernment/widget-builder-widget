import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:application', {
});

test('it has a default duringNextSteps value of false', function(assert) {
  var controller = this.subject();

  var result = controller.get('duringNextSteps');

  assert.equal(result, false);
});
