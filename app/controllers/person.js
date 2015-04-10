import Ember from 'ember';

export default Ember.Controller.extend({
  person_id: null,
  twitter_id: null,
  errorMessage: null,
  isValid: Ember.computed('twitter_id', 'person_id', function() {
    var twitter_id = this.get('twitter_id'),
        person_id = this.get('person_id');

    return (!Ember.isEmpty(twitter_id) || !Ember.isEmpty(person_id));
  }),
  actions: {
    lookUpPerson: function() {
      if (!this.get('isValid')) {
        this.set('errorMessage', 'We need either a twitter id or a person id, please.');
        return false;
      } else {
        this.set('errorMessage', null);
        return true;
      }
    }
  }
});
