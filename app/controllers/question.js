import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  model: Ember.computed.alias('controllers.application.widget.question'),
  selectedPerson: Ember.computed.alias('controllers.application.widget.person'),
  errorMessage: null
});
