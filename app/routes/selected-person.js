import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var model,
        params,
        twitter_id = this.controllerFor('person').get('twitter_id'),
        person_id = this.controllerFor('person').get('person_id');

    if (Ember.isEmpty(person_id)) {
      params = { 'twitter_id': twitter_id };
    } else {
      params = { 'person_id': person_id };
    }

    model = this.apijax.GET('identifier.json', params);
    return model;
  },
  setupController: function(controller, model) {
    this._super(controller, model);

    if (model.length > 0) {
      this.controllerFor('application').set('widget.person', model.objectAt(0));
    } else {
      this.controllerFor('selected-person')
        .set('errorMessage',
             'Twitter account or person id do not match anyone we have on file. Please try again.');
    }
  },
  renderTemplate: function() {
    this.controllerFor('application').set('duringNextSteps', true);
    this.render({ into: 'application', outlet: 'next-steps' });
  },
  actions: {
    savePerson: function() {
      this.transitionTo('question');

      return false;
    }
  }
});
