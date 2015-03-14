import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:widget', {
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
