import Ember from 'ember';

export default Ember.Object.extend({
  widgetType: null,
  headline: null,
  question: {
    summary: null,
    body: null
  },
  partner: {
    name: null,
    url: null,
    logo: null
  },
  // pardon the snake case
  // done to match Rails json output
  person: {
    id: null,
    full_name: null,
    party: null,
    state: null,
    photo_url: null,
    political_position_title: null,
    most_recent_district: null
  },
  settings: {
    tagId: null,
    // TODO: add feature to output suggested CSS rules
    // to override default CSS rules for widget
    // these are placeholder for suggested rules
    width: null,
    height: null,
    color: null,
    bgcolor: null
  },
  clearValues: function() {
    this.set('widgetType', null);
    this.set('headline', null);
    this.set('question', this.get('questionSpec'));
    this.set('partner', this.get('partnerSpec'));
    this.set('person', this.get('personSpec'));
    this.set('settings', this.get('settingsSpec'));
  },
  questionSpec: {
    summary: null,
    body: null
  },
  partnerSpec: {
    name: null,
    url: null,
    logo: null
  },
  personSpec: {
    id: null,
    full_name: null,
    party: null,
    state: null,
    photo_url: null,
    political_position_title: null,
    most_recent_district: null
  },
  settingsSpec: {
    tagId: null,
    width: null,
    height: null,
    color: null,
    bgcolor: null
  }
});
