import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:widget', {
  needs: ['controller:application']
});

test('it has same model as application controller widget',
     function(assert) {
  var controller = this.subject(),
      applicationController = controller.get('controllers.application'),
      widget = { settings: { 'tagId': 'blart' } };

  applicationController.set('widget', widget);

  assert.equal(controller.get('model'),
               applicationController.get('widget'));
});

test('code, given a populated widget, outputs correspondng javascript and html',
     function(assert) {
  var controller = this.subject(),
      applicationController = controller.get('controllers.application'),
      widget = { widgetType: 'addressWidget',
                 headline: 'it is late!',
                 question: { summary: 'and i am getting sleepy?' },
                 partner: { name: 'bye george' },
                 person: { id: '1' },
                 settings: { 'tagId': 'blart' } };

  applicationController.set('widget', widget);

  var expected = '<script class="at-widget-loader" src="askthem.dev/widgets/address/widget.js" data-tag-id="blart" type="text/javascript" async></script>\n<div style="display: none;" data-tag-id="blart" class="at-widget-attributes">\n<div class="headline">it is late!</div>\n<div class="question-summary">and i am getting sleepy?</div>\n<div class="partner-name">bye george</div>\n<div class=\"person-id\">1</div>\n</div>';

  assert.equal(controller.get('code'), expected);
});
