import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    nextStep: function() {
      var type = this.controllerFor('application').get('widget.widgetType');

      if (this.controllerFor('index').get('isValid')) {
        if (type === 'personWidget') {
          this.transitionTo('person');
        } else {
          this.transitionTo('question');
        }
      }

      return true;
    }
  }
});
