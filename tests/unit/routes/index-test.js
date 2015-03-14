import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:index', {
  needs: ['controller:application', 'controller:index']
});

test('when widgetType is personWidget, nextStep takes user to person',
     function(assert) {
  var route = this.subject(),
      applicationController = route.controllerFor('application'),
      didTransition;

  applicationController.set('widget.widgetType', 'personWidget');
  applicationController.set('widget.headline', 'HEADLINE');

  // http://discuss.emberjs.com/t/test-isolation-aka-how-wrong-am-i-doing-it/7162/2
  route.transitionTo = function mockTransitionTo(route) {
    didTransition = true;
    assert.equal(route, 'person',
                 'expected transitionTo person');
  };

  route.send('nextStep');

  assert.ok(didTransition, 'expected to transition');
});

test('when widgetType is addressWidget, nextStep takes user to question',
     function(assert) {
  var route = this.subject(),
      applicationController = route.controllerFor('application'),
      didTransition;

  applicationController.set('widget.widgetType', 'addressWidget');
  applicationController.set('widget.headline', 'HEADLINE');

  // http://discuss.emberjs.com/t/test-isolation-aka-how-wrong-am-i-doing-it/7162/2
  route.transitionTo = function mockTransitionTo(route) {
    didTransition = true;
    assert.equal(route, 'question',
                 'expected transitionTo question');
  };

  route.send('nextStep');

  assert.ok(didTransition, 'expected to transition');
});
