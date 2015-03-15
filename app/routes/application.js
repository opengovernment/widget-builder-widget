import Ember from 'ember';
import Widget from '../models/widget';

export default Ember.Route.extend({
  actions: {
    backToStart: function() {
      this.controllerFor('application').set('widget');
      this.controllerFor('application').set('widget', Widget.create());

      this.transitionTo('application');

      return false;
    }
  }
});
