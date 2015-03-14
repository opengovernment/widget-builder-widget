import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:partner', {
  needs: ['controller:application']
});

test('it has same model as application controller widget.partner', function(assert) {
  var controller = this.subject(),
      applicationController = controller.get('controllers.application'),
      partner = { 'name': 'blart' };

  applicationController.set('widget', { partner: partner });

  assert.equal(controller.get('model'),
               applicationController.get('widget.partner'));
});
