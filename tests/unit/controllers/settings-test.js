import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:settings', {
  needs: ['controller:application']
});

test('it has same model as application controller widget.settings',
     function(assert) {
  var controller = this.subject(),
      applicationController = controller.get('controllers.application'),
      settings = { 'tagId': 'blart' };

  applicationController.set('widget', { settings: settings });

  assert.equal(controller.get('model'),
               applicationController.get('widget.settings'));
});
