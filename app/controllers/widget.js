import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  needs: ['application'],
  model: Ember.computed.alias('controllers.application.widget'),
  code: function() {
    var code = '',
        widgetType = this.get('model.widgetType'),
        headline = this.get('model.headline'),
        question = this.get('model.question'),
        partner = this.get('model.partner'),
        person = this.get('model.person'),
        tagId = this.get('_tagIdOrGenerate');

    code = this._loaderTag(tagId);
    code = code + this._openDivForAttributes(tagId);
    code = code + this._attributeDivFor('headline', headline);
    code = code + this._attrsDivsFrom(question, 'question');
    code = code + this._attrsDivsFrom(partner, 'partner');
    code = code + this._attrsDivsFrom(person, 'person');
    code = code + '</div>';

    return code;
  }.property('model'),
  _widgetUrl: function() {
    var _widgetUrl;

    if (this.get('model.widgetType') === 'addressWidget') {
      _widgetUrl = this.get('_addressWidgetUrl');
    } else {
      _widgetUrl = this.get('_personWidgetUrl');
    }

    return _widgetUrl;
  }.property('model.widgetType'),
  _addressWidgetUrl: config.APP.askThemHost + '/widgets/address/widget.js',
  _personWidgetUrl: config.APP.askThemHost + '/widgets/person/widget.js',
  _tagIdOrGenerate: function() {
    var settings = this.get('model.settings'),
        tagId = '';

    if (!Ember.isEmpty(settings) && !Ember.isEmpty(settings.tagId)) {
      tagId = Ember.String.dasherize(settings.tagId);
    } else {
      tagId = 'at-' + Ember.String.dasherize(this.get('model.widgetType'));
      tagId = tagId + '-' + Math.floor(Math.random()*1000);
    }

    return tagId;
  }.property('model.settings', 'model.widgetType'),
  _loaderTag: function(tagId) {
    var tag = '<script class="at-widget-loader"';

    tag = tag + ' src="' + this.get('_widgetUrl') + '" ';
    tag = tag + 'data-tag-id="' + tagId +'" ';
    tag = tag + 'type="text/javascript" async></script>' + '\n';
    return tag;
  },
  _openDivForAttributes: function(tagId) {
    var tag = '<div style="display: none;" ';
    tag = tag + 'data-tag-id="' + tagId +'" class="at-widget-attributes">\n';
    return tag;
  },
  _attributeDivFor: function(name, value) {
    var attrHtml = '<div class="' + name + '">';
    attrHtml = attrHtml + value + '</div>\n';
    return attrHtml;
  },
  _attrsDivsFrom: function(obj, prefix) {
    var divs = '';
    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        var value = obj[property];

        if (!Ember.isEmpty(value)) {
          divs = divs + this._attributeDivFor(prefix + '-' + property, value);
        }
      }
    }
    return divs;
  }
});
