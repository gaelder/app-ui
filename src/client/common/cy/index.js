const cytoscape = require('cytoscape');

const stylesheet = require('./stylesheet');
const bindEvents = require('./events');

// set the sbgn style sheet
// bind interaction events (mouse hovering, collapsing)
const make_cytoscape = (opts) => {
  const cy = cytoscape({
    container: opts.container,
    style: stylesheet,
    minZoom: 0.16,
    maxZoom: 4,
    headless: opts.headless,
    zoomingEnabled: true
  });

  bindEvents(cy);

  return cy;
};

module.exports = make_cytoscape;