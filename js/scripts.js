// Set map options
const mapCenter = [40.025, -105.28];
let options = {
  center: mapCenter,
  zoom: 11,
  zoomControl: true,
  attribution:
    '&copy; <a href="https:/https://www.bocodems.org/">&copy; 2022. Boulder County Democratic Party.</a> All rights reserved.',
};

// Create L.map object and display in <div id=map>
const map = L.map("map", options);

// BASEMAPS

const lyrMobile = L.tileLayer.provider("Thunderforest.MobileAtlas");
map.addLayer(lyrMobile);

// OVERLAY LAYERS

const lyrPrecincts = L.geoJSON.ajax("data/Precincts.geojson", {
  color: "blue",
  fill: false,
  weight: 2,
});

map.addLayer(lyrPrecincts);

// Create Basemaps object for Layers Control
const objBasemaps = {
  Mobile: lyrMobile,
};

// LAYER CONTROL
// Create Overlays object for Layer Control
const objOverlays = {
  Precincts: lyrPrecincts,
};

const ctlLayers = L.control
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
