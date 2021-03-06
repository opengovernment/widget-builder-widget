import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:person', {
  needs: ['controller:application']
});

test('renderTemplate sets application.duringNextSteps to true',
     function(assert) {
  var route = this.subject(),
      applicationController = route.controllerFor('application'),
      didRender;

  // http://discuss.emberjs.com/t/test-isolation-aka-how-wrong-am-i-doing-it/7162/2
  route.render = function mockRender(route) {
    didRender = true;
  };

  route.renderTemplate();

  assert.equal(applicationController.get('duringNextSteps'), true);
  assert.ok(didRender, 'expected to render');
});

test('lookUpPerson goes to selectedPerson step', function(assert) {

  var route = this.subject(),
      didTransition;

  // http://discuss.emberjs.com/t/test-isolation-aka-how-wrong-am-i-doing-it/7162/2
  route.transitionTo = function mockTransitionTo(route) {
    didTransition = true;
    assert.equal(route, 'selected-person',
                 'expected transitionTo selected-person');
  };

  route.send('lookUpPerson');

  assert.ok(didTransition, 'expected to transition');
});
