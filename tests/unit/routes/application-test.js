import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:application', {
  needs: ['controller:application']
});

test('backToStart transitions to application route',
     function(assert) {
  var route = this.subject(),
      controller = route.controllerFor('application'),
      didTransition;

  // http://discuss.emberjs.com/t/test-isolation-aka-how-wrong-am-i-doing-it/7162/2
  route.transitionTo = function mockTransitionTo(route) {
    didTransition = true;
    assert.equal(route, 'application',
                 'expected transitionTo application');
  };

  route.send('backToStart');

  assert.ok(didTransition, 'expected to transition');
});
