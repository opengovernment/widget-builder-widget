import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('question');
  this.route('partner');
  this.route('person');
  this.route('settings');
  this.route('widget');
});

export default Router;
