'use strict';

const Adapter  = require('@frctl/fractal').Adapter;
const { Edge } = require('edge.js');
const { Supercharged } = require('edge-supercharged');

class EdgeAdapter extends Adapter {

  render(path, str, context, meta) {
    let views = {};

    this.views.forEach(view => (views[view.handle] = view.content));
    return Promise.resolve(this.engine.render(path, context));
  }

}

module.exports = function() {
  return {
    register(source, app) {
      const edge = new Edge({ cache: false });
      const supercharged = new Supercharged();

      const edgeComponentsPath = app.components.config().edge != undefined ? app.components.config().edge.components.path : app.components.config().path

      edge.mount(edgeComponentsPath);

      edge.use(supercharged.wire, {
        recurring: process.env.NODE_ENV === 'development'
      });

      return new EdgeAdapter(edge, source);
    }
  }
};
