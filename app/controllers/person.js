import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  model: Ember.computed.alias('controllers.application.widget.person'),
  person_id: null,
  twitter_id: null,
  errorMessage: null,
  isValid: function() {
    var twitter_id = this.get('twitter_id'),
        person_id = this.get('person_id');

    return (!Ember.isEmpty(twitter_id) || !Ember.isEmpty(person_id));
  }.property('twitter_id', 'person_id'),
  actions: {
    lookUpPerson: function() {
      if (this.get('isValid')) {
        var params,
            twitter_id = this.get('twitter_id'),
            person_id = this.get('person_id'),
            _this = this;

        if (Ember.isEmpty(person_id)) {
          params = { 'twitter_id': twitter_id };
        } else {
          params = { 'person_id': person_id };
        }

        this.apijax.GET('/identifier.json', params).then(function(data) {
          if (data.length > 0) {
            _this.set('model', data.objectAt(0));
          } else {
            _this.set('errorMessage',
                      'Twitter account or person id do not match anyone we have on file. Please try again.');
          }
        });

      } else {
        this.set('errorMessage', 'We need either a twitter id or a person id, please.');
      }
    }
  }
});
