import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    backToStart: function() {
      this.controllerFor('application').get('widget').clearValues();

      this.transitionTo('application');

      return false;
    }
  }
});
