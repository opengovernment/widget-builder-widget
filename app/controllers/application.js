import Ember from 'ember';
import config from '../config/environment';
import Widget from '../models/widget';

export default Ember.Controller.extend({
  attrs: config.options,
  widget: Widget.create(),
  duringNextSteps: false
});
