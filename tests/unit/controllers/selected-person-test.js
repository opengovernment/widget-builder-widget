import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:selected-person', {
  needs: ['controller:application']
});

test('it has same selectedPerson as application controller widget.person', function(assert) {
  var controller = this.subject(),
      applicationController = controller.get('controllers.application'),
      person = { 'full_name': 'blart' };

  applicationController.set('widget', { person: person });

  assert.equal(controller.get('selectedPerson'),
               applicationController.get('widget.person'));
});
