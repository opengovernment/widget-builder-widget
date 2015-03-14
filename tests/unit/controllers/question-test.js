import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:question', {
  needs: ['controller:application']
});

test('it has same selectedPerson as application controller', function(assert) {
  var controller = this.subject(),
      applicationController = controller.get('controllers.application'),
      person = { 'full_name': 'Bernard Sanders' };

  applicationController.set('widget', { person: person });

  assert.equal(controller.get('selectedPerson'),
               applicationController.get('widget.person'));
});

test('it has same model as application controller widget.question', function(assert) {
  var controller = this.subject(),
      applicationController = controller.get('controllers.application'),
      question = { 'summary': 'blart' };

  applicationController.set('widget', { question: question });

  assert.equal(controller.get('model'),
               applicationController.get('widget.question'));
});
