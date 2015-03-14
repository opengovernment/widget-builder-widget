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
  }
});
