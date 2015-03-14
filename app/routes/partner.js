import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.controllerFor('application').set('duringNextSteps', true);
    this.render({ into: 'application', outlet: 'next-steps' });
  },
  actions: {
    savePartner: function() {
      this.transitionTo('settings');

      return false;
    }
  }
});
