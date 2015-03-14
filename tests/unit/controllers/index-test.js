import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:index', {
  needs: ['controller:application']
});

test('it has same model as application controller widget', function(assert) {
  var controller = this.subject(),
      applicationController = controller.get('controllers.application'),
      widget = { widgetType: 'personWidgtet' };

  applicationController.set('widget', widget);

  assert.equal(controller.get('model'),
               applicationController.get('widget'));
});

test('isValid checks headline is present and has atleast three chars',
     function(assert) {

  var controller = this.subject({ model: { headline: null } }),
      result;

  result = controller.get('isValid');

  assert.equal(result, false);

  controller.set('model.headline', 'XYZ');

  result = controller.get('isValid');

  assert.equal(result, true);
});
