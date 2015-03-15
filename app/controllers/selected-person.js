import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  selectedPerson: Ember.computed.alias('controllers.application.widget.person'),
  errorMessage: null
});
