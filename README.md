# Widget-builder-widget

This is the basis for a third party widget for AskThem.io, it will be
distributed via jQuery loader and multiple instances of the Ember app will be
able to run on a page.

This Ember.app is the basis for an embeddable widget that helps people
set up AskThem.io other embeddable widgets!

It's a form that sets up various AskThem.io widget options and outputs
HTML that widget embedders can copy and paste.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `ember install`
* answer "1" for ember#canary from the prompt from bower (after ember
  1.12.0 is released, probably a good idea to switch to standard ember releases)

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

In the case of AskThem.io, this is a manual process right now. I'll write a post
about it at some point.

Otherwise the deployment should be fairly standard. Just remember to set up
your configuration via meta tags on the host page. See app/index.html and
tests/index.html for example configuration.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Credits

Originally developed by [Walter Mcginnis](https://github.com/walter).

This ember-cli add-on was built as a part of widget work for http://askthem.io.

Thanks to the Ember.js, ember-cli, and Broccoli teams for excellent work.
