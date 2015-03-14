import Ember from 'ember';
import Widget from '../models/widget';

export default Ember.Controller.extend({
  needs: 'application',
  model: Ember.computed.alias('controllers.application.widget'),
  errorMessage: null,
  isValid: function() {
    var headline = this.get('model.headline');

    return (!Ember.isEmpty(headline) && headline.length > 2);
  }.property('model.headline'),
  actions: {
    nextStep: function() {
      if (!this.get('isValid')) {
        this.set('errorMessage', 'Headline is required');
        // TODO: how to reset radio buttons to unselected
        // or provide alternate way to trigger next step
        // this.set('model.widgetType', null);
      }

      return true;
    }
  }
});
