import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    backToStart: function() {
      this.transitionTo('application');

      return false;
    }
  }
});
