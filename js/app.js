// Basemap variables
var map;
var lyrMobile;

// District Layer variables
var lyrPrecincts;

var ctlSidebar;
var ctlLayers;
var objBasemaps;
var objOverlays;

const boulderLatlng = [40.025, -105.28];

// Set map default view
let config = {
  center: boulderLatlng,
  zoom: 11,
  zoomControl: true,
  attribution:
    '&copy; <a href="https:/https://www.bocodems.org/">&copy; 2022. Boulder County Democratic Party.</a> All rights reserved.',
};

// Create mymap and display in <div id='mapdiv'>
map = L.map("mapdiv", config);

// BASEMAPS

lyrMobile = L.tileLayer.provider("Thunderforest.MobileAtlas");

// Add default basemap provider to map
map.addLayer(lyrMobile);

// OVERLAY LAYERS

lyrPrecincts = L.geoJSON.ajax("data/Precincts.geojson", {
  color: "blue",
  fill: false,
  weight: 2,
});

map.addLayer(lyrPrecincts);

// Create Basemaps object for Layers Control
objBasemaps = {
  Mobile: lyrMobile,
};

// LAYER CONTROL
// Create Overlays object for Layer Control
objOverlays = {
  Precincts: lyrPrecincts,
};

ctlLayers = L.control
  .layers(objBasemaps, objOverlays, { position: "topleft" })
  .addTo(map);

// Map Info control

let info = L.control({ position: "topleft" });

info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info");
  this.update();
  return this._div;
};

// method to update the control with feature properties
info.update = function (props) {
  this._div.innerHTML = "<h4>Precinct</h4>" + "Hover over a precinct";
};

info.addTo(map);

// ctlSidebar = L.control.sidebar("side-bar").addTo(mymap);
