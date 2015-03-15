import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.controllerFor('application').set('duringNextSteps', true);
    this.render({ into: 'application', outlet: 'next-steps' });
  },
  actions: {
    lookUpPerson: function() {
      this.transitionTo('selected-person');

      return true;
    }
  }
});
