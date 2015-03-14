import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  model: Ember.computed.alias('controllers.application.widget.partner'),
  errorMessage: null
});
